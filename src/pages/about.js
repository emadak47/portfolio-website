import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Animated from '@/components/AnimatedText';
import Skills from '@/components/Skills';
import profilePic from '../../public/next.svg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value]);

    return <span ref={ref} />;
}

const about = () => {
    return (
        <>
            <Head>
                <title>emadak47 | About Page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <Animated text="Placeholder" />

                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

                            <p className='font-medium'>Paragraph 1</p>
                            <p className='font-medium my-4'>Paragraph 2</p>
                            <p className='font-medium'>Paragraph 3</p>

                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image 
                                src={profilePic} 
                                alt="emadak47" 
                                className='w-full h-auto rounded-2xl' 
                                priority
                                sizes="(max-width: 768px) 100vw,
                                       (max-width: 1200px) 50vw,
                                        33vw"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">satisfied clients</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">projects completed</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">years of experience</h2>
                            </div>
                        </div>
                    </div>

                <Skills />
                <Experience />
                <Education />
                </Layout>
            </main>
        </>
    );
}

export default about;