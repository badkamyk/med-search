import Link from "next/link";

export default function CTA() {
    return (
        <div className="text-center my-12 items-center ">
            <h3 className="mb-6 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span
                className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">We say Data</span> over
                feelings.</h3>
            <Link href="/search-info"
                className="bg-blue-700 mx-auto hover:shadow-2xl block w-1/6 p-15 text-white hover:bg-blue-800 hover: focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 my-3 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-blue-800">
                Let&apos;s do research!
            </Link>
        </div>
    )
}
