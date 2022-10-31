import Link from "next/link";

export default function CTA() {
    return (
        <div className="text-center my-12 items-center">
            <h3 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span
                className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">We say Data</span> over
                feelings.</h3>
            <Link href="#"
                  className="mx-auto hover:shadow-2xl block w-1/6 p-15 text-white bg-blue-700 hover:bg-blue-800 hover: focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 my-3 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">
                {/*<svg className="inline-block m-auto w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
                {/*     xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>*/}
                {/*    <path*/}
                {/*        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>*/}
                {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>*/}
                {/*</svg>*/}

                Let&apos;s do research!
            </Link>
        </div>
    )
}
