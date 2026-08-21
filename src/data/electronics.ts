export type Topic = {
  name: string;
  short: string;
  detail: string;
  visual: string;
};

export const electronicsTopics: Topic[] = [
  {
    name: "Voltage",
    short: "The electrical pressure that pushes charge through a circuit.",
    detail:
      "Measured in volts (V). Think of it as water pressure in a pipe — more pressure, more flow.",
    visual: "9V",
  },
  {
    name: "Current",
    short: "The flow of electric charge through a conductor.",
    detail: "Measured in amperes (A). It is the amount of water actually moving through the pipe.",
    visual: "2A",
  },
  {
    name: "Resistance",
    short: "How strongly a material opposes the flow of current.",
    detail: "Measured in ohms (Ω). A narrow pipe resists flow — a resistor does the same.",
    visual: "220Ω",
  },
  {
    name: "Ohm's Law",
    short: "The single most useful formula in electronics.",
    detail: "V = I x R. Know any two values and you can always calculate the third.",
    visual: "V=I·R",
  },
  {
    name: "Power",
    short: "How much energy a component uses every second.",
    detail: "P = V x I, measured in watts (W). It tells you how hot a part will get.",
    visual: "P=V·I",
  },
  {
    name: "AC vs DC",
    short: "Two ways electricity can travel.",
    detail:
      "DC flows one direction (batteries, USB). AC reverses direction many times a second (wall sockets).",
    visual: "∿ / —",
  },
  {
    name: "Series Circuits",
    short: "Components connected one after another.",
    detail: "The same current passes through every part, and voltages add up.",
    visual: "—▭—▭—",
  },
  {
    name: "Parallel Circuits",
    short: "Components connected across the same two points.",
    detail: "Each branch gets the full voltage, and the currents add up.",
    visual: "═▭═▭═",
  },
  {
    name: "Breadboard Basics",
    short: "Build circuits without soldering anything.",
    detail: "Rows are connected horizontally, power rails run along the long edges.",
    visual: "▪▪▪▪",
  },
];

export type ComponentItem = {
  name: string;
  symbol: string;
  description: string;
  purpose: string;
};

export const componentItems: ComponentItem[] = [
  {
    name: "Resistor",
    symbol: "▭",
    description: "A passive part that limits how much current can flow.",
    purpose: "Protect LEDs, set bias points, divide voltage.",
  },
  {
    name: "Capacitor",
    symbol: "⊣⊢",
    description: "Stores and releases small amounts of electrical energy.",
    purpose: "Smooth power supplies and filter noise.",
  },
  {
    name: "LED",
    symbol: "◺",
    description: "A diode that emits light when current flows the right way.",
    purpose: "Status indicators and your very first project.",
  },
  {
    name: "Diode",
    symbol: "▷|",
    description: "Allows current in one direction only.",
    purpose: "Protect circuits from reversed polarity.",
  },
  {
    name: "Transistor",
    symbol: "⊥",
    description: "An electronic switch and amplifier.",
    purpose: "Drive motors and relays from a tiny MCU pin.",
  },
  {
    name: "Relay",
    symbol: "⊡",
    description: "An electrically controlled mechanical switch.",
    purpose: "Switch high-voltage loads safely from 5V logic.",
  },
  {
    name: "Switch",
    symbol: "⌁",
    description: "Opens or closes a circuit manually.",
    purpose: "User input: buttons, toggles, limit switches.",
  },
  {
    name: "Voltage Regulator",
    symbol: "▤",
    description: "Converts an input voltage into a stable output.",
    purpose: "Give your board a clean 5V or 3.3V rail.",
  },
  {
    name: "Sensor",
    symbol: "◎",
    description: "Turns a physical quantity into an electrical signal.",
    purpose: "Measure temperature, light, distance and motion.",
  },
  {
    name: "Motor",
    symbol: "◍",
    description: "Converts electrical energy into movement.",
    purpose: "Robots, fans, wheels and actuators.",
  },
];

export type Tool = {
  name: string;
  category: "Hardware" | "Software";
  tag: string;
  description: string;
};

