import {useState} from "react";
import {MedDatatype} from "./types/DataType";

export default function SearchInput({onSubmit, getMedData} : {onSubmit: (data: Array<MedDatatype>) => void , getMedData: (searchTerm: string) => Promise<Array<MedDatatype>>}) {
    const [searchTerm, setSearchTerm] = useState("");
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getMedData(searchTerm).then((data) => onSubmit(data));
    }
    return (
        <form onSubmit={handleSubmit} className="mt-12 px-6 text-md">
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input onChange={onChangeInput} value={searchTerm} type="search" id="default-search"
                       className="block p-4 pl-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search Creatine, Ashwagandha..." required/>
                <button type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                </button>
            </div>
        </form>

    )
}
