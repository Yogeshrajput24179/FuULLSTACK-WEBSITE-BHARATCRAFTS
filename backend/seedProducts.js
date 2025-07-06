// backend/seed`${baseImageUrl}/Products'.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import `${baseImageUrl}/ProductM'odel from "./models/productModel.js";

dotenv.config();

const baseImageUrl = "https://fuullstack-website-bharatcrafts.onrender.com/uploads";

const productList = [
 {
        id: "1",
        name: "Wall Decor",
        image: `${baseImageUrl}/Product1',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },
    {
        id: "2",
        name: "Plant Stand",
        image: `${baseImageUrl}/Product2',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "3",
        name: "Wall Clock",
        image: `${baseImageUrl}/Product3',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "4",
        name: "Table",
        image: `${baseImageUrl}/Product4',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "5",
        name: "Study Table",
        image: `${baseImageUrl}/Product5',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "6",
        name: "Self",
        image: `${baseImageUrl}/Product6',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "7",
        name: "Lamp",
        image: `${baseImageUrl}/Product7',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "8",
        name: "Key Holder",
        image: `${baseImageUrl}/Product8',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "9",
        name: "Dining Table",
        image: `${baseImageUrl}/Product9',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "10",
        name: "Mug Holder",
        image: `${baseImageUrl}/Product10',
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "11",
        name: "Clay lamp",
        image: `${baseImageUrl}/Product11',
        price: 10,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "12",
        name: "Clay pan",
        image: `${baseImageUrl}/Product12',
        price: 12,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    },
    {
        id: "13",
        name: "Clay Pan",
        image: `${baseImageUrl}/Product13',
        price: 12,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    },
    {
        id: "14",
        name: "Clay handi",
        image: `${baseImageUrl}/Product14',
        price: 18,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "15",
        name: "Clay Pot",
        image: `${baseImageUrl}/Product15',
        price: 16,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "16",
        name: "Clay Bowl",
        image: `${baseImageUrl}/Product16',
        price: 24,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "17",
        name: "Clay Diya",
        image: `${baseImageUrl}/Product17',
        price: 14,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "18",
        name: "Shirt",
        image: `${baseImageUrl}/Product18',
        price: 12,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "19",
        name: "Pillo Cover",
        image: `${baseImageUrl}/Product19',
        price: 20,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "20",
        name: "Dhoti Kurta",
        image: `${baseImageUrl}/Product20',
        price: 15,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "21",
        name: "Clay jar",
        image: `${baseImageUrl}/Product21',
        price: 14,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "22",
        name: "Saree",
        image: `${baseImageUrl}/Product22',
        price: 22,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "23",
        name: "Pillo Cover",
        image: `${baseImageUrl}/Product23',
        price: 10,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "24",
        name: "Saree",
        image: `${baseImageUrl}/Product24',
        price: 12,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    },
    {
        id: "25",
        name: "Banarsi Saree",
        image: `${baseImageUrl}/Product25',
        price: 12,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    },
    {
        id: "26",
        name: "Palin Kurta",
        image: `${baseImageUrl}/Product26',
        price: 18,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "27",
        name: "OverSize Shirt",
        image: `${baseImageUrl}/Product27',
        price: 16,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "28",
        name: "Badsheet",
        image: `${baseImageUrl}/Product28',
        price: 24,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "29",
        name: "BAmboo Pot",
        image: `${baseImageUrl}/Product29',
        price: 14,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    }, {
        id: "30",
        name: "Pecock painting",
        image: `${baseImageUrl}/Product30',
        price: 12,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
        category: "Painting"
    }, {
        id: "31",
        name: "Home Decoration",
        image: `${baseImageUrl}/Product31',
        price: 20,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    }, {
        id: "32",
        name: "Bandwar",
        image: `${baseImageUrl}/Product32',
        price: 15,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    }
    ,
    {
        id: "33",
        name: "Doll",
        image: `${baseImageUrl}/Product33',
        price: 18,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"

    },

    {
        id: "35",
        name: "Neckles",
        image: `${baseImageUrl}/Product35',
        price: 22,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "36",
        name: "Home Decor item",
        image: `${baseImageUrl}/Product36',
        price: 25,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.Jute"
    },
    {
        id: "37",
        name: "Nature Painting",
        image: `${baseImageUrl}/Product37',
        price: 30,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai.",
        category: "Painting"
    },
    {
        id: "38",
        name: "cloth Necless",
        image: `${baseImageUrl}/Product38',
        price: 20,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "39",
        name: "Daarwar",
        image: `${baseImageUrl}/Product39',
        price: 18,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai.",
        category: "Painting"
    },
    {
        id: "40",
        name: "jute Guitar",
        image: `${baseImageUrl}/Product40',
        price: 28,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.ute"
    },
    {
        id: "41",
        name: "Name Plate",
        image: `${baseImageUrl}/Product41',
        price: 25,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
        category: "Painting"
    },
    {
        id: "42",
        name: "Earings",
        image: `${baseImageUrl}/Product42',
        price: 32,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.te"
    },
    {
        id: "50",
        name: "Jute Mirror",
        image: `${baseImageUrl}/Product50',
        price: 20,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.boo & Jute",
        category: "Bamboo & Jute"
    },
    {
        id: "51",
        name: "Pen Holder",
        image: `${baseImageUrl}/Product51',
        price: 22,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    },
    {
        id: "52",
        name: "Pen Holder",
        image: `${baseImageUrl}/Product52',
        price: 18,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    },
    {
        id: "53",
        name: "Photo Frame",
        image: `${baseImageUrl}/Product53',
        price: 25,
        description: "blending tradition with sustainability for a natural touch to your lifestyle",
    },
    {
        id: "54",
        name: "bull Painting",
        image: `${baseImageUrl}/Product54',
        price: 20,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
        category: "Painting"
    },
    {
        id: "55",
        name: "Hand made Necless",
        image: `${baseImageUrl}/Product55',
        price: 23,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "56",
        name: "Bracelet",
        image: `${baseImageUrl}/Product56',
        price: 21,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "59",
        name: "Dan Dan Noodles",
        image: `${baseImageUrl}/Product59',
        price: 25,
        description: "Noodles served with spicy ground pork and sauce.",
        category: "Noodles"
    },
    {
        id: "60",
        name: "bamboo pot",
        image: `${baseImageUrl}/Product60',
        price: 27,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.& Jute"
    },
    {
        id: "61",
        name: "Bamboo Shelf",
        image: `${baseImageUrl}/Product61',
        price: 30,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    },
    {
        id: "62",
        name: "Bamboo lamp",
        image: `${baseImageUrl}/Product62',
        price: 20,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.ute"
    },
    {
        id: "63",
        name: "Bamboo Ride",
        image: `${baseImageUrl}/Product63',
        price: 28,
        description: "blending tradition with sustainability for a natural touch to your lifestyle",
        category: "Bamboo & Jute"

    },
    {
        id: "64",
        name: "Bird House",
        image: `${baseImageUrl}/Product64',
        price: 22,
        description: "blending tradition with sustainability for a natural touch to your lifestyle. ",
        category: "Bamboo & Jute"
    },
    {
        id: "65",
        name: "Bamboo mirror",
        image: `${baseImageUrl}/Product65',
        price: 22,
        description: "blending tradition with sustainability for a natural touch to your lifestyle. ",
           category: "Bamboo & Jute"
    },
{
    id: "66",
        name: "Traditional Pinting",
            image: `${baseImageUrl}/Product66',
                price: 24,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
},

{
    id: "67",
        name: "Painting on bambo",
            image: `${baseImageUrl}/Product67,
                price: 22,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
}
    , {
    id: "68",
        name: "Fish painting",
            image: `${baseImageUrl}/Product68',
                price: 22,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
} , {
    id: "69",
        name: "Flower Painting",
            image: `${baseImageUrl}/Product69,
                price: 22,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
}

];

const seed`${baseImageUrl}/P= async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await `${baseImageUrl}/ProductModel.deleteMany()'; // Clear existing data (optional)
    await `${baseImageUrl}/ProductModel.insertMany(productList)';

    console.log("✅ `${baseImageUrl}/Products' inserted successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting products:", err);
    process.exit(1);
  }
};

seed`${baseImageUrl}/Products'();
