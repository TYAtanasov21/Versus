import React from "react";
import { AnimatedTooltip } from "./animated-toolTip";
const people = [
  {
    id: 1,
    name: "Alex Kazakov",
    designation: "Backend developer",
    image: require("../assets/Alex-Kazakov.jpg"),
  },
  {
    id: 2,
    name: "Ivan Dochev",
    designation: "Backend developer",
    image: require("../assets/Ivan-Dochev.jpg"),
  },
  {
    id: 3,
    name: "Boyan Kyovtorov",
    designation: "Data research",
    image: require("../assets/Boyan-Kyovtorov.jpg"),
  },
  {
    id: 4,
    name: "Todor Atanasov",
    designation: "Frontend developer",
    image:
      require("../assets/Todor-Atanasov.jpg"),
  },
  {
    id: 5,
    name: "Teodor Madjarov",
    designation: "Designer",
    image: require("../assets/Teodor-Madjarov.jpg"),
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className=" flex flex-row items-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}
