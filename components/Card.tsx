import Link from "next/link";
import {MedDatatype} from "./types/DataType";

type CardProps = {
    cardData?: MedDatatype
    maxW: string
    link?: string
    checkIfSaved?: (id: string) => boolean
    toggleLocalStorage?: (id: string, data: MedDatatype) => void
    removeFromSaved?: (id: string) => void
}

export default function Card({maxW, cardData, link, checkIfSaved, toggleLocalStorage, removeFromSaved}: CardProps) {
    return (
        <div className={`relative block p-6 mb-2 max-w-${maxW} bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
            <Link href={link ? link : `https://clinicaltrials.gov/ct2/show/study/${cardData?.NCTId}`} target="_blank"
                  >
                {/*className="block p-6 mx-auto max-w-[69%] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">*/}
                <h5 className="mb-2 w-9/12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cardData ? cardData.BriefTitle : "Check the recent research post"}</h5>
                {cardData?.Condition.map((condition, index) => (
                    <span key={index}
                          className="inline-block px-2 py-1 mr-2 text-sm font-medium leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">{condition}</span>
                ))}
                {cardData ? <p className="mt-2 text-gray-600 dark:text-gray-300"><span
                    className="inline-block px-2 py-1 mt-1 mr-2 text-sm font-medium leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-green-500 dark:text-white">Lead sponsor: {cardData.LeadSponsorName}</span>
                    <span
                        className="inline-block px-2 py-1 mt-1 mr-2 text-sm font-medium leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-green-500 dark:text-white">{cardData.PrimaryCompletionDate.length > 0 ? `Completion date: ${cardData.PrimaryCompletionDate}` : null}</span>
                </p> : null}
                <p className="font-normal text-gray-700 dark:text-gray-300 mt-2">{cardData ? `Outcome measure: ${cardData.PrimaryOutcomeMeasure.map(el => el.toLowerCase())}` : "Here are the biggest enterprise technology stories of the day. Here are the biggest enterprise technology stories of the day. Here are the biggest enterprise technology stories of the day."}</p>
                {/*boomark button*/}

            </Link>
            {cardData && toggleLocalStorage ? <button
                onClick={() => toggleLocalStorage ? toggleLocalStorage(cardData.NCTId[0], cardData) : null}
                className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 dark:text-gray-300 hover:text-green-200 dark:hover:text-green-300">
                {checkIfSaved ? checkIfSaved(cardData.NCTId[0]) ? <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg> : <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg> : null}
            </button> : removeFromSaved && cardData ? <button
                onClick={() => removeFromSaved ? removeFromSaved(cardData.NCTId[0]) : null}
                className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-700">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                    </button> : null}


        </div>
    )
}
