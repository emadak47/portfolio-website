import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark 
                     text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark 
                     dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
                       xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, trainsition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-36 w-full text-center md:text-6xl md:mt-28'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full 
                            bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
                            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
                            md:bg-circularLightMd md:dark:bg-circularDarkMd
                            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                                
                <Skill name="Supervised ML" x="-32vw" y="2vw" />
                <Skill name="Reinforcement Learning" x="28vw" y="-6vw" />
                <Skill name="RUST" x="10vw" y="-17vw" />
                <Skill name="ReactJS" x="-13vw" y="10vw" />
                <Skill name="NextJS" x="-3vw" y="24vw" />
                <Skill name="Web Scrapping" x="20vw" y="20vw" />
                <Skill name="Solidity" x="-10vw" y="-22vw" />
                <Skill name="Typescript" x="-20vw" y="-10vw" />
                <Skill name="Web3" x="10vw" y="8vw" />
                <Skill name="Chess" x="0vw" y="0vw" />
            </div>
        </>
    );
}

export default Skills;