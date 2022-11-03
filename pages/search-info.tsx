import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import {useState} from "react";
import {Pagination} from "flowbite-react";
import {MedDatatype} from "../components/types/DataType";

export default function SearchPage() {
    const [cardData, setCardData] = useState<Array<MedDatatype>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const onSubmit = (data: Array<MedDatatype>) => {
        setCardData(data);
        setTotalPages(Math.ceil(data.length / 9));
    }

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    }

    console.log(cardData)

    const getMedData = async (id: string) => {
        const response = await fetch(`/data.json`);
        const data = await response.json();
        return data.StudyFieldsResponse.StudyFields;
    }

    return (
        <div className="min-h-screen">
            <SearchInput onSubmit={onSubmit} getMedData={getMedData}/>
            <div className="my-6 flex flex-col items-center justify-center flex-1 px-20 text-center text-black dark:text-white">
                <h1 className="text-5xl font-bold">Search Results</h1>
                {cardData ? cardData.length > 0 && <p className="mt-3 text-2xl">Showing {cardData.length} results</p> : <p className="mt-3 text-2xl">No results found</p>}
                {/*<p className="mt-3 text-2xl">*/}
                {/*    /!*9 results for <span className="font-bold">&quot;Data&quot;</span>*!/*/}
                {/*    {cardData.length} results for <span className="font-bold">&quot;Data&quot;</span>*/}
                {/*</p>*/}
            </div>
            <div
                // className="py-3 flex flex-col gap-6 flex-wrap align items-center w-full justify-center mb-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                // className="p-3 grid gap-4 w-full mb-12 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-1">
                className="p-3 grid gap-4 w-full mb-6 justify-center items-center">
                {cardData.slice((currentPage - 1) * 9, currentPage * 9).map((data, index) => (
                    <Card key={data.NCTId[0]} maxW={"full"} cardData={data}/>
                ))}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
                {/*// <Card maxW={"full"}/>*/}
            </div>
            <Pagination className="flex justify-center items-center pb-3" currentPage={currentPage}
                        onPageChange={handleChangePage} totalPages={totalPages}/>
        </div>
    )
}
