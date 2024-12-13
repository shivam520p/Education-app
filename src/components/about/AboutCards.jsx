import AboutCard1 from "../../assets/images/About1.png";
import AboutCard2 from "../../assets/images/About2.png";
import AboutCard3 from "../../assets/images/About3.png";
import AboutCard4 from "../../assets/images/About4.png";
import AboutCard from "./AboutCard";

const cards = [
  { cardName: "Sidhharth Sisodiya", price: "20", image: AboutCard1 },
  { cardName: "Sidhharth Sisodiya", price: "23", image: AboutCard2 },
  { cardName: "Sidhharth Sisodiya", price: "25", image: AboutCard3 },
  { cardName: "Sidhharth Sisodiya", price: "30", image: AboutCard4 },
];

const AboutCards = () => (
  <>
  <div>
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-5 px-4">
    {cards.map((room, index) => (
      <AboutCard key={index} {...room} />
    ))}
  </div>
  </div>
  </>
);

export default AboutCards;
