import Head from "next/head";
import Animated from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/vercel.svg";
import { motion } from 'framer-motion';
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
                          border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl 
                          dark:bg-light md:-right-2 md:width-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base"> Visit </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6"> <GithubIcon /> </Link>
                </div>
            </div>
        </article>
    );
}

const FeatureProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid 
                          border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark
                          dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl 
                          dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:2-full">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>

                <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:hover:underline decoration-light">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>

                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
                    <Link 
                        href={link} 
                        target="_blank" 
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark 
                                   sm:px-4 sm:text-base"
                    > 
                        Visit Project 
                    </Link>
                </div>

            </div>
        </article>
    );
}


const projects = () => {
    return (
        <>
            <Head>
                <title>emadak47 | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <Animated 
                        text="One Line of Code at a Time" 
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" 
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeatureProject
                                type="Undergraduate Capstone"
                                title="ML-Based Video Analytics Tool"
                                summary="Analyze candidates' facial expressions, eye gaze, eye emotions, and audio during a one-way interview scenario like HireVue.
                                        The application relies on simple statistical tools to compute metrics such as attentiveness, confidence, potential lie, and deep thinking. "
                                img={project1}
                                link="https://github.com/emadak47/AI-video-analytics"
                                github="https://github.com/emadak47/AI-video-analytics"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Reinforcement Learning"
                                title="Solve LunarLander-V2 Gym Environment"
                                img={project1}
                                link="https://github.com/emadak47/Lunar-Lander/tree/DQN"
                                github="https://github.com/emadak47/Lunar-Lander/tree/DQN"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Web Scrapping"
                                title="Automate Tasks with Selenium & BeautifulSoup "
                                img={project1}
                                link="https://github.com/emadak47/scrapers"
                                github="https://github.com/emadak47/scrapers"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeatureProject
                                type="Smart Contract"
                                title="Pre-IDO Whitelisting: Lucky Draw"
                                summary="Generate verifiable random numbers on-chain using ChainLink VRF. The numbers are used to select winners from a pool of addresses for a token's pre-IDO whitelisting."
                                img={project1}
                                link="https://github.com/emadak47/vrf-luckydraw"
                                github="https://github.com/emadak47/vrf-luckydraw"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Trading System Component"
                                title="Liquidity Monitor for Raydium - on-chain orderbook AMM"
                                img={project1}
                                link="https://github.com/emadak47/raydium-liquidity-monitor"
                                github="https://github.com/emadak47/raydium-liquidity-monitor"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Kaggle Competition"
                                title="Predicting Patients' Mortality & Length of Stay"
                                img={project1}
                                link="https://github.com/emadak47/kaggle-competition/tree/final_submission"
                                github="https://github.com/emadak47/kaggle-competition/tree/final_submission"
                            />
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    );
}

export default projects;