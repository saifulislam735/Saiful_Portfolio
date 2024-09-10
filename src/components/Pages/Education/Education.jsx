import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../../styles';
import { educations } from '../../../Data';
import { SectionWrapper } from '../../../hoc';
import { textVariant } from '../../../utils/motion';


const EducationCard = ({ education }) => (
    <VerticalTimelineElement
        id='education'
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
                <h3 className="text-white text-[18px] font-bold font-beckman">
                    {education.date}
                </h3>
            </div>
        }
        iconStyle={{ background: education.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={education.icon}
                    alt={education.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }>
        <div>
            <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
                {education.title}
            </h3>
            <p
                className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
                style={{ margin: 0 }}>
                {education.company_name}
            </p>
        </div>
    </VerticalTimelineElement>
);

const Education = () => {


    return (

        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
                    What I have learned so far
                </p>
                <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
                    Educational Qualification.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline className="vertical-timeline-custom-line">
                    {educations.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Education, 'education');
