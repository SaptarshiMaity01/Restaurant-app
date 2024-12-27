import Hero from "../Components/Hero";
import Special from "../Components/special";
import greek from "../Images/menu/Rectangle 1.png";
import brus from "../Images/menu/Rectangle 2.png";
import dessert from "../Images/menu/Rectangle 8.jpg";
import Testimonials from "../Components/testimonial";

const data = [
  {
    name: "Greek Salad",
    price: "$12.99",
    image: greek,
    description: "Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.",
  },
  {
    name: "Bruschetta",
    price: "$7.99",
    image: brus,
    description: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    price: "$6.99",
    image: dessert,
    description: "Featuring a perfect balance of tart lemon flavor and sweet creaminess. ",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;
