// About.jsx
import { motion } from 'framer-motion';
import { styles } from '../../../styles';
import { services } from '../../../Data';
import { fadeIn, textVariant } from '../../../utils/motion';
import { SectionWrapper } from '../../../hoc';
import ServiceCard from './ServiceCard';

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I specialize in delivering end-to-end web development solutions, focusing on creating seamless and responsive user experiences. Whether it’s frontend development, backend architecture, or UI/UX design, I ensure every project is executed with precision and innovation.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
