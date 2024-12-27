import "./AboutUs.css";
import AboutPic1 from "../Images/Aboutus.jpg";
import AboutPic2 from "../Images/menu/Rectangle 7.png";

const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon</h2>
            <h3 className="emon-primary-dark">Chicago</h3>
            <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <p>
            At Little Lemon, we take pride in blending traditional Mediterranean recipes with a contemporary flair. Our dishes are crafted using the freshest ingredients, ensuring every bite is a burst of flavor and authenticity. 
            </p>
            <p>
            Our cozy ambiance and warm hospitality make us the perfect spot for family dinners, date nights, or casual gatherings. Whether you're indulging in our signature Greek Salad or savoring our handmade desserts, you'll experience the essence of Mediterranean culture.   
            </p>
            <p>
            Come join us in the heart of Chicago and let us take you on a culinary journey you'll never forget. At Little Lemon, every meal is a celebration of tradition, taste, and togetherness.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutPic1} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic2} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
