import Animated from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import article1 from '../../public/vercel.svg';
import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                ref={imgRef}
                src={img}
                alt={title}
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
            />
        </Link>
    );
}

const FeatureArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
            <Link href={link} target="_blank" className="w-1/2 inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           50vw"
                />
            </Link>

            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg '>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    );
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
            viewport={{ 'once': true }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark 
                       first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark 
                       dark:text-light sm:flex-col'
        >
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    );
}

const articles = () => {
    return (
        <>
            <Head>
                <title>emadak47 | Articles Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <Animated text="Topics of Interest" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 md:grid-col-1 lg:gap-8 md:gap-y-16'>
                        <FeatureArticle
                            title="ML-based Video Analytics Tool for Multimodal Emotion Recognition"
                            summary="This paper presents a novel method for studying a candidate's nonverbal cues in an online interview setting. 
                                    It discusses the need for such an application, previous research, databases used to train various models, 
                                    the proposed method for aggregating results from modular components, and the computation of nonverbal metrics."
                            time="20 min read"
                            link="/docs/APAI3799.pdf"
                            img={article1}
                        />
                        <FeatureArticle
                            title="Control an agent in LunarLander-v2 - an OpenAI gym environment"
                            summary="This paper explores the implementations of various algorithms and their sub-variants, including their updating 
                                    rules and experimental results. The algorithms discussed include Deep Q-Network (with and without experience replay), 
                                    policy gradient (Monte Carlo policy gradient and proximal policy optimization), as well as SARSA."
                            time="15 min read"
                            link="/docs/COMP3340.pdf"
                            img={article1}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Featured Papers</h2>
                    <ul>
                        <Article
                            title="Time Series Analysis of CO2 Emissions in the U.S. : Stationarity, Model Fitting, Diagnostics"
                            img={article1}
                            date="Dec 7th, 2022"
                            link="/docs/STAT4601.pdf"
                        />
                        <Article
                            title="Modelling of Mortality Prediction and Length-of-Stay on the MIMIC-III database"
                            img={article1}
                            date="Dec 7th, 2022"
                            link="/docs/STAT3612.pdf"
                        />
                        <Article
                            title="A Statistical Marketing Study of Productivtiy Laptops: Clustering and Conjoint Analysis"
                            img={article1}
                            date="Dec 3rd, 2022"
                            link="/docs/STAT3613.pdf"
                        />
                        <Article
                            title="Severance and Buddhism: An Ethical Treatment"
                            img={article1}
                            date="Apr 27th, 2023"
                            link="/docs/BSTC2021.pdf"
                        />
                        <Article
                            title="Analysis of the Concept of Mono-no-aware in Chapter Ten of the Tale of Genji"
                            img={article1}
                            date="Mar 13th, 2023"
                            link="/docs/BSTC2003_2.pdf"
                        />
                        <Article
                            title="The Influence of Zen Buddhism on Fashion Design"
                            img={article1}
                            date="May 15th, 2023"
                            link="/docs/BSTC2003_1.pdf"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );

}

export default articles;