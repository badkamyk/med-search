import Link from "next/link";

export default function Card({maxW} : {maxW: string}) {

    return (
        <Link href="#"
            className={`block p-6 mb-2 max-w-${maxW} bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
              {/*className="block p-6 mx-auto max-w-[69%] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">*/}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
        </Link>
    )
}
