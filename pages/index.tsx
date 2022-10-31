import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pubmed info</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Hero/>


        </div>
    )
}
