import Head from 'next/head';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';

const montserrate = Montserrat({
    subsets: ['latin'],
    variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${montserrate.variable} font-mont bg-light w-full min-h-screen`}>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    )
}