export const tools: Tool[] = [
  {
    name: "Arduino",
    category: "Hardware",
    tag: "Board",
    description: "The friendliest starting board — plug in USB and blink an LED in minutes.",
  },
  {
    name: "ESP32",
    category: "Hardware",
    tag: "Wi-Fi MCU",
    description: "Dual-core microcontroller with built-in Wi-Fi and Bluetooth for IoT projects.",
  },
  {
    name: "STM32",
    category: "Hardware",
    tag: "ARM MCU",
    description: "Powerful ARM Cortex-M family used widely in professional products.",
  },
  {
    name: "Raspberry Pi",
    category: "Hardware",
    tag: "SBC",
    description: "A full Linux computer the size of a card, great for vision and dashboards.",
  },
  {
    name: "Breadboard",
    category: "Hardware",
    tag: "Prototyping",
    description: "Build and rebuild circuits instantly without soldering.",
  },
  {
    name: "Multimeter",
    category: "Hardware",
    tag: "Measurement",
    description: "Measure voltage, current, resistance and continuity while debugging.",
  },
  {
    name: "Soldering Iron",
    category: "Hardware",
    tag: "Assembly",
    description: "Make permanent joints when your prototype becomes a real board.",
  },
  {
    name: "Jumper Wires",
    category: "Hardware",
    tag: "Wiring",
    description: "Male and female wires to connect boards, sensors and breadboards.",
  },
  {
    name: "Sensors",
    category: "Hardware",
    tag: "Input",
    description: "DHT11, LDR, ultrasonic and IR sensors let your project see the world.",
  },
  {
    name: "Modules",
    category: "Hardware",
    tag: "Add-on",
    description: "Ready-made boards like relay, OLED, RFID and Bluetooth modules.",
  },
  {
    name: "Arduino IDE",
    category: "Software",
    tag: "IDE",
    description: "Write, compile and upload code with one button. Perfect for beginners.",
  },
  {
    name: "VS Code",
    category: "Software",
    tag: "Editor",
    description: "A modern editor with extensions for C/C++ and embedded workflows.",
  },
  {
    name: "PlatformIO",
    category: "Software",
    tag: "Toolchain",
    description: "Manage libraries, boards and builds for hundreds of MCUs inside VS Code.",
  },
  {
    name: "STM32CubeIDE",
    category: "Software",
    tag: "IDE",
    description: "Configure STM32 pins and clocks visually, then generate starter code.",
  },
  {
    name: "KiCad",
    category: "Software",
    tag: "PCB Design",
    description: "Free schematic capture and PCB layout to turn a circuit into a real board.",
  },
  {
    name: "Proteus",
    category: "Software",
    tag: "Simulation",
    description: "Simulate your circuit and microcontroller code before touching hardware.",
  },
];

export const roadmapSteps = [
  {
    step: 1,
    title: "Basic Electronics",
    text: "Voltage, current, resistance, Ohm's law and safe handling of power.",
  },
  {
    step: 2,
    title: "Electronic Components",
    text: "Identify and use resistors, capacitors, diodes, transistors and relays.",
  },
  {
    step: 3,
    title: "Circuit Basics",
    text: "Series and parallel circuits, breadboarding, reading simple schematics.",
  },
  {
    step: 4,
    title: "Microcontrollers",
    text: "Pins, GPIO, ADC, timers — start with Arduino, then ESP32 or STM32.",
  },
  {
    step: 5,
    title: "Programming Basics",
    text: "Embedded C fundamentals: variables, loops, functions and logic.",
  },
  {
    step: 6,
    title: "Sensors and Modules",
    text: "Read temperature, distance and light, and drive displays and relays.",
  },
  {
    step: 7,
    title: "Communication Protocols",
    text: "UART, I2C, SPI and how devices talk to each other.",
  },
  { step: 8, title: "Mini Projects", text: "Combine everything into small, complete products." },
  {
    step: 9,
    title: "Advanced Embedded Systems",
    text: "RTOS, low power design, PCB design and IoT connectivity.",
  },
];
