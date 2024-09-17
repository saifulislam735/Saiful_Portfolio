import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../../styles';
import { experiences } from '../../../Data';
import { SectionWrapper } from '../../../hoc';
import { textVariant } from '../../../utils/motion';
import { IoDownloadOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import resume from '../../../assets/icons/resume.png';
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    style={{ fontFamily: 'Poppins ' }}
    id={experience.id}
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-white text-[18px] font-bold ">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold  tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold  tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const resumeDownload = () => {
    const pdfUrl = "Saiful_Islam_RESUME.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Saiful Islam Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <motion.div variants={textVariant()}
        style={{ fontFamily: 'Poppins ' }}
      >
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          )
          )}
          <VerticalTimelineElement


            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}

            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
            }
          >
            <Link
              className="live-demo flex justify-between 
                                sm:text-[18px] text-[14px] text-timberWolf 
                                font-bold  items-center py-5 pl-3 pr-3 
                                whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
                                w-[125px] h-[46px] rounded-[10px] bg-jetLight 
                                sm:mt-[22px] mt-[16px] hover:bg-battleGray 
                                hover:text-eerieBlack transition duration-[0.2s] 
                                ease-in-out"
              onClick={resumeDownload}

            >
              <div style={{ fontWeight: '800', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                MY RESUME
                <IoDownloadOutline />
              </div>

            </Link>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
