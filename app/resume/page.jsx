"use client";

import { Description } from '@radix-ui/react-dialog';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaSql,
  FaPostgres,
} from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, minima!',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ameena Nelson",
    },
    {
      fieldName: "Phone",
      fieldValue: "+233 20 640 2152",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: ".cid.6eb0d8b299a32efa",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ghanaian",
    },
    {
      fieldName: "Email",
      fieldValue: "ameena12nelson@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ]
}

const experience = {
  icon: '/public/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, minima!',
  items: [
    {
      company: "Commodity Monitor.",
      position: "Web Developer",
      duration: "2024 - Present", 
    },
    {
      company: "Mak Frozen  Foods.",
      position: "Web Developer",
      duration: "2022 - 2023", 
    },
    {
      company: "E-commerce Startup.",
      position: "Freelance Web Developer",
      duration: "2021 - 2022", 
    },
  ]
}

const education = {
  icon: '/public/assets/resume/cap.svg',
  title: 'My education',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, minima!',
  items: [
    {
      Institution: "ALX",
      course: "Virtual Assistant",
      duration: "2024", 
    },
    {
      Institution: "ALX",
      course: "AI Career Essentials",
      duration: "2024", 
    },
    {
      Institution: "Edx Online Platform",
      course: "Introduction to Computer Science ",
      duration: "2024", 
    },
    {
      Institution: "Udemy Online Platform",
      course: "Complete Web Development Bootcamp ",
      duration: "2023", 
    },
    {
      Institution: "AITI - KACE",
      course: "Diploma in Business Computing",
      duration: "2022 - 2023", 
    },
    {
      Institution: "AITI - KACE",
      course: "Certificate in Software Development",
      duration: "2022", 
    },
    
  ]
}

const skills = {
  title: 'My skills',
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, minima!',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next "
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaSql />,
      name: "SQL",
    },
    {
      icon: <FaPostgres />,
      name: "Postgres",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion';


const Resume = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn"
          }
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'

    >
       <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className= 'flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
              <TabsContent value='experience' className='w-full'>
                <div className='flex-col gap-[30px] text-center xl:text-left'> 
                  <h3 className='text-3xl font-bold'>
                    {experience.title}
                  </h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {experience.description}
                  </p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience.items.map((item, index)=> {
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                              {item.position}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>
                                {item.company}
                              </p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>


              
              <TabsContent value='education' className='w-full'>
                  <div className='flex-col gap-[30px] text-center xl:text-left'> 
                      <h3 className='text-3xl font-bold'>
                        {education.title}
                      </h3>
                      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                        {education.description}
                      </p>
                      <ScrollArea className='h-[400px]'>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                          {education.items.map((item, index)=> {
                            return (
                              <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                <span className='text-accent'>{item.duration}</span>
                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                  {item.course}
                                </h3>
                                <div className='flex items-center gap-3'>
                                  <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                  <p className='text-white/60'>
                                    {item.Institution}
                                  </p>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </ScrollArea>
                    </div>
              </TabsContent>
              <TabsContent value='skills' className='w-full'>
                skills
              </TabsContent>
              <TabsContent value='about' className='w-full'>
                about me
              </TabsContent>
          </div>
        </Tabs>
       </div>
    </motion.div>
  )
}

export default Resume