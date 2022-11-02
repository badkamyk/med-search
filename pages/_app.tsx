import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Footer} from "flowbite-react";
import Script from "next/script";
import Nav from "../components/Nav";


export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={"dark:bg-gray-900 divide-y divide-solid divide-gray-200 dark:divide-gray-600 min-h-screen"}>
            <Script id="show-banner" src="/theme_button.js"/>
            <Script
                src="/theme_listener.js"
                id="theme_listener"
            />
            <Nav/>
            <Component {...pageProps} />
            <Footer container={true} className={"sm: text-center rounded-none"}>
                <Footer.Copyright
                    href="#"
                    by="MedInfo™"
                    year={2022}
                />
                <Footer.LinkGroup className={"sm: gap-2 sm: justify-center mt-auto"}>
                    <Footer.Link href="#">
                        About
                    </Footer.Link>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                        Contact
                    </Footer.Link>

                </Footer.LinkGroup>
            </Footer>
        </div>
    )
}
