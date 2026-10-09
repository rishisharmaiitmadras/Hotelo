import Groq from "groq-sdk";
import { Hotel } from "../models/hotelModels.js";

const aiSearchHotels = async (req, res) => {
  try {
    // Groq client inside function (prevents top-level startup crash)
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ message: "Prompt is required" });

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
  role: "system",
  content: `You are an AI assistant for a hotel booking app. 
Analyze the user prompt and extract search filters: city, minPrice, maxPrice.

Rules for Price Extraction:
1. If the user mentions "under X", "below X", "budget X", or "less than X":
   set minPrice = null, maxPrice = X.
2. If the user mentions "above X", "more than X", "starting from X":
   set minPrice = X, maxPrice = null.
3. If the user gives a range like "X to Y" or "between X and Y":
   set minPrice = X, maxPrice = Y.
4. If no price is mentioned, set both minPrice and maxPrice to null.

Examples:
- "Hotels in Jaipur under 10000" -> {"city": "Jaipur", "minPrice": null, "maxPrice": 10000}
- "Resorts above 5000 in Goa" -> {"city": "Goa", "minPrice": 5000, "maxPrice": null}
- "Rooms in Delhi between 2000 and 8000" -> {"city": "Delhi", "minPrice": 2000, "maxPrice": 8000}

Return strictly a valid JSON object with this exact shape (no markdown, no extra text):
{
  "city": string or null,
  "minPrice": number or null,
  "maxPrice": number or null
}`
},
        { role: "user", content: prompt }
      ],
      model: "allam-2-7b",
      response_format: { type: "json_object" }
    });

    console.log(chatCompletion)
    const parsedFilters = JSON.parse(chatCompletion.choices[0]?.message?.content || "{}");
  
    const query = {};
    if (parsedFilters.city) query.city = { $regex: `^${parsedFilters.city}$`, $options: "i" };
    if (parsedFilters.minPrice || parsedFilters.maxPrice) {
      query.cheapestPrice = {};
      if (parsedFilters.minPrice) query.cheapestPrice.$gte = Number(parsedFilters.minPrice);
      if (parsedFilters.maxPrice) query.cheapestPrice.$lte =  Number(parsedFilters.maxPrice);
    }
    console.log(query);
    const hotels = await Hotel.find(query);
    console.log(hotels)
    return res.status(200).json({
      success: true,  
      appliedFilters: parsedFilters,
      count: hotels.length,
      hotels,
    });
  } catch (error) {
    console.error("Groq AI Error:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export { aiSearchHotels };

// import Groq from "groq-sdk";
// import { Hotel } from "../models/hotelModels.js";

// const aiSearchHotels = async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     if (!prompt) return res.status(400).json({ message: "Prompt is required" });


//     if (!process.env.GROQ_API_KEY) {
//       return res.status(500).json({ message: "GROQ_API_KEY is missing in .env" });
//     }

//     const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

//     // 1. Fetch live active models directly from Groq
//     const modelsListResponse = await groq.models.list();
//     const activeModels = modelsListResponse.data
//       .map((m) => m.id)
//       .filter((id) => !id.includes("whisper") && !id.includes("guard") && !id.includes("safetensors"));

//     console.log("📋 Your Groq Account Active Models:", activeModels);

//     if (!activeModels.length) {
//       return res.status(500).json({ message: "No active text models found in your Groq account." });
//     }

//     let responseContent = null;

//     // 2. Auto-try working models from the live list
//     for (const modelName of activeModels) {
//       try {
//         console.log(`🔄 Trying active model: ${modelName}...`);
//         const chatCompletion = await groq.chat.completions.create({
//           messages: [
//             {
//               role: "system",
//               content: `You are an AI assistant for a hotel booking app. 
// Analyze the user prompt and extract search filters: city, minPrice, maxPrice.
// Return strictly a valid JSON object in this exact format:
// {
//   "city": "Goa",
//   "minPrice": 1000,
//   "maxPrice": 5000
// }
// If a value is not mentioned, set it to null.
// Do NOT include markdown formatting or extra text. Output plain raw JSON string only.`
//             },
//             { role: "user", content: prompt }
//           ],
//           model: modelName,
//           temperature: 0.1,
//         });

//         responseContent = chatCompletion.choices[0]?.message?.content;
//         if (responseContent) {
//           console.log(`✅ SUCCESS with model: ${modelName}`);
//           break;
//         }
//       } catch (err) {
//         console.warn(`⚠️ Model ${modelName} failed (${err.message}). Trying next...`);
//       }
//     }

//     if (!responseContent) {
//       return res.status(500).json({ message: "All active Groq models failed to respond." });
//     }

//     // 3. Clean backticks / markdown formatting
//     const cleanJson = responseContent
//       .replace(/```json/gi, "")
//       .replace(/```/g, "")
//       .trim();

//     const parsedFilters = JSON.parse(cleanJson);

//     // 4. Construct Mongoose Search Query
//     const query = {};
//     if (parsedFilters.city) {
//       query.city = { $regex: parsedFilters.city, $options: "i" };
//     }

//     if (parsedFilters.minPrice || parsedFilters.maxPrice) {
//       query.cheapestPrice = {};
//       if (parsedFilters.minPrice) query.cheapestPrice.$gte = Number(parsedFilters.minPrice);
//       if (parsedFilters.maxPrice) query.cheapestPrice.$lte = Number(parsedFilters.maxPrice);
//     }

//     // 5. Fetch Hotels from Database
//     const hotels = await Hotel.find(query);

//     return res.status(200).json({
//       success: true,
//       appliedFilters: parsedFilters,
//       count: hotels.length,
//       hotels,
//     });

//   } catch (error) {
//     console.error("AI Search Controller Crash:", error);
//     return res.status(500).json({ message: error.message });
//   }
// };

// export { aiSearchHotels };