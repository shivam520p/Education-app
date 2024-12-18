import AboutCard1 from "../../assets/images/About1.png";
import AboutCard2 from "../../assets/images/About2.png";
import AboutCard3 from "../../assets/images/About3.png";
import AboutCard4 from "../../assets/images/About4.png";
import AboutCard from "./AboutCard";

const cards = [
  { cardName: "Sidhharth Sisodiya", image: AboutCard1 },
  { cardName: "Sidhharth Sisodiya", image: AboutCard2 },
  { cardName: "Sidhharth Sisodiya", image: AboutCard3 },
  { cardName: "Sidhharth Sisodiya", image: AboutCard4 },
];

const AboutCards = () => (
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-5">
      {cards.map((room, index) => (
        <AboutCard key={index} {...room} />
      ))}
    </div>
  </div>
);

export default AboutCards;
