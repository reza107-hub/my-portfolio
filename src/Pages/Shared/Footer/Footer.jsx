import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <footer
      data-aos="fade-up"
      data-aos-delay="300"
      className="footer footer-center mt-24 p-4 bg-base-300 text-base-content"
    >
      <div>
        <p>&copy; 2023 - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
