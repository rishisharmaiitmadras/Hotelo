import mongoose from "mongoose";

const dummyAdminId = new mongoose.Types.ObjectId();
 


export const sampleHotels =

 [
  // 1. ANDHRA PRADESH
  {
    name: "Welcomhotel by ITC",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    address: "Beach Road, Visakhapatnam 530002",
    phone: "08912560101",
    cheapestPrice: 6500,
    rating: 4.6,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Scenic oceanfront luxury hotel overlooking the Bay of Bengal.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Fortune Select Grand Ridge",
    city: "Tirupati",
    state: "Andhra Pradesh",
    address: "Shilparamam, Tirupati 517507",
    phone: "08772282100",
    cheapestPrice: 3800,
    rating: 4.3,
    photos: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"],
    description: "Comfortable hotel catering to pilgrims and tourists in Tirupati.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 2. ARUNACHAL PRADESH
  {
    name: "Hotel Tawang Heights",
    city: "Tawang",
    state: "Arunachal Pradesh",
    address: "Old Market, Tawang 790104",
    phone: "03794222340",
    cheapestPrice: 3200,
    rating: 4.2,
    photos: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    description: "Scenic hotel near Tawang Monastery with Himalayan views.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Hotel Donyi Polo",
    city: "Itanagar",
    state: "Arunachal Pradesh",
    address: "Vidhan Sabha Road, Itanagar 791111",
    phone: "03602212626",
    cheapestPrice: 2800,
    rating: 4.1,
    photos: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    description: "Warm hospitality in the capital city with traditional cuisine.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 3. ASSAM
  {
    name: "Radisson Blu Hotel",
    city: "Guwahati",
    state: "Assam",
    address: "NH37, Gotanagar, Guwahati 781033",
    phone: "03617100100",
    cheapestPrice: 7200,
    rating: 4.6,
    photos: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"],
    description: "5-star hotel surrounded by tranquil green hills in Guwahati.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Iora - The Retreat",
    city: "Kaziranga",
    state: "Assam",
    address: "Kohora, Kaziranga National Park 785609",
    phone: "03776262411",
    cheapestPrice: 4500,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"],
    description: "Eco-resort set amidst tea gardens near Kaziranga wild reserve.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 4. BIHAR
  {
    name: "Hotel Maurya",
    city: "Patna",
    state: "Bihar",
    address: "Fraser Road, Gandhi Maidan, Patna 800001",
    phone: "06122203040",
    cheapestPrice: 5200,
    rating: 4.3,
    photos: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"],
    description: "Premier corporate and luxury stay in central Patna.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Hotel Taj Darbar",
    city: "Gaya",
    state: "Bihar",
    address: "Bodhgaya Road, Bodh Gaya 824231",
    phone: "06312200421",
    cheapestPrice: 2400,
    rating: 4.0,
    photos: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"],
    description: "Peaceful hotel close to the Mahabodhi Temple in Bodh Gaya.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 5. CHHATTISGARH
  {
    name: "Courtyard by Marriott",
    city: "Raipur",
    state: "Chhattisgarh",
    address: "Labhandi, GE Road, Raipur 492012",
    phone: "07714330000",
    cheapestPrice: 5800,
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Modern upscale hotel near Raipur city center and airport.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Bastar Jungle Resort",
    city: "Jagdalpur",
    state: "Chhattisgarh",
    address: "Chitrakote Road, Jagdalpur 494001",
    phone: "07782229100",
    cheapestPrice: 3100,
    rating: 4.1,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"],
    description: "Nature resort near Chitrakote Falls offering eco-tourism experience.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 6. GOA
  {
    name: "Taj Exotica Resort & Spa",
    city: "South Goa",
    state: "Goa",
    address: "Benaulim, South Goa 403716",
    phone: "08326683333",
    cheapestPrice: 18500,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"],
    description: "56-acre Mediterranean style luxury beachfront resort in Benaulim.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Calangute Beach Shack Hotel",
    city: "North Goa",
    state: "Goa",
    address: "Calangute Beach Road, North Goa 403516",
    phone: "08322277100",
    cheapestPrice: 2200,
    rating: 4.0,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"],
    description: "Affordable stay just walking distance from North Goa beach shacks.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 7. GUJARAT
  {
    name: "Hyatt Regency Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    address: "Ashram Road, Ahmedabad 380014",
    phone: "07940171234",
    cheapestPrice: 6200,
    rating: 4.6,
    photos: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"],
    description: "5-star luxury hotel overlooking the Sabarmati Riverfront.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "The Fern Sardar Sarovar Resort",
    city: "Kevadia",
    state: "Gujarat",
    address: "Statue of Unity Road, Kevadia 393151",
    phone: "02640232200",
    cheapestPrice: 4200,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800"],
    description: "Eco-friendly resort located close to the iconic Statue of Unity.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 8. HARYANA
  {
    name: "The Leela Ambience Gurugram",
    city: "Gurugram",
    state: "Haryana",
    address: "Ambience Island, NH 8, Gurugram 122002",
    phone: "01244771234",
    cheapestPrice: 9200,
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Award-winning business luxury hotel attached to Ambience Mall.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Fort Ramgarh Heritage Hotel",
    city: "Panchkula",
    state: "Haryana",
    address: "National Highway 73, Panchkula 134109",
    phone: "01722520380",
    cheapestPrice: 3200,
    rating: 4.1,
    photos: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"],
    description: "Historic Rajput fort turned heritage hotel near Chandigarh.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 9. HIMACHAL PRADESH
  {
    name: "Wildflower Hall An Oberoi Resort",
    city: "Shimla",
    state: "Himachal Pradesh",
    address: "Chharabra, Shimla 171012",
    phone: "01772648585",
    cheapestPrice: 21000,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"],
    description: "Luxury mountain resort set high in pine forests with mountain views.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Snow Valley Resort",
    city: "Manali",
    state: "Himachal Pradesh",
    address: "Log Huts Area, Old Manali 175131",
    phone: "01902253228",
    cheapestPrice: 3800,
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    description: "Popular mountain resort offering panoramic Himalayan snow views.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 10. JHARKHAND
  {
    name: "Radisson Blu Hotel Ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    address: "Main Road, Kadru, Ranchi 834001",
    phone: "06516602222",
    cheapestPrice: 5500,
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Top corporate 5-star hotel in the heart of Ranchi city.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "The Wave International",
    city: "Jamshedpur",
    state: "Jharkhand",
    address: "NH 33, Jamshedpur 831012",
    phone: "06572361100",
    cheapestPrice: 2900,
    rating: 4.0,
    photos: ["https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800"],
    description: "Resort style hotel with lush green garden spaces near Steel City.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 11. KARNATAKA
  {
    name: "The Leela Palace Bengaluru",
    city: "Bangalore",
    state: "Karnataka",
    address: "HAL Old Airport Rd, Bengaluru 560008",
    phone: "08025211234",
    cheapestPrice: 11500,
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"],
    description: "Grand palace hotel inspired by the Vijayanagara dynasty architecture.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Radisson Blu Plaza Hotel",
    city: "Mysuru",
    state: "Karnataka",
    address: "MG Road, Mysuru 570010",
    phone: "08217101234",
    cheapestPrice: 4800,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"],
    description: "Luxury hotel situated next to Mysuru Golf Course and Zoo.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 12. KERALA
  {
    name: "Kumarakom Lake Resort",
    city: "Kottayam",
    state: "Kerala",
    address: "Kumarakom North Post, Kottayam 686563",
    phone: "04812524900",
    cheapestPrice: 16000,
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800"],
    description: "World-famous backwater resort with heritage villas and houseboat stays.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Tea Valley Resort",
    city: "Munnar",
    state: "Kerala",
    address: "Bison Valley Road, Munnar 685612",
    phone: "04865231200",
    cheapestPrice: 3500,
    rating: 4.2,
    photos: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    description: "Charming tea-estate resort surrounded by mist-covered hills in Munnar.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 13. MADHYA PRADESH
  {
    name: "Jehan Numa Palace Hotel",
    city: "Bhopal",
    state: "Madhya Pradesh",
    address: "157 Shamla Hill, Bhopal 462013",
    phone: "07552661100",
    cheapestPrice: 7500,
    rating: 4.7,
    photos: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"],
    description: "19th-century residence turned heritage luxury palace hotel on Shamla Hills.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Sayaji Hotel Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    address: "H-1, Scheme No. 54, Vijay Nagar, Indore 452010",
    phone: "07314006666",
    cheapestPrice: 4200,
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"],
    description: "Famous hospitality and food destination in commercial capital Indore.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 14. MAHARASHTRA
  {
    name: "The Taj Mahal Palace",
    city: "Mumbai",
    state: "Maharashtra",
    address: "Apollo Bunder, Colaba, Mumbai 400001",
    phone: "02266653366",
    cheapestPrice: 22000,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Iconic flagship luxury hotel overlooking Gateway of India and Arabian Sea.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "JW Marriott Pune",
    city: "Pune",
    state: "Maharashtra",
    address: "Senapati Bapat Road, Pune 411053",
    phone: "02066833333",
    cheapestPrice: 8500,
    rating: 4.7,
    photos: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"],
    description: "5-star luxury stay in central Pune preferred by corporate and leisure guests.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 15. MANIPUR
  {
    name: "Classic Grande Imphal",
    city: "Imphal",
    state: "Manipur",
    address: "Chingmeirong, Imphal 795001",
    phone: "03852422200",
    cheapestPrice: 4800,
    rating: 4.3,
    photos: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"],
    description: "Member of Radisson Individuals, offering top luxury standards in Manipur.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Hotel Imphal",
    city: "Imphal",
    state: "Manipur",
    address: "North AVM Road, Imphal 795001",
    phone: "03852441000",
    cheapestPrice: 2100,
    rating: 3.9,
    photos: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"],
    description: "Government recognized budget hotel in central Imphal.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 16. MEGHALAYA
  {
    name: "Ri Kynjai - Serenity by the Lake",
    city: "Shillong",
    state: "Meghalaya",
    address: "Umiam Lake, Shillong 793103",
    phone: "03642570100",
    cheapestPrice: 9500,
    rating: 4.7,
    photos: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"],
    description: "Khasi architecture resort overlooking picturesque Umiam Lake.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Polo Orchid Resort",
    city: "Cherrapunji",
    state: "Meghalaya",
    address: "Nohsngithiang Falls, Sohra 793108",
    phone: "03637235000",
    cheapestPrice: 6200,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    description: "Cliff-edge resort with views of Seven Sisters waterfalls.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 17. MIZORAM
  {
    name: "Hotel Regency Aizawl",
    city: "Aizawl",
    state: "Mizoram",
    address: "Zarkawt, Aizawl 796001",
    phone: "03892349330",
    cheapestPrice: 3200,
    rating: 4.1,
    photos: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"],
    description: "Centrally located hotel offering comfortable accommodation in Aizawl.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Hotel Grand Aizawl",
    city: "Aizawl",
    state: "Mizoram",
    address: "Khatla, Aizawl 796001",
    phone: "03892330011",
    cheapestPrice: 2200,
    rating: 3.9,
    photos: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    description: "Affordable budget stay close to city viewpoint.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 18. NAGALAND
  {
    name: "Hotel Vivor",
    city: "Kohima",
    state: "Nagaland",
    address: "NH 61, Near Indira Gandhi Stadium, Kohima 797001",
    phone: "03702271234",
    cheapestPrice: 4200,
    rating: 4.3,
    photos: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800"],
    description: "Boutique hotel in Kohima offering Naga tribal hospitality.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Niathu Resort",
    city: "Dimapur",
    state: "Nagaland",
    address: "7th Mile, Dimapur 797112",
    phone: "03862241100",
    cheapestPrice: 5000,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800"],
    description: "Lush green riverside luxury resort in Dimapur.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 19. ODISHA
  {
    name: "Mayfair Lagoon",
    city: "Bhubaneswar",
    state: "Odisha",
    address: "Jaydev Vihar, Bhubaneswar 751013",
    phone: "06746660101",
    cheapestPrice: 7800,
    rating: 4.7,
    photos: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"],
    description: "5-star lagoon resort featuring lush gardens and traditional Odisha art.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Mayfair Heritage Puri",
    city: "Puri",
    state: "Odisha",
    address: "Chakratirth Road, Puri 752002",
    phone: "06752227800",
    cheapestPrice: 5200,
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"],
    description: "Beachfront resort located near Puri sea beach and Jagannath Temple.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 20. PUNJAB
  {
    name: "Taj Swarna Amritsar",
    city: "Amritsar",
    state: "Punjab",
    address: "Plot No. C-3, Outer Circular Rd, Amritsar 143001",
    phone: "01836658888",
    cheapestPrice: 7200,
    rating: 4.7,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Contemporary luxury hotel close to Golden Temple and local markets.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Hyatt Regency Ludhiana",
    city: "Ludhiana",
    state: "Punjab",
    address: "Ferozepur Road, Ludhiana 141001",
    phone: "01614041234",
    cheapestPrice: 4800,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"],
    description: "Modern business hotel situated on major commercial Ferozepur road.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 21. RAJASTHAN
  {
    name: "Rambagh Palace",
    city: "Jaipur",
    state: "Rajasthan",
    address: "Bhawani Singh Rd, Jaipur 302005",
    phone: "01412385700",
    cheapestPrice: 28000,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"],
    description: "Jewel of Jaipur - former royal palace of Maharaja of Jaipur.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Taj Lake Palace",
    city: "Udaipur",
    state: "Rajasthan",
    address: "Pichola, Udaipur 313001",
    phone: "02942428800",
    cheapestPrice: 32000,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "World-famous floating marble palace in the middle of Lake Pichola.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },

  // 22. SIKKIM
  {
    name: "Mayfair Spa Resort & Casino",
    city: "Gangtok",
    state: "Sikkim",
    address: "Lower Samdur Block, Gangtok 737102",
    phone: "03592250123",
    cheapestPrice: 9800,
    rating: 4.7,
    photos: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    description: "Monastery-style luxury resort surrounded by pine forests.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "The Elgin Mount Pandim",
    city: "Pelling",
    state: "Sikkim",
    address: "Monastery Road, Pelling 737113",
    phone: "03595258256",
    cheapestPrice: 6500,
    rating: 4.5,
    photos: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    description: "Heritage resort offering uninterrupted views of Kanchenjunga peaks.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 23. TAMIL NADU
  {
    name: "ITC Grand Chola",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "63 Mount Road, Guindy, Chennai 600032",
    phone: "04422200000",
    cheapestPrice: 8900,
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Grand architectural marvel inspired by Chola dynasty in central Guindy.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Savoy - IHCL SeleQtions",
    city: "Ooty",
    state: "Tamil Nadu",
    address: "77 Sylks Road, Ooty 643001",
    phone: "04232225500",
    cheapestPrice: 10500,
    rating: 4.6,
    photos: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"],
    description: "Colonial-style heritage hill station hotel with manicured English gardens.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 24. TELANGANA
  {
    name: "Taj Falaknuma Palace",
    city: "Hyderabad",
    state: "Telangana",
    address: "Engine Bowli, Falaknuma, Hyderabad 500053",
    phone: "04066298585",
    cheapestPrice: 30000,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"],
    description: "Royal Nizam palace situated 2000 feet above Hyderabad city.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Lemon Tree Hotel Gachibowli",
    city: "Hyderabad",
    state: "Telangana",
    address: "Financial District, Gachibowli, Hyderabad 500032",
    phone: "04044141414",
    cheapestPrice: 3800,
    rating: 4.2,
    photos: ["https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800"],
    description: "Vibrant midscale corporate hotel in the heart of IT hub.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 25. TRIPURA
  {
    name: "Ginger Agartala",
    city: "Agartala",
    state: "Tripura",
    address: "Khejur Bagan, Agartala 799006",
    phone: "03812411333",
    cheapestPrice: 2800,
    rating: 4.1,
    photos: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"],
    description: "Reliable modern hotel near Agartala Airport and Govt complex.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Hotel Sonar Tori",
    city: "Agartala",
    state: "Tripura",
    address: "BK Road, Banamalipur, Agartala 799001",
    phone: "03812322222",
    cheapestPrice: 2200,
    rating: 4.0,
    photos: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"],
    description: "Comfortable boutique hotel in Agartala market district.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 26. UTTAR PRADESH
  {
    name: "The Oberoi Amarvilas",
    city: "Agra",
    state: "Uttar Pradesh",
    address: "Taj East Gate Road, Agra 282001",
    phone: "05622231515",
    cheapestPrice: 29000,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"],
    description: "Uninterrupted Taj Mahal views from every room, 600m from monument.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "BrijRama Palace",
    city: "Varanasi",
    state: "Uttar Pradesh",
    address: "Darbhanga Ghat, Dashashwamedh, Varanasi 221001",
    phone: "05422508888",
    cheapestPrice: 14000,
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"],
    description: "18th-century heritage palace directly on the Ganga Ghats in Varanasi.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },

  // 27. UTTARAKHAND
  {
    name: "Ananda in the Himalayas",
    city: "Rishikesh",
    state: "Uttarakhand",
    address: "Narendra Nagar, Tehri Garhwal 249175",
    phone: "01378227500",
    cheapestPrice: 34000,
    rating: 4.9,
    photos: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"],
    description: "World famous destination spa and luxury wellness retreat in Himalayas.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "The Manu Maharani",
    city: "Nainital",
    state: "Uttarakhand",
    address: "Grassmere Estate, Mallital, Nainital 263001",
    phone: "05942237341",
    cheapestPrice: 6500,
    rating: 4.4,
    photos: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    description: "Resort overlooking Naini Lake with luxury amenities and views.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },

  // 28. WEST BENGAL
  {
    name: "The Oberoi Grand",
    city: "Kolkata",
    state: "West Bengal",
    address: "15 JL Nehru Road, Kolkata 700013",
    phone: "03322492323",
    cheapestPrice: 8200,
    rating: 4.8,
    photos: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"],
    description: "Victorian colonial landmark hotel located in central Esplanade.",
    featured: true,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Windamere Heritage Hotel",
    city: "Darjeeling",
    state: "West Bengal",
    address: "Observatory Hill, Darjeeling 734101",
    phone: "03542254005",
    cheapestPrice: 8900,
    rating: 4.6,
    photos: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"],
    description: "Colonial tea plantation heritage hotel on Observatory Hill.",
    featured: false,
    user: dummyAdminId,
    rooms: []
  },
  {
    name: "Royal Heritage Haveli",
    city: "Jaipur",
    state: "Rajasthan",
    address: "Khatipura Road, Vaishali Nagar, Jaipur 302021",
    phone: "01412351111",
    cheapestPrice: 4500,
    rating: 4.8,
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
    ],
    description: "A beautiful heritage property with traditional architecture, lush gardens, and luxury rooms.",
    featured: true,
    user: dummyAdminId,
    rooms: [
      {
        title: "Heritage Deluxe Room",
        price: 4500,
        maxPeople: 2,
        desc: "Traditional Rajasthani decor with king size bed and garden view.",
        roomNumbers: [
          { number: 101, unavailableDates: [new Date("2026-10-01"), new Date("2026-10-02")] },
          { number: 102, unavailableDates: [new Date("2026-10-05")] },
          { number: 103, unavailableDates: [] }
        ]
      },
      {
        title: "Royal Suite",
        price: 7000,
        maxPeople: 3,
        desc: "Spacious suite with private courtyard and jacuzzi.",
        roomNumbers: [
          { number: 201, unavailableDates: [new Date("2026-10-03"), new Date("2026-10-04")] },
          { number: 202, unavailableDates: [] }
        ]
      }
    ]
  },
  {
    name: "Pink City Palace & Suites",
    city: "Jaipur",
    state: "Rajasthan",
    address: "Near Hawa Mahal, Johari Bazar, Jaipur 302003",
    phone: "01412352222",
    cheapestPrice: 2800,
    rating: 4.5,
    photos: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
    ],
    description: "Located in the heart of Jaipur with rooftop dining overlooking the historic monuments.",
    featured: false,
    user: dummyAdminId,
    rooms: [
      {
        title: "Palace View Room",
        price: 2800,
        maxPeople: 2,
        desc: "Cozy room overlooking Hawa Mahal with city lights.",
        roomNumbers: [
          { number: 301, unavailableDates: [new Date("2026-10-01")] },
          { number: 302, unavailableDates: [] },
          { number: 303, unavailableDates: [new Date("2026-10-10"), new Date("2026-10-11")] }
        ]
      }
    ]
  },
  {
    name: "Amber Fort View Resort",
    city: "Jaipur",
    state: "Rajasthan",
    address: "Amer Road, Jaipur 302028",
    phone: "01412353333",
    cheapestPrice: 7500,
    rating: 4.9,
    photos: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800"
    ],
    description: "Luxury resort featuring an infinity pool, ayurvedic spa, and cultural folk performances with scenic views of Aravalli Hills.",
    featured: true,
    user: dummyAdminId,
    rooms: [
      {
        title: "Luxury Hill View Suite",
        price: 7500,
        maxPeople: 4,
        desc: "Premium suite facing Aravalli hills and Amber Fort.",
        roomNumbers: [
          { number: 401, unavailableDates: [new Date("2026-10-02"), new Date("2026-10-03")] },
          { number: 402, unavailableDates: [] }
        ]
      }
    ]
  },
  {
    name: "Grand Central Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    address: "MI Road, Near Raj Mandir Cinema, Jaipur 302001",
    phone: "01412354444",
    cheapestPrice: 1800,
    rating: 4.2,
    photos: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800"
    ],
    description: "Budget-friendly 3-star stay with modern amenities, high-speed WiFi, and multi-cuisine restaurant.",
    featured: false,
    user: dummyAdminId,
    rooms: [
      {
        title: "Standard Business Room",
        price: 1800,
        maxPeople: 2,
        desc: "Compact budget room with high-speed WiFi and work desk.",
        roomNumbers: [
          { number: 501, unavailableDates: [] },
          { number: 502, unavailableDates: [new Date("2026-10-01")] }
        ]
      }
    ]
  },
  {
    name: "Jal Mahal Luxury Stay",
    city: "Jaipur",
    state: "Rajasthan",
    address: "Opposite Jal Mahal, Mansagar Lake, Jaipur 302002",
    phone: "01412355555",
    cheapestPrice: 5200,
    rating: 4.7,
    photos: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800"
    ],
    description: "Boutique villa offering peaceful retreat by the water with lake views, private balconies, and personalized concierge service.",
    featured: true,
    user: dummyAdminId,
    rooms: [
      {
        title: "Lakefront Villa Room",
        price: 5200,
        maxPeople: 3,
        desc: "Direct view of Jal Mahal with private balcony.",
        roomNumbers: [
          { number: 601, unavailableDates: [new Date("2026-10-05"), new Date("2026-10-06")] },
          { number: 602, unavailableDates: [] }
        ]
      }
    ]
  }
];