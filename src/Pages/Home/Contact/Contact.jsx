import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Contact.css'

const Contact = () => {
  return (
    <div id="contact">
      <SectionTitle
        heading={"Contact with me"}
        subheading={"Contact"}
      ></SectionTitle>
      <div className="flex justify-center">
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
            <button>Send message →</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
