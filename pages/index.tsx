import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Card from "../components/Card";
import CTA from "../components/CTA";
import Script from "next/script";

export default function Home() {
    return (
        <div className="h-screen">
            <Head>
                <title>Pubmed info</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <Script id="show-banner" src="/theme_button.js" />
            <Script
                src="/theme_listener.js"
                id="theme_listener"
            />
            <Hero />
            <CTA />
            <div
                className="flex flex-col gap-4 align items-center w-full justify-center mb-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <Card />
                <Card />
                <Card />
            </div>


        </div>
    )
}
