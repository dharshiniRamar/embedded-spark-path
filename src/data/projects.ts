export type Level = "Beginner" | "Intermediate" | "Advanced";

export type Project = {
  slug: string;
  name: string;
  level: Level;
  summary: string;
  components: string[];
  tech: string[];
  overview: string;
  problem: string;
  solution: string;
  working: string;
  learnings: string[];
};

export const projects: Project[] = [
  {
    slug: "led-blinking",
    name: "LED Blinking",
    level: "Beginner",
    summary: "The classic first project: make an LED turn on and off at a fixed interval.",
    components: ["Arduino Uno", "LED", "220Ω Resistor", "Breadboard", "Jumper Wires"],
    tech: ["Embedded C", "Arduino IDE", "GPIO"],
    overview:
      "Blinking an LED is the 'Hello World' of embedded systems. It proves your board, toolchain and wiring all work together.",
    problem: "Beginners need a minimal, reliable way to confirm their setup is correct.",
    solution:
      "Drive a single GPIO pin high and low with a delay, lighting an LED through a current-limiting resistor.",
    working:
      "The microcontroller sets pin 13 HIGH, current flows through the resistor and LED, and after 500 ms the pin goes LOW again. The loop repeats forever.",
    learnings: [
      "How GPIO output pins work",
      "Why LEDs need a series resistor",
      "The setup() and loop() structure",
    ],
  },
  {
    slug: "traffic-light-system",
    name: "Traffic Light System",
    level: "Beginner",
    summary: "Simulate a road junction signal with red, yellow and green LEDs on timed sequences.",
    components: ["Arduino Uno", "Red/Yellow/Green LEDs", "3x 220Ω Resistors", "Breadboard"],
    tech: ["Embedded C", "Arduino IDE", "Timing logic"],
    overview:
      "A small state machine that mimics a real traffic signal, ideal for learning sequencing.",
    problem: "Controlling several outputs in a strict, repeatable order.",
    solution: "Use a state variable and timed transitions instead of a pile of delay() calls.",
    working:
      "Each state drives one LED and holds for a defined duration before moving to the next state.",
    learnings: ["Multiple output control", "Simple state machines", "Non-blocking timing with millis()"],
  },
  {
    slug: "automatic-street-light",
    name: "Automatic Street Light",
    level: "Beginner",
    summary: "A light that switches on automatically after sunset using an LDR sensor.",
    components: ["Arduino Uno", "LDR", "10kΩ Resistor", "LED / Relay", "Breadboard"],
    tech: ["Analog input", "ADC", "Arduino IDE"],
    overview: "Your first sensor-driven project — the circuit reacts to the environment.",
    problem: "Street lights left on during daylight waste large amounts of energy.",
    solution: "Read ambient light with an LDR voltage divider and switch the load below a threshold.",
    working:
      "The LDR resistance rises in darkness, the analog voltage drops, and the MCU turns the output on.",
    learnings: ["Voltage dividers", "Analog to digital conversion", "Threshold and hysteresis"],
  },
  {
    slug: "temperature-monitoring",
    name: "Temperature Monitoring System",
    level: "Intermediate",
    summary: "Measure room temperature and humidity and show live readings on an LCD.",
    components: ["Arduino Uno", "DHT11 Sensor", "16x2 LCD", "Potentiometer", "Jumper Wires"],
    tech: ["Sensor libraries", "I2C", "Embedded C"],
    overview: "A compact data-logging style project that introduces digital sensors and displays.",
    problem: "Rooms and equipment need continuous temperature awareness.",
    solution: "Poll the DHT11 every two seconds and render values on a character LCD.",
    working:
      "The DHT11 returns a digital packet, the library decodes it, and the LCD is refreshed over I2C.",
    learnings: ["Digital sensor protocols", "Driving an LCD", "Sampling intervals"],
  },
  {
    slug: "ultrasonic-distance-sensor",
    name: "Ultrasonic Distance Sensor",
    level: "Intermediate",
    summary: "Measure distance with an HC-SR04 and warn with a buzzer when an object gets close.",
    components: ["Arduino Uno", "HC-SR04", "Buzzer", "LEDs", "Breadboard"],
    tech: ["Pulse timing", "Interrupts", "Embedded C"],
    overview: "The core building block of parking sensors and obstacle-avoiding robots.",
    problem: "Robots and vehicles need to detect obstacles without touching them.",
    solution: "Send a 10 µs trigger pulse and measure the echo return time to compute distance.",
    working: "Distance = (echo time x speed of sound) / 2, refreshed roughly 20 times per second.",
    learnings: ["Pulse width measurement", "Unit conversion in code", "Buzzer alerts"],
  },
  {
    slug: "smart-home-light-control",
    name: "Smart Home Light Control",
    level: "Intermediate",
    summary: "Control a room light from your phone over Wi-Fi with an ESP32 and a relay module.",
    components: ["ESP32", "Relay Module", "Bulb Holder", "Power Supply", "Jumper Wires"],
    tech: ["Wi-Fi", "HTTP server", "Arduino IDE"],
    overview: "Your first connected project — a web page hosted by the microcontroller itself.",
    problem: "Manual switches are inconvenient and cannot be automated.",
    solution: "Run a tiny HTTP server on the ESP32 that toggles a relay from any browser.",
    working: "A GET request flips a boolean, which drives the relay pin and switches the load.",
    learnings: ["Wi-Fi connection handling", "Relay isolation and safety", "Basic web endpoints"],
  },
  {
    slug: "iot-weather-monitoring",
    name: "IoT Weather Monitoring System",
    level: "Advanced",
    summary: "Publish temperature, humidity and pressure data to a cloud dashboard every minute.",
    components: ["ESP32", "BME280 Sensor", "OLED Display", "Li-ion Battery", "Enclosure"],
    tech: ["MQTT", "Wi-Fi", "Deep sleep", "JSON"],
    overview: "A battery-powered field node that survives for weeks and reports to the cloud.",
    problem: "Local readings are useless if you cannot see historical trends remotely.",
    solution: "Sample sensors, publish JSON over MQTT, then deep-sleep to save power.",
    working:
      "The ESP32 wakes on a timer, connects to Wi-Fi, publishes a payload, and sleeps at ~10 µA.",
    learnings: ["MQTT publish/subscribe", "Low-power deep sleep", "Structured telemetry payloads"],
  },
  {
    slug: "rfid-attendance-system",
    name: "RFID Attendance System",
    level: "Advanced",
    summary: "Log attendance by scanning RFID cards, with a display and stored records.",
    components: ["Arduino Uno", "RC522 RFID Reader", "RFID Cards", "OLED Display", "SD Card Module"],
    tech: ["SPI", "RFID", "File storage", "Embedded C"],
    overview: "A practical institutional project combining identification, display and storage.",
    problem: "Manual attendance registers are slow and easy to falsify.",
    solution: "Match scanned card UIDs against a stored list and log timestamped entries.",
    working:
      "The RC522 communicates over SPI, the UID is compared to registered users, and the record is appended to an SD card file.",
    learnings: ["SPI communication", "Unique ID handling", "Writing files from an MCU"],
  },
];

export const levels: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Advanced"];
