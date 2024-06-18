import { useLoaderData } from "react-router-dom";
import DetailsTopSection from "../DetailsTopSection/DetailsTopSection";
import { useEffect, useState } from "react";
import { RemoveDataFromLs, getDataFromLs, saveDataToLs } from "../Utility/Utility";
import Job from "./Job";

const AppliedJobs = () => {

    const jobData = useLoaderData();
    console.log(jobData)
    const [appliedJobs, setAppliedJobs] = useState([]);



    useEffect(() => {
        const storedData = getDataFromLs();
        console.log(storedData)
        // if (jobData.length > 0) {
        //     const data = jobData.filter(job => storedData.includes(job.id))
        //     setAppliedJobs(data);
        // }

        const jobApplied = [];
        for (const id of storedData) {
            const job = jobData.find(job => job.id === id);
            console.log(job)
            if (job) {

                jobApplied.push(job)
            }
        }
        setAppliedJobs(jobApplied)
    }, [jobData])


    const handleRemoveBtn = (id) => {

        const storedData = getDataFromLs();
        // // console.log(storedData)

        const remaining = storedData.filter((jobId) => jobId !== id);
        console.log(remaining)
        // console.log(jobData)
        // saveDataToLs(remaining);

        const data = jobData.filter(job => (
            console.log('dsjf', job, remaining),
            job.id === remaining));
        console.log(data)

        setAppliedJobs(data);
        RemoveDataFromLs(id)


    }

    return (
        <div>
            <DetailsTopSection title={'Applied Jobs'}></DetailsTopSection>

            <div>
                {appliedJobs.map((job, i) => <Job key={i} job={job} handleRemoveBtn={handleRemoveBtn}></Job>)}
            </div>
        </div>
    )
}

export default AppliedJobs;