import Link from "next/link";
import {MedDatatype} from "./types/DataType";

type CardProps = {
    cardData?: MedDatatype
    maxW: string
}


export default function Card({maxW, cardData} : CardProps) {
    console.log(cardData)
    return (
        <Link href="#"
            className={`block p-6 mb-2 max-w-${maxW} bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
              {/*className="block p-6 mx-auto max-w-[69%] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">*/}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardData ? cardData.BriefTitle : "Check the recent research post"}</h5>
            {/*tags*/}
            {cardData?.Condition.map((condition, index) => (
                <span key={index}
                        className="inline-block px-2 py-1 mr-2 text-sm font-medium leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">{condition}</span>
            ))}
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
        </Link>
    )
}
