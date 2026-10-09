import mongoose from "mongoose";
import dotenv from "dotenv";
import { Hotel } from "./models/hotelModels.js";
import { Room } from "./models/roomModels.js";

dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://hotelo_db_user:8955865050@hotelo.vd6sw3o.mongodb.net/hotelo";

// Jaipur ke 10 Luxury & Heritage Hotels Ka Data
const jaipurHotelsData = [
  {
    name: "Rambagh Palace Jaipur",
    address: "Bhawani Singh Road, Jaipur 302005",
    phone: "01412385100",
    cheapestPrice: 24000,
    rating: 4.9,
    featured: true,
    description:
      "Former residence of the Maharaja of Jaipur, offering ultimate royal luxury, lush gardens, and fine dining.",
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    ],
    rooms: [
      {
        title: "Royal Palace Suite",
        price: 35000,
        maxPeople: 2,
        desc: "King bed, palace view, royal decor, and private butler service.",
        roomNumbers: [
          {
            number: 101,
            unavailableDates: [
              new Date("2026-10-01"),
              new Date("2026-10-02"),
              new Date("2026-10-10"),
            ],
          },
          { number: 102, unavailableDates: [new Date("2026-10-10")] },
        ],
      },
      {
        title: "Historical Luxury Room",
        price: 24000,
        maxPeople: 2,
        desc: "Traditional Rajasthani architecture with garden view.",
        roomNumbers: [
          { number: 103, unavailableDates: [] },
          { number: 104, unavailableDates: [new Date("2026-10-05")] },
        ],
      },
    ],
  },
  {
    name: "Jai Mahal Palace",
    address: "Jacob Road, Civil Lines, Jaipur 302006",
    phone: "01416601111",
    cheapestPrice: 14500,
    rating: 4.8,
    featured: true,
    description:
      "Stunning 18th-century Indo-Saracenic palace set amidst 18 acres of landscaped Mughal gardens.",
    photos: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    ],
    rooms: [
      {
        title: "Deluxe Premium Room",
        price: 14500,
        maxPeople: 2,
        desc: "Pool view room with contemporary comforts.",
        roomNumbers: [
          {
            number: 201,
            unavailableDates: [
              new Date("2026-10-02"),
              new Date("2026-10-03"),
            ],
          },
          { number: 202, unavailableDates: [
            new Date("2026-10-02"),
              new Date("2026-10-03"),
          ] },
        ],
      },
      {
        title: "Mughal Suite",
        price: 22000,
        maxPeople: 4,
        desc: "Spacious suite with separate living area.",
        roomNumbers: [
          { number: 203, unavailableDates: [new Date("2026-10-15"),new Date("2026-10-02"),
              new Date("2026-10-03")] },
        ],
      },
    ],
  },
  {
    name: "Trident Jaipur",
    address: "Opposite Jal Mahal, Amber Fort Road, Jaipur 302002",
    phone: "01412670101",
    cheapestPrice: 6800,
    rating: 4.6,
    featured: true,
    description:
      "Boutique hotel with breathtaking views of Mansagar Lake and the majestic Jal Mahal.",
    photos: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    ],
    rooms: [
      {
        title: "Mansagar Lake View Room",
        price: 8500,
        maxPeople: 2,
        desc: "Private balcony facing the lake and Aravalli hills.",
        roomNumbers: [
          { number: 301, unavailableDates: [new Date("2026-10-01")] },
          { number: 302, unavailableDates: [new Date("2026-10-02")] },
        ],
      },
      {
        title: "Deluxe Garden View Room",
        price: 6800,
        maxPeople: 3,
        desc: "Overlooking landscaped central gardens.",
        roomNumbers: [
          { number: 303, unavailableDates: [] },
          { number: 304, unavailableDates: [] },
        ],
      },
    ],
  },
  {
    name: "Pink City Heritage Haveli",
    address: "Johari Bazar, Near Hawa Mahal, Jaipur 302003",
    phone: "01412574422",
    cheapestPrice: 3200,
    rating: 4.4,
    featured: false,
    description:
      "Charming heritage stay inside the walled city, steps away from City Palace and local bazaars.",
    photos: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    ],
    rooms: [
      {
        title: "Heritage AC Room",
        price: 3200,
        maxPeople: 2,
        desc: "Traditional Jharokha seating with free breakfast.",
        roomNumbers: [
          { number: 101, unavailableDates: [new Date("2026-10-04")] },
          { number: 102, unavailableDates: [new Date("2026-10-05")] },
        ],
      },
      {
        title: "Super Deluxe Family Room",
        price: 4800,
        maxPeople: 4,
        desc: "Two double beds with rooftop access.",
        roomNumbers: [{ number: 103, unavailableDates: [] }],
      },
    ],
  },
  {
    name: "Fairmont Jaipur",
    address: "2 Riico Kukas, Delhi-Jaipur Highway, Jaipur 303101",
    phone: "01414268700",
    cheapestPrice: 12500,
    rating: 4.7,
    featured: true,
    description:
      "Grand royal destination resort built in Mughal and Rajput style located in Kukas valley.",
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    rooms: [
      {
        title: "Fairmont King Room",
        price: 12500,
        maxPeople: 2,
        desc: "Custom carved furnishings and four-poster bed.",
        roomNumbers: [
          {
            number: 401,
            unavailableDates: [
              new Date("2026-10-01"),
              new Date("2026-10-02"),
            ],
          },
          { number: 402, unavailableDates: [] },
        ],
      },
      {
        title: "Aravalli View Suite",
        price: 19000,
        maxPeople: 3,
        desc: "Uninterrupted view of Aravalli hills.",
        roomNumbers: [
          { number: 403, unavailableDates: [new Date("2026-10-12")] },
        ],
      },
    ],
  },
  {
    name: "Radisson Blu Jaipur",
    address: "Plots 5 & 6, Ashram Marg, Airport Road, Jaipur 302018",
    phone: "01415198888",
    cheapestPrice: 5500,
    rating: 4.5,
    featured: false,
    description:
      "Modern business hotel near Jaipur International Airport with rooftop pool and spa.",
    photos: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    ],
    rooms: [
      {
        title: "Superior Room",
        price: 5500,
        maxPeople: 2,
        desc: "High-speed Wi-Fi, work desk, and city views.",
        roomNumbers: [
          { number: 501, unavailableDates: [] },
          { number: 502, unavailableDates: [new Date("2026-10-03")] },
        ],
      },
      {
        title: "Business Class Room",
        price: 7200,
        maxPeople: 2,
        desc: "Includes lounge access and express laundry.",
        roomNumbers: [{ number: 503, unavailableDates: [] }],
      },
    ],
  },
  {
    name: "Jaipur Marriott Hotel",
    address: "Near Ashram Marg, Tonk Road, Jaipur 302018",
    phone: "01414567777",
    cheapestPrice: 6200,
    rating: 4.6,
    featured: false,
    description:
      "5-star hotel offering refined luxury, multiple multi-cuisine restaurants, and full service spa.",
    photos: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    ],
    rooms: [
      {
        title: "Deluxe King Guest Room",
        price: 6200,
        maxPeople: 2,
        desc: "Marble bathroom, flat-screen TV, and ergonomic chair.",
        roomNumbers: [
          { number: 601, unavailableDates: [new Date("2026-10-06")] },
          { number: 602, unavailableDates: [] },
        ],
      },
      {
        title: "Executive Suite",
        price: 11000,
        maxPeople: 3,
        desc: "Separate seating area and executive lounge perks.",
        roomNumbers: [
          {
            number: 603,
            unavailableDates: [
              new Date("2026-10-07"),
              new Date("2026-10-08"),
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Chokhi Dhani Resort",
    address: "12 Miles, Tonk Road, Via Vatika, Jaipur 303905",
    phone: "01415165000",
    cheapestPrice: 4800,
    rating: 4.3,
    featured: false,
    description:
      "Ethnic village resort providing authentic Rajasthani village life experience with cultural shows.",
    photos: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    rooms: [
      {
        title: "Executive Cottage",
        price: 4800,
        maxPeople: 2,
        desc: "Traditional mud-house style cottage with modern AC.",
        roomNumbers: [
          { number: 701, unavailableDates: [new Date("2026-10-02")] },
          { number: 702, unavailableDates: [] },
        ],
      },
      {
        title: "Royal Haveli Suite",
        price: 8200,
        maxPeople: 4,
        desc: "Authentic royal paintings and handicraft interiors.",
        roomNumbers: [{ number: 703, unavailableDates: [] }],
      },
    ],
  },
  {
    name: "Shahpura House",
    address: "D-257, Devi Marg, Bani Park, Jaipur 302016",
    phone: "01412202293",
    cheapestPrice: 5800,
    rating: 4.5,
    featured: false,
    description:
      "Authentic heritage hotel in Bani Park featuring rooftop pool, traditional frescoes, and courtyard.",
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    ],
    rooms: [
      {
        title: "Deluxe Heritage Room",
        price: 5800,
        maxPeople: 2,
        desc: "Hand-painted walls and antique furniture.",
        roomNumbers: [
          { number: 801, unavailableDates: [] },
          { number: 802, unavailableDates: [new Date("2026-10-09")] },
        ],
      },
      {
        title: "Shahpura Suite",
        price: 9500,
        maxPeople: 3,
        desc: "Private balcony facing the courtyard pool.",
        roomNumbers: [
          {
            number: 803,
            unavailableDates: [
              new Date("2026-10-10"),
              new Date("2026-10-11"),
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Alsisar Haveli",
    address: "Sansar Chandra Road, Near Sindhi Camp, Jaipur 302001",
    phone: "01412368290",
    cheapestPrice: 4200,
    rating: 4.4,
    featured: false,
    description:
      "A peaceful oasis in central Jaipur with antique-filled rooms and traditional hospitality.",
    photos: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    ],
    rooms: [
      {
        title: "Standard Heritage Room",
        price: 4200,
        maxPeople: 2,
        desc: "Cozy room with classic Rajasthani architecture.",
        roomNumbers: [
          { number: 901, unavailableDates: [] },
          { number: 902, unavailableDates: [new Date("2026-10-04")] },
        ],
      },
      {
        title: "Super Deluxe Room",
        price: 6000,
        maxPeople: 3,
        desc: "Large bed, garden view, and marble bath.",
        roomNumbers: [{ number: 903, unavailableDates: [] }],
      },
    ],
  },
];

const seedJaipurHotels = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB Atlas Cloud...");

    const dummyUserId = new mongoose.Types.ObjectId("6ab963c778695e3abf855f64");

    // Pehle Jaipur ke purane hotels delete kar dete hain taaki duplicates na banein
    await Hotel.deleteMany({ city: "Jaipur" });
    console.log("Old Jaipur records cleared.");

    let totalRooms = 0;

    for (const hData of jaipurHotelsData) {
      const createdRoomIds = [];

      // 1. Pehle Is Hotel ke saare Rooms create karein
      for (const rData of hData.rooms) {
        const room = await Room.create({
          title: rData.title,
          price: rData.price,
          maxPeople: rData.maxPeople,
          desc: rData.desc,
          roomNumbers: rData.roomNumbers, // Isme unavailableDates object keys already hain
        });
        createdRoomIds.push(room._id);
        totalRooms++;
      }

      // 2. Phir Hotel Create karein aur Room ObjectIDs attach karein
      await Hotel.create({
        user: dummyUserId,
        name: hData.name,
        city: "Jaipur",
        address: hData.address,
        phone: hData.phone,
        cheapestPrice: hData.cheapestPrice,
        rating: hData.rating,
        description: hData.description,
        photos: hData.photos,
        featured: hData.featured,
        rooms: createdRoomIds,
      });
    }

    console.log(`\n Successfully Seeded Jaipur Data!`);
    console.log(` Total Hotels Inserted: ${jaipurHotelsData.length}`);
    console.log(` Total Rooms Created with Unavailable Dates: ${totalRooms}`);

    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error);
    process.exit(1);
  }
};

seedJaipurHotels();