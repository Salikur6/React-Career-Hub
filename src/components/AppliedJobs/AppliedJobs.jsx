import { useLoaderData } from "react-router-dom";
import DetailsTopSection from "../DetailsTopSection/DetailsTopSection";
import { useEffect, useState } from "react";
import { getDataFromLs } from "../Utility/Utility";
import Job from "./Job";

const AppliedJobs = () => {

    const jobData = useLoaderData();
    console.log(jobData)
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedData = getDataFromLs();
        console.log(storedData)
        if (jobData.length > 0) {

            const data = jobData.filter(job => storedData.includes(job.id))
            setAppliedJobs(data);
        }
    }, [jobData])
    return (
        <div>
            <DetailsTopSection title={'Applied Jobs'}></DetailsTopSection>

            <div>
                {appliedJobs.map(job => <Job key={job.id} job={job}></Job>)}
            </div>
        </div>
    )
}

export default AppliedJobs;