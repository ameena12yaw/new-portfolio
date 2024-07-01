"use client";

import { BsArrowDownRight } from 'react-icons/bs'  
import Link from 'next/link';
import { motion } from 'framer-motion'

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "02",
    title: "Database Administration",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "03",
    title: "Software Testing",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  
]


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
          <motion.div
              initial={{ opacity:0 }}
              animate={{ 
                opacity: 1,
                transition: {
                  delay: 2.4,
                  duration: 0.4,
                  ease: "easeIn"
                }
               }}
               className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
          >
            {services.map((service, index)=> {
              return (
                <div className='flex flex-col justify-center flex-1 gap-6 group' key={index}>
                  <div className='flex items-center justify-between w-full'>
                    <div className='text-4xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover'>
                        {service.num}
                    </div>
                    <Link href={service.href} className='w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                        <BsArrowDownRight className='text-1.5xl text-primary' />
                    </Link>
                  </div>
                  <h2 className='text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                    {service.title}
                  </h2>
                  <p className=''>
                    {service.description}
                  </p>
                  <div className='w-full border border-b-white/20'>
                    
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
    </section>
  )
}

export default Services