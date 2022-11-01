import SearchInput from "../components/SearchInput";
import Card from "../components/Card";

export default function SearchPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SearchInput />
            <div className="my-3 flex flex-col items-center justify-center flex-1 px-20 text-center text-white">
                <h1 className="text-5xl font-bold">Search Results</h1>
                <p className="mt-3 text-2xl">
                    9 results for <span className="font-bold">&quot;Data&quot;</span>
                </p>
            </div>
            <div
                className="py-3 flex flex-col gap-6 flex-wrap align items-center w-full justify-center mb-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
