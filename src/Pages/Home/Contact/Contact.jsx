import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-up" data-aos-delay="300" id="contact">
      <SectionTitle
        heading={"Contact with me"}
        subheading={"Contact"}
      ></SectionTitle>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex justify-center"
      >
        <div className="contact-container">
          <form className="form">
            <div className="descr">Contact Form</div>
            <div className="input-for-contact">
              <input required autoComplete="off" type="text" />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-for-contact">
              <input required autoComplete="off" name="email" type="text" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-for-contact">
              <textarea required cols="30" rows="1" id="message"></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button className="btn-main">
              <span className="text">Send message →</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
