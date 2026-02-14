import React from "react";
import { FaAward, FaCheckCircle, FaFileAlt, FaLock } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Loyalty Bonus",
    icon: <FaAward />,
  },
  {
    id: 2,
    title: "Genuine Product",
    icon: <FaCheckCircle />,
  },
  {
    id: 3,
    title: "Appreciation Letter",
    icon: <FaFileAlt />,
  },
  {
    id: 4,
    title: "Secure Transaction",
    icon: <FaLock />,
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container features__wrapper">
        {items.map((item) => (
          <div key={item.id} className="features__item">
            <div className="features__icon">{item.icon}</div>
            <p className="features__title">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
