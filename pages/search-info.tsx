import SearchInput from "../components/SearchInput";
import Card from "../components/Card";

export default function SearchPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SearchInput />
            <div
                className="flex flex-col gap-4 align items-center w-full justify-center mb-12 sm:flex-col md:flex-col lg:flex-col xl:flex-col">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
