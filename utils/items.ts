type category = "LED Lights" | "Winches" | "Air suspensions";

type ItemType = {
  id: number;
  name: string;
  category: category;
  imageUrl: string;
  extraImages?: string[];
  price: number;
  description: string;
};

const items: ItemType[] = [
  {
    id: 1,
    name: "LED Pair Progressive Indicators",
    category: "LED Lights",
    imageUrl: "/shop/led-lights/led-light-1.jpg",
    extraImages: [
      "/shop/led-lights/led-light-2.jpg",
      "/shop/led-lights/led-light-3.jpg",
      "/shop/led-lights/led-light-4.jpg",
    ],
    price: 14000,
    description:
      "The W185 series have an innovative design and a unique look. Each LED light: tail, direction indicator and reverse, are made of a non-transparent material. This diffuses the light so individual LEDs cannot be seen, creating a pleasant glow with a neon effect. The lens and lamp housing are made of high quality plastic, which is resistant to scratches, temperature changes and UV radiation. The lamp is E-type approved and has electromagnetic compatibility approvals as well. It is easy to mount on the vehicle.",
  },
  {
    id: 2,
    category: "Winches",
    name: "PUNDMANN PREMIUM WINCH 9500LBS",
    imageUrl: "/shop/winches/winch-1.jpg",
    price: 40000,
    description:
      "PUNDMANN PREMIUM 12V WINCH NEW GENERATION 9500 SYNTHETIC The PUNDMANN 9500 is a Compact, Tough winch with Heavy duty sealed contactors, synthetic rope and Stainless steel fairleads and fittings ensure its protected against the elements. Pundmann are a German premium winch manufacturer. PUNDMANN Professional custom winches are developed by our engineers and the carefully selected components are assembled in their our own expert centre in Germany. German engineering means that we go into every detail and that we make every effort to create even the smallest of improvements A great feature is the handheld controller on the wanderlead converts from wired to wireless, unplugs from the base of the handheld controller and becomes a remote control without having to buy a separate remote",
  },
  {
    id: 3,
    category: "Air suspensions",
    name: "AIR SUSPENSION KIT VW CRAFTER 2006-2016",
    imageUrl: "/shop/air-suspensions/vw-crafter-1.jpg",
    extraImages: [
      "/shop/air-suspensions/bellows.jpg",
      "/shop/air-suspensions/gauge.jpg",
      "/shop/air-suspensions/cable.jpg",
    ],
    price: 17500,
    description:
      "SINGLESEMI AIR SUSPENSION KIT DESIGNED FOR VW CRAFTER MANUFACTURED FROM 2006- 2016",
  },
];

export type { category, ItemType };
export { items };
