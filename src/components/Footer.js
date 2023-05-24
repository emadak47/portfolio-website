import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer
            className='w-full border-t-2 border-solid border-dark font-medium text-lg
                     dark:text-light dark:border-light'
        >
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()}&copy; All Rights Reserved. </span>
                <div className='flex items-center'> Built By
                    <Link
                        href="https://github.com/emadak47"
                        className='underline underline-offset-2 px-2'
                        target={"_blank"}
                    >
                        emadak47
                    </Link>
                </div>
            </Layout>
        </footer>
    );
};

export default Footer;