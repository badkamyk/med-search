import {Label, TextInput, Button} from "flowbite-react";

export default function MainForm() {
    return (
        <form className="flex flex-col gap-4 align items-center pt-5 ml-3 w-full justify-center mb-12 sm:flex-row md:flex-row lg:flex-row xl:flex-row">
            <div>
                {/*<div className="mb-2 block">*/}
                {/*    <Label*/}
                {/*        htmlFor="phrase"*/}
                {/*        value="Search phrase"*/}
                {/*    />*/}
                {/*</div>*/}
                <TextInput
                    sizing="lg"
                    className={"sm:w-96"}
                    id="phrase"
                    type="name"
                    placeholder="Type in desirable phrase"
                    // required={true}
                />
            </div>
            <Button type="submit"
            size={"xl"}>
                Submit
            </Button>
        </form>
    )
}
