import FooterImg from "../Images/logo/Logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              XQGP street 128
              <br />
              Lane 246 Chicago
            </address>
            <a className="footer-block" href="tel:9xx59xx45x">
             
            </a>
            <br />
            <a className="footer-block" href="mailto: xxx@littlelemon.com">
              xxx@littlelemon.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2024 little lemon</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
