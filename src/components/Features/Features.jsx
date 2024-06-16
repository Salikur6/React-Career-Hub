import { useEffect, useState } from "react";
import SectionTitles from "../SectionTitles/SectionTitles";
import Feature from "../Feature/Feature";

const Features = () => {

    const [features, setFeatures] = useState([]);

    const [dataLength, setDataLenght] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    //     const  handleAllData = () =>{
    // setDataLenght()
    //     }
    return (
        <div className="container mx-auto mb-24  p-4 md:px-0">
            <SectionTitles title='Featured Jobs' subtitle='Explore thousands of job opportunities with all the information you need. Its your future'></SectionTitles>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    features.slice(0, dataLength).map(feature => <Feature feature={feature} key={feature.id}></Feature>)
                }
            </div>

            {/* <div className={'flex justify-center'}>
                <button onClick={() => setDataLenght(features.length)}

                    className={dataLength > 4 ? 'hidden' : 'text-xl font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'}
                >See All Jobs</button>

                <button onClick={() => setDataLenght(dataLength)} className={dataLength < 4 ? 'text-xl font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]' : 'hidden'}>See Less Jobs</button>
            </div> */}



            <div className={'flex justify-center'}>

                {dataLength === 4 ? <button onClick={() => setDataLenght(features.length)}

                    className={'text-xl font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'}
                >Show All Jobs</button> :

                    <button onClick={() => setDataLenght(4)} className={'text-xl font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'}>Show Less Jobs</button>
                }



            </div>
        </div>
    )
}

export default Features;