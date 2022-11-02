import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
import Card from "../components/Card";
import CTA from "../components/CTA";
import Nav from "../components/Nav";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Pubmed info</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Hero/>
            <CTA/>
            <div
                className="flex flex-col gap-4 align items-center w-full justify-center mb-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
