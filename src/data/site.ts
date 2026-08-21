export const navItems = [
  { label: "Home", to: "/" },
  { label: "Basics", to: "/basics" },
  { label: "Electronics", to: "/electronics" },
  { label: "Components", to: "/components" },
  { label: "Tools", to: "/tools" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const categories = [
  {
    title: "Embedded Systems Basics",
    description: "Understand what embedded systems are and how hardware meets software.",
    to: "/basics",
    icon: "Cpu",
  },
  {
    title: "Basic Electronics",
    description: "Voltage, current, resistance and Ohm's law explained simply.",
    to: "/electronics",
    icon: "Zap",
  },
  {
    title: "Components",
    description: "Resistors, capacitors, transistors and every part you will touch.",
    to: "/components",
    icon: "CircuitBoard",
  },
  {
    title: "Tools",
    description: "Arduino, ESP32, multimeters, IDEs and simulators for beginners.",
    to: "/tools",
    icon: "Wrench",
  },
  {
    title: "Mini Projects",
    description: "Build real hardware step by step, from blinking LEDs to IoT.",
    to: "/projects",
    icon: "Rocket",
  },
] as const;

export const benefits = [
  {
    title: "Everything around you is embedded",
    text: "Over 90% of the microcontrollers made each year end up in everyday products, not computers.",
  },
  {
    title: "Hardware + software skills",
    text: "You learn C programming, electronics and debugging — a rare and valuable combination.",
  },
  {
    title: "Strong career demand",
    text: "Automotive, robotics, medical devices, IoT and industrial automation all hire embedded engineers.",
  },
  {
    title: "You build real things",
    text: "Nothing beats seeing your own circuit respond to the code you wrote minutes ago.",
  },
];

export const applications = [
  "Smart Home Devices",
  "Cars & EVs",
  "Washing Machines",
  "Medical Devices",
  "IoT Devices",
  "Industrial Machines",
  "Drones & Robotics",
  "Wearables",
];
