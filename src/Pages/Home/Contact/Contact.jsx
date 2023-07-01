import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICEID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_USERID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Email sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error) => {
          console.log(error.text);
          if (error.text) {
            Swal.fire({
              title: `${error.text}`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="300"
      id="contact"
    >
      <SectionTitle
        heading={"Contact with me"}
        subheading={"Contact"}
      ></SectionTitle>
      <div className="flex gap-10 md:gap-0 flex-col-reverse md:flex-row justify-center items-center">
        <div data-aos="fade-up-right" data-aos-delay="300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d226.17860008118643!2d92.14765911291487!3d24.902838424451385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37503571975ab2ab%3A0x2957b9545d08d6b1!2sAhadiya%20Pharmacy!5e0!3m2!1sen!2sbd!4v1688191825176!5m2!1sen!2sbd"
            width="100%"
            height="430"
            className="w-full md:w-[500px]"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div data-aos="fade-up-left" data-aos-delay="300" className="w-full">
          <div className="contact-container mx-auto">
            <form ref={form} onSubmit={sendEmail} className="form">
              <div className="descr">Contact Form</div>
              <div className="input-for-contact">
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="from_name"
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input-for-contact">
                <input
                  required
                  autoComplete="off"
                  name="from_email"
                  type="email"
                />
                <label htmlFor="email">E-mail</label>
              </div>

              <div className="input-for-contact">
                <textarea
                  required
                  cols="30"
                  rows="1"
                  id="message"
                  name="message"
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit" className="btn-main">
                <span className="text">Send message →</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
