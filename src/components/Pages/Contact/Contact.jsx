import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../../../styles';
import { SectionWrapper } from '../../../hoc';
import { slideIn } from '../../../utils/motion';
import { send, sendHover } from '../../../assets';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init('4RD5WJGtrtNVyuMnZ'); // Replace with your actual Public Key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_0fyfpvg'; // Replace with your actual Service ID
    const templateId = 'template_uedqo0s'; // Replace with your actual Template ID

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current);
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      console.error('Failed to send email:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      style={{ background: 'rgba(31, 31, 31, 0.8)' }}
      className="flex justify-center items-center -mt-[8rem] xl:flex-row flex-col-reverse gap-10 overflow-hidden pt-8"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          id="contact-form"
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <input type="hidden" name="contact_number" value="697483" />
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 gap-3 sm:text-[20px] text-[16px] text-timberWolf font-bold font-beckman items-center py-5 whitespace-nowrap sm:w-[130px] sm:h-[50px] w-[100px] h-[45px] rounded-[10px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out bg-slate-700"
            onMouseOver={() => {
              document.querySelector('.contact-btn').src = sendHover;
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').src = send;
            }}
          >
            {loading ? 'Sending...' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
