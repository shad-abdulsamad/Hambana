import React from "react";
import "./Features.css";

const featuresData = [
  {
    id: "extra-virgin",
    title: "Extra Virgin",
    description:
      "Olive oil comes from unadulterated oil production only, and is of higher quality.",
    iconPath: "icon.png",
  },
  {
    id: "new-harvest",
    title: "New Harvest",
    description:
      "Harvest oil is dedicated to providing you high quality ultra premium olive oils and vinegar.",
    iconPath: "path-to-your-new-harvest-icon.png",
  },
  {
    id: "new-harvest",
    title: "New Harvest",
    description:
      "Harvest oil is dedicated to providing you high quality ultra premium olive oils and vinegar.",
    iconPath: "path-to-your-new-harvest-icon.png",
  },
  {
    id: "new-harvest",
    title: "New Harvest",
    description:
      "Harvest oil is dedicated to providing you high quality ultra premium olive oils and vinegar.",
    iconPath: "path-to-your-new-harvest-icon.png",
  },
  {
    id: "new-harvest",
    title: "New Harvest",
    description:
      "Harvest oil is dedicated to providing you high quality ultra premium olive oils and vinegar.",
    iconPath: "path-to-your-new-harvest-icon.png",
  },
  {
    id: "new-harvest",
    title: "New Harvest",
    description:
      "Harvest oil is dedicated to providing you high quality ultra premium olive oils and vinegar.",
    iconPath: "path-to-your-new-harvest-icon.png",
  },
];

interface Props {
  title: string;
  description: string;
  iconPath: string;
}

const Feature = ({ title, description, iconPath }: Props) => (
  <div className="feature mt-5">
    <div
      className="feature-icon bg-contain bg-no-repeat bg-center h-16 w-16"
      style={{ backgroundImage: `url(${iconPath})` }}
    ></div>
    <div className="feature-title text-lg font-bold">{title}</div>
    <div className="feature-description text-md">{description}</div>
  </div>
);

const Features = () => {
  return (
    <div className="features-container flex-col justify-center items-center sm:flex-row">
      {featuresData.map((feature) => (
        <Feature
          key={feature.id}
          title={feature.title}
          description={feature.description}
          iconPath={feature.iconPath}
        />
      ))}
    </div>
  );
};

export default Features;
