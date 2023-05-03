import Link from "next/link";
import {useRouter} from "next/router";
import {useGetSpikeQuery} from "codac-administration";
import Header from "../projects/components/Header";
import Sidebar from "../projects/components/Sidebar";
import Project from "../projects/components/Project";


export default function Projects() {
    const PAGE_TITLE = 'Spike';
    const router = useRouter()
    const {id} = router.query
    const {data} = useGetSpikeQuery({
        variables: {
            id
        },
    });

    console.log(data)
    console.log("spike", data?.spike);
    return (
        <div className="container">
            <Header title={PAGE_TITLE}/>
            <main className="flex w-screen justify-center items-center pt-8">
                <a
                    href="#"
                    className="block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                    <h2 className="ui-text-xl font-extrabold dark:text-white">
                        {data?.spike?.data?.attributes?.title}
                    </h2>
                    <p className="my-4 text-gray-500">Start developing with an open-source library of over 450+
                        UI components, sections, and pages built with the utility classes from Tailwind CSS and designed
                        in Figma.</p>
                    <p className="mb-4 font-normal text-gray-500 dark:text-gray-400">Deliver great service
                        experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical
                        development work, eliminate toil, and deploy changes with ease.</p>

                </a>
            </main>
        </div>
    )
}