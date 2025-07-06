// backend/seedProducts.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductModel from "./models/productModel.js";

dotenv.config();

const baseImageUrl = "https://fuullstack-website-bharatcrafts.onrender.com/uploads";

const productList = [
 {
        id: "1",
        name: "Wall Decor",
        image: Product1,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },
    {
        id: "2",
        name: "Plant Stand",
        image: Product2,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "3",
        name: "Wall Clock",
        image: Product3,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "4",
        name: "Table",
        image: Product4,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "5",
        name: "Study Table",
        image: Product5,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "6",
        name: "Self",
        image: Product6,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "7",
        name: "Lamp",
        image: Product7,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "8",
        name: "Key Holder",
        image: Product8,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "9",
        name: "Dining Table",
        image: Product9,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "10",
        name: "Mug Holder",
        image: Product10,
        price: 12,
        description: "Discover our stylish and functional furniture collection, offering comfort, durability, and modern designs to enhance every room in your home.",
        category: "Furniture"
    },

    {
        id: "11",
        name: "Clay lamp",
        image: Product11,
        price: 10,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "12",
        name: "Clay pan",
        image: Product12,
        price: 12,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    },
    {
        id: "13",
        name: "Clay Pan",
        image: Product13,
        price: 12,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    },
    {
        id: "14",
        name: "Clay handi",
        image: Product14,
        price: 18,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "15",
        name: "Clay Pot",
        image: Product15,
        price: 16,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "16",
        name: "Clay Bowl",
        image: Product16,
        price: 24,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "17",
        name: "Clay Diya",
        image: Product17,
        price: 14,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "18",
        name: "Shirt",
        image: Product18,
        price: 12,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "19",
        name: "Pillo Cover",
        image: Product19,
        price: 20,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "20",
        name: "Dhoti Kurta",
        image: Product20,
        price: 15,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "21",
        name: "Clay jar",
        image: Product21,
        price: 14,
        description: "Beautiful handcrafted pottery items for decor, utility, and gifting",
        category: "Pottery"
    }, {
        id: "22",
        name: "Saree",
        image: Product22,
        price: 22,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "23",
        name: "Pillo Cover",
        image: Product23,
        price: 10,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "24",
        name: "Saree",
        image: Product24,
        price: 12,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    },
    {
        id: "25",
        name: "Banarsi Saree",
        image: Product25,
        price: 12,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    },
    {
        id: "26",
        name: "Palin Kurta",
        image: Product26,
        price: 18,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "27",
        name: "OverSize Shirt",
        image: Product27,
        price: 16,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "28",
        name: "Badsheet",
        image: Product28,
        price: 24,
        description: "Exquisite handmade textile products crafted with care",
        category: "Textile"
    }, {
        id: "29",
        name: "BAmboo Pot",
        image: Product29,
        price: 14,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    }, {
        id: "30",
        name: "Pecock painting",
        image: Product30,
        price: 12,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
        category: "Painting"
    }, {
        id: "31",
        name: "Home Decoration",
        image: Product31,
        price: 20,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    }, {
        id: "32",
        name: "Bandwar",
        image: Product32,
        price: 15,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    }
    ,
    {
        id: "33",
        name: "Doll",
        image: Product33,
        price: 18,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"

    },

    {
        id: "35",
        name: "Neckles",
        image: Product35,
        price: 22,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "36",
        name: "Home Decor item",
        image: Product36,
        price: 25,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.Jute"
    },
    {
        id: "37",
        name: "Nature Painting",
        image: Product37,
        price: 30,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai.",
        category: "Painting"
    },
    {
        id: "38",
        name: "cloth Necless",
        image: Product38,
        price: 20,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "39",
        name: "Daarwar",
        image: Product39,
        price: 18,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai.",
        category: "Painting"
    },
    {
        id: "40",
        name: "jute Guitar",
        image: Product40,
        price: 28,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.ute"
    },
    {
        id: "41",
        name: "Name Plate",
        image: Product41,
        price: 25,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
        category: "Painting"
    },
    {
        id: "42",
        name: "Earings",
        image: Product42,
        price: 32,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.te"
    },
    {
        id: "50",
        name: "Jute Mirror",
        image: Product50,
        price: 20,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.boo & Jute",
        category: "Bamboo & Jute"
    },
    {
        id: "51",
        name: "Pen Holder",
        image: Product51,
        price: 22,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    },
    {
        id: "52",
        name: "Pen Holder",
        image: Product52,
        price: 18,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    },
    {
        id: "53",
        name: "Photo Frame",
        image: Product53,
        price: 25,
        description: "blending tradition with sustainability for a natural touch to your lifestyle",
    },
    {
        id: "54",
        name: "bull Painting",
        image: Product54,
        price: 20,
        description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
        category: "Painting"
    },
    {
        id: "55",
        name: "Hand made Necless",
        image: Product55,
        price: 23,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "56",
        name: "Bracelet",
        image: Product56,
        price: 21,
        description: "Unique and elegant handmade jewelry crafted with love and attention to detail.",
        category: "Jwellery"
    },
    {
        id: "59",
        name: "Dan Dan Noodles",
        image: Product59,
        price: 25,
        description: "Noodles served with spicy ground pork and sauce.",
        category: "Noodles"
    },
    {
        id: "60",
        name: "bamboo pot",
        image: Product60,
        price: 27,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.& Jute"
    },
    {
        id: "61",
        name: "Bamboo Shelf",
        image: Product61,
        price: 30,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.",
        category: "Bamboo & Jute"
    },
    {
        id: "62",
        name: "Bamboo lamp",
        image: Product62,
        price: 20,
        description: "blending tradition with sustainability for a natural touch to your lifestyle.ute"
    },
    {
        id: "63",
        name: "Bamboo Ride",
        image: Product63,
        price: 28,
        description: "blending tradition with sustainability for a natural touch to your lifestyle",
        category: "Bamboo & Jute"

    },
    {
        id: "64",
        name: "Bird House",
        image: Product64,
        price: 22,
        description: "blending tradition with sustainability for a natural touch to your lifestyle. ",
        category: "Bamboo & Jute"
    },
    {
        id: "65",
        name: "Bamboo mirror",
        image: Product65,
        price: 22,
        description: "blending tradition with sustainability for a natural touch to your lifestyle. ",
           category: "Bamboo & Jute"
    },
{
    id: "66",
        name: "Traditional Pinting",
            image: Product66,
                price: 24,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
},

{
    id: "67",
        name: "Painting on bambo",
            image: Product67,
                price: 22,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
}
    , {
    id: "68",
        name: "Fish painting",
            image: Product68,
                price: 22,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
} , {
    id: "69",
        name: "Flower Painting",
            image: Product69,
                price: 22,
                    description: "Exquisite handmade paintings crafted with passion, creativity, and attention to detai",
                        category: "Painting"
}

];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await ProductModel.deleteMany(); // Clear existing data (optional)
    await ProductModel.insertMany(productList);

    console.log("✅ Products inserted successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error inserting products:", err);
    process.exit(1);
  }
};

seedProducts();
