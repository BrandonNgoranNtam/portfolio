"use client"
import { skills } from '@/public/tech'
import React from 'react'
import { Button } from './ui/MovingBorders'
import Tech from './Tech'

const Skills = () => {
    return (
        <div>
            <div className='py-20 w-full' id='skills'>
                <h1 className='heading'>
                    My <span className='text-purple'>skill set</span>
                </h1>
                <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                    {skills.map((skill) => (
                        <Button key={skill.id} duration={Math.floor(Math.random() * 10000 + 10000)} borderRadius='1.75rem' className='flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800'>
                            <div className='flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                                <img src={skill.thumbnail} alt={skill.thumbnail} className='lg:w-32 md:w-20 w-16' />
                                <div className='lg:ms-5'>
                                    <h1 className='text-start text-xl md:text-2xl font-bold'>{skill.title}</h1>
                                    <p className='text-start text-white-100 mt-3 font-semibold'>{skill.desc}</p>
                                </div>
                            </div>
                        </Button>

                    ))}
                </div>
            </div>
            <Tech />
        </div>
    )
}

export default Skills
/*"use client"
import { roles } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"



const Expertise = () => {
    return (
        <motion.div>
            <div className='py-20' id='roles'>
                <h1 className='heading'>
                    My <span className='text-purple'>work experience</span>
                </h1>
                <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                    {roles.map((role) => (
                        <Tilt key={role.id} options={{ max: 25, scale: 1.02 }}>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                                <Button key={role.id} duration={Math.floor(Math.random() * 10000 + 10000)} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                                    <div className='flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                                        <img src={role.thumbnail} alt={role.thumbnail} className='lg:w-32 md:w-20' />
                                        <div className='lg:ms-5'>
                                            <h1 className='text-start text-xl md:text-2xl font-bold'>{role.title}</h1>
                                            <p className='text-start text-white-100 mt-3 font-semibold'>{role.desc}</p>
                                        </div>
                                    </div>
                                </Button>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Expertise*/