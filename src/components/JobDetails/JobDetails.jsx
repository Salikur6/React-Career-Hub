import { useLoaderData, useParams } from "react-router-dom";
import DetailsTopSection from "../DetailsTopSection/DetailsTopSection";

const JobDetails = () => {
    const jobData = useLoaderData();
    const { id } = useParams()

    const jobIdData = jobData.find(job => job.id === parseInt(id));

    console.log(jobIdData)
    return (
        <div>
            <DetailsTopSection title={'Job Details'}></DetailsTopSection>

        </div>
    )
}

export default JobDetails;