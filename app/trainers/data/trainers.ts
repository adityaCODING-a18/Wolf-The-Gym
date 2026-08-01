import { Trainer } from "../types/trainer";


export const trainers: Trainer[] = [
  {
    id: 1,
    name: "SANU",
    username: "anu_rev_125",
    role: "Nutrition and Exercise Expert",

    bio: "Sanu takes the nutrition and exercise expert spot with a motivation-heavy reel that fits exercise planning, conditioning support and practical nutrition guidance.",

    avatar: "/trainers/sanu.jpg",

    reel: "gym edit one.mp4",

    instagram: "https://instagram.com/anu_rev_125",

    followers: 42,

    posts: 3,

    featuredText:
      "Staying locked in with a gym-edit style motivation push and a sharper training plan.",

    tags: [
      "Nutrition Guidance",
      "Exercise Planning",
      "Conditioning Support",
    ],
  },

  {
    id: 2,
    name: "JOHN",
    username: "johnfit",

    role: "Strength Coach",

    bio: "Helping athletes become stronger and faster.",

    avatar: "/trainers/john.jpg",

    reel: "gym edit two.mp4",

    instagram: "https://instagram.com/johnfit",

    followers: 90,

    posts: 10,

    featuredText: "Build strength with proper technique.",

    tags: [
      "Strength",
      "Powerlifting",
      "Mobility",
    ],
  },
];