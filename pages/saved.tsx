import {MedDatatype} from "../components/types/DataType";
import {useState, useEffect} from "react";
import {Pagination} from "flowbite-react";
import Card from "../components/Card";

export default function Saved() {
    const [savedData, setSavedData] = useState<Array<MedDatatype>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const getSavedData = () => {
        const localData = localStorage.getItem("savedData");
        if (localData) {
            const parsedData = JSON.parse(localData);
            const data: Array<MedDatatype> = Object.values(parsedData);
            setSavedData(data);
            setTotalPages(Math.ceil(data.length / 9));
        }
    }

    const removeFromSaved = (id: string) => {
        const localData = localStorage.getItem("savedData");
        if (localData) {
            const parsedData = JSON.parse(localData);
            delete parsedData[id];
            localStorage.setItem("savedData", JSON.stringify(parsedData));
            getSavedData();
        }
    }

    const removeAllFromStorage = () => {
        localStorage.removeItem("savedData");
        setSavedData([]);
        setTotalPages(1);
    }

    useEffect(() => {
        getSavedData();

    }, []);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="text-white py-6 flex flex-col gap-y-3 bg-gray-900">
                <div className="flex px-3 flex-col items-center flex-1 md:px-20 lg:px-20 xl:px-20 2xl:px-20 text-left">
                    <h1 className="text-3xl font-bold">Saved</h1>
                    <p className="text-md">Here you can find all the saved items</p>
                </div>
            </div>
            {savedData.length > 0 && <button onClick={removeAllFromStorage}
                                             className="bg-red-500 mt-3 w-1/4 mx-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Remove All
            </button>}
            <div
                className="p-3 grid gap-4 w-full mb-6 justify-center items-center relative">
                {savedData.slice((currentPage - 1) * 9, currentPage * 9).map((data) => (
                    <Card key={data.NCTId[0]} maxW={"7xl"} cardData={data} removeFromSaved={removeFromSaved}/>
                ))}
            </div>

            {savedData.length > 0 &&
                <Pagination className="flex justify-center items-center pb-3" currentPage={currentPage}
                            onPageChange={handleChangePage} totalPages={totalPages}/>}
        </div>

    )
}
