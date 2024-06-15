import { useEffect, useState } from "react";
import SectionTitles from "../SectionTitles/SectionTitles";
import Feature from "../Feature/Feature";

const Features = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className="container mx-auto mb-24  p-4 md:px-0">
            <SectionTitles title='Featured Jobs' subtitle='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitles>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    features.map(feature => <Feature feature={feature} key={feature.id}></Feature>)
                }
            </div>

            <div className="flex justify-center">
                <button className="text-xl font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
            </div>
        </div>
    )
}

export default Features;