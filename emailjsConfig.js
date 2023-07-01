import dotenv from 'dotenv';

dotenv.config();

(function () {
    // eslint-disable-next-line no-undef
    emailjs.init(process.env.REACT_APP_EMAILJS_USERID);
})();