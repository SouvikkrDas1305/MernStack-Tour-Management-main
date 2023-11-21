import Darjeeling from "../images/darjeeling.webp";
import Banaras from "../images/banaras.webp";
import Goa from "../images/goa.webp";
import Ladakh from "../images/hill.webp";
import TajMahal from "../images/taj.webp";
import Shimla from "../images/Shimla.webp";
import Munnar from "../images/munnar.webp";
import KedarNath from "../images/kedarnath.webp" 
const tours = [
  {
    id: "01",
    title: "Darjeeling",
    city: "Darjeeling, West Bengal",
    distance: 700,
    price: 1000,
    maxGroupSize: 10,
    desc: "Where the mist embraces the mountains, tea gardens paint the landscape, and every sunrise unfolds a new chapter of serenity. 🏞️☕ #DarjeelingDelights",
    reviews: [
      {
        name: "Arghadip Jana",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Darjeeling,
    featured: true,
  },
  {
    id: "02",
    title: "Banaras",
    city: "Uttar Pradesh",
    distance: 700,
    price: 3000,
    maxGroupSize: 8,
    desc: "Where the Ganges whispers stories of ancient spirituality, ghats reflect timeless traditions, and every corner echoes the symphony of culture. 🌅🕊️ #BanarasChronicles",
    reviews: [
      {
        name: "Partha Biswas",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Banaras,
    featured: true,
  },
  {
    id: "03",
    title: "Goa",
    city: "Goa, India",
    distance: 3000,
    price: 9000,
    maxGroupSize: 8,
    desc: "Dive into the rhythm of the coastal paradise, where the sun, sand, and sea paint a canvas of unforgettable memories. 🏖️🎉 #GoaGetaway",
    reviews: [
      {
        name: "Arpan Mukherjee",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Goa,
    featured: true,
  },
  {
    id: "04",
    title: "Ladakh",
    city: "Ladakh, India",
    distance: 3000,
    price: 20000,
    maxGroupSize: 8,
    desc: "Explore the rugged beauty, ancient monasteries, and the magic of Ladakh's landscapes. Your journey to the roof of the world begins here. 🏔️✨ #LadakhLegacy",
    reviews: [
      {
        name: "Subhankar Samanta",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Ladakh,
    featured: true,
  },
  {
    id: "05",
    title: "Taj Mahal",
    city: "Agra, India",
    distance: 1800,
    price: 8000,
    maxGroupSize: 8,
    desc: "Witness the romance and grandeur that echoes through the corridors of this architectural masterpiece. Step into the story of eternal love. 💖🕌 #TajMahalTreasures",
    reviews: [
      {
        name: "Raju Karmakar",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: TajMahal,
    featured: false,
  },
  {
    id: "06",
    title: "Shimla",
    city: "Himachal Pradesh, India",
    distance: 1800,
    price: 15000,
    maxGroupSize: 8,
    desc: "Experience the allure of Shimla, where nature meets heritage in perfect harmony. 🌲🚂 #ShimlaStories",
    reviews: [
      {
        name: "Souvik Kumar Das ",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Shimla,
    featured: false,
  },
  {
    id: "07",
    title: "Munnar",
    city: "Kerala, India",
    distance: 2500,
    price: 18000,
    maxGroupSize: 8,
    desc: "Munnar, where every sunrise paints the day in hues of green, and the aroma of tea plantations dances in the air. Embrace the magic of Munnar! 🍃🌄 #MunnarMagic",
    reviews: [
      {
        name: "Plaban Dutta",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: Munnar,
    featured: false,
  },
  {
    id: "08",
    title: "Kedarnath",
    city: "Uttrakhand, India",
    distance: 1800,
    price: 15000,
    maxGroupSize: 8,
    desc: "Nestled in the lap of the Himalayas, where spirituality meets serenity. The journey to Kedarnath is not just a pilgrimage 🏔️🙏 #KedarnathJourney",
    reviews: [
      {
        name: "Biman Kayal",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: KedarNath,
    featured: false,
  },
];

export default tours;
