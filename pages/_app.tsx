import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Navbar, Footer} from "flowbite-react";
import Image from "next/image";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={"dark:bg-gray-900"}>
            <Navbar
                fluid={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        width={100}
                        height={100}
                        className="mr-1 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      MedInfo
    </span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/navbars"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <Component {...pageProps} />
            <Footer container={true} className={"sm: text-center"}>
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
