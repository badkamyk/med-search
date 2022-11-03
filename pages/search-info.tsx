import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import {useState} from "react";
import {Pagination} from "flowbite-react";
import {MedDatatype} from "../components/types/DataType";

export default function SearchPage() {
    const [cardData, setCardData] = useState<Array<MedDatatype>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [savedSearchTerm, setSavedSearchTerm] = useState<Array<string>>([]);

    const addToSavedSearchTerm = (searchTerm: string) => {
        if (!savedSearchTerm.includes(searchTerm)) {
            setSavedSearchTerm(prevState => [...prevState, searchTerm]);
        }
    }

    const filterSearchTerm = (id: string) => {
        return setSavedSearchTerm(prevState => prevState.filter((item) => item !== id));
    }

    const toggleLocalStorage = (id: string, data: MedDatatype) => {
        const localData = localStorage.getItem("savedData");
        console.log(savedSearchTerm);
        if (localData) {
            const parsedData = JSON.parse(localData);
            if (parsedData[id]) {
                delete parsedData[id];
                filterSearchTerm(id);
            } else {
                parsedData[id] = data;
                if (!savedSearchTerm.includes(id)) {
                    addToSavedSearchTerm(id);
                }
            }
            localStorage.setItem("savedData", JSON.stringify(parsedData));
        } else {
            const newData: any = {};
            newData[id] = data;
            localStorage.setItem("savedData", JSON.stringify(newData));
            addToSavedSearchTerm(id);
        }
    }

    const onSubmit = (data: Array<MedDatatype>) => {
        setCardData(data);
        setTotalPages(Math.ceil(data.length / 9));
    }

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    }

    const checkIfSaved = (id: string) => {
        const localData = localStorage.getItem("savedData");
        if (localData) {
            const parsedData = JSON.parse(localData);
            if (parsedData[id]) {
                return true;
            }
        }
        return false;
    }

    const getMedData = async (name: string) => {
        const response = await fetch(`https://www.clinicaltrials.gov/api/query/study_fields?expr=${name}&fields=NCTId%2CBriefTitle%2CCondition%2CPrimaryOutcomeMeasure%2CLeadSponsorName%2CPrimaryCompletionDate&min_rnk=1&max_rnk=42&fmt=json`);
        const data = await response.json();
        return data.StudyFieldsResponse.StudyFields;
    }
    return (
        <div className="min-h-screen">
            <SearchInput onSubmit={onSubmit} getMedData={getMedData}/>
            <div
                className="my-6 flex flex-col items-center justify-center flex-1 px-20 text-center text-black dark:text-white">
                <h1 className="text-4xl font-bold">{cardData.length > 0 ? "Search Results" : "Search results will show below"}</h1>
                {cardData ? cardData.length > 0 && <p className="mt-3 text-2xl">Showing {cardData.length} results</p> :
                    <p className="mt-3 text-2xl">No results found</p>}
            </div>
            <div
                // className="py-3 flex flex-col gap-6 flex-wrap align items-center w-full justify-center mb-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                // className="p-3 grid gap-4 w-full mb-12 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-1">
                className="p-3 grid gap-4 w-full mb-6 justify-center items-center">
                {cardData.slice((currentPage - 1) * 9, currentPage * 9).map((data) => (
                    <Card key={data.NCTId[0]} maxW={"7xl"} cardData={data} checkIfSaved={checkIfSaved}
                          toggleLocalStorage={toggleLocalStorage}/>
                ))}
            </div>

            {cardData.length > 0 &&
                <Pagination className="flex justify-center items-center pb-3" currentPage={currentPage}
                            onPageChange={handleChangePage} totalPages={totalPages}/>}
        </div>
    )
}
