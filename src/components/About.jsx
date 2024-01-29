import React from "react"
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"

import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"

import {SectionWrapper} from "../hoc"
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px]
      rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center
          flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3
            className="text-white text-[20px]
          font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px]
                   max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Experienced full-stack developer with a year of hands-on expertise.
        Front-end proficiency in HTML, HTML5, CSS, SCSS, JSON, Responsive Web
        Design, and UI tools like Figma and Bootstrap. Skilled in Vanilla JS,
        jQuery, React.js, and Next.js, with a focus on state management using
        Redux and TypeScript. Well-versed in Git for version control. On the
        back end, solid understanding of C# and adherence to SOLID principles.
        Expertise in .NET Core 6 MVC, N-Tier Architecture, and integration of
        RESTful APIs. Proficient in MSSQL, data structures, Swagger API for
        documentation, and SEO best practices. Adept at collaborative design
        using Figma. Ready to contribute effectively to full-stack development
        projects with a diverse skill set.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services &&
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
