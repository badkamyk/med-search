import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero";
import {Carousel} from "flowbite-react";
import Image from "next/image";
import MainForm from "../components/MainForm";
import Card from "../components/Card";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pubmed info</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Hero/>
            {/*<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 max-w-[60%] mx-auto">*/}
            {/*    <Carousel slideInterval={5000}>*/}
            {/*        <Image*/}
            {/*            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"*/}
            {/*            alt="..."*/}
            {/*            height={600}*/}
            {/*            width={600}*/}
            {/*        />*/}
            {/*        <Image*/}
            {/*            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"*/}
            {/*            alt="..."*/}
            {/*            height={500}*/}
            {/*            width={500}*/}
            {/*        />*/}
            {/*        <Image*/}
            {/*            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"*/}
            {/*            alt="..."*/}
            {/*            height={500}*/}
            {/*            width={500}*/}
            {/*        />*/}
            {/*        <Image*/}
            {/*            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"*/}
            {/*            alt="..."*/}
            {/*            height={500}*/}
            {/*            width={500}*/}
            {/*        />*/}
            {/*        <Image*/}
            {/*            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"*/}
            {/*            alt="..."*/}
            {/*            height={500}*/}
            {/*            width={500}*/}
            {/*        />*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
            {/*<MainForm/>*/}
            <div className="flex flex-col gap-4 align items-center w-full justify-center mb-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row ">
                <Card/>
                <Card/>
                <Card/>
            </div>



        </div>
    )
}
