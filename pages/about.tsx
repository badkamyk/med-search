import Hero from "../components/Hero";
import Head from "next/head";
import Accordion from "../components/Accordion";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
        <div className="text-white py-6 flex flex-col gap-y-3 bg-gray-900">
            <Head>
                <title>About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className="flex px-3 flex-col items-center flex-1 md:px-20 lg:px-20 xl:px-20 2xl:px-20 text-left">
                <h1 className="text-6xl font-bold">About</h1>
                <p className="mt-6 text-2xl w-full lg:w-1/2" >
                    This is a project made by <a href="#"
                                                 className="text-blue-500 hover:text-blue-600">Kamyk</a>. It&apos;s meant
                    to be a simple way to search for information on pubmed without scrolling through hundreds of pages.
                    If you really wanna dig deep into the research - do that on your own. Use this website to get the information prepared in a &quot;compact&quot; way.
                </p>
                <p className="mt-9 text-2xl lg:w-1/2"><a className="text-blue-500 hover:text-blue-600" href="https://pubmed.ncbi.nlm.nih.gov/">PubMed</a> is a free search engine accessing primarily the MEDLINE database of references and abstracts on life sciences and biomedical topics. The United States National Library of Medicine (NLM) at the National Institutes of Health maintain the database as part of the Entrez system of information retrieval.</p>
            </div>
            <Accordion/>
        </div>
        </div>
    )
}
