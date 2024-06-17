import { useLoaderData, useParams } from "react-router-dom";
import DetailsTopSection from "../DetailsTopSection/DetailsTopSection";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSubtitles } from "react-icons/md";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDataToLs } from "../Utility/Utility";

const JobDetails = () => {
    const jobData = useLoaderData();
    const { id } = useParams()
    const intId = parseInt(id)
    const jobIdData = jobData.find(job => job.id === intId);

    console.log(jobIdData)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = jobIdData;

    const { phone, email, address } = contact_information;

    const handleApplyJob = () => {
        saveDataToLs(intId);
        toast('You have successfully Applied')
    }

    console.log(contact_information)
    return (
        <div className="mb-24">
            <DetailsTopSection title={'Job Details'}></DetailsTopSection>
            <div className="container mx-auto grid-cols-1 grid gap-4 md:grid-cols-5 lg:grid-cols-6">

                <div className="col-span-1 md:col-span-3 lg:col-span-4">
                    <h3 className="font-bold text-[#1A1919] mb-6">Job Description: <span className="font-semibold text-[#757575]">{job_description}</span></h3>
                    <h3 className="font-bold text-[#1A1919] mb-6">Job Responsibility: <span className="font-semibold text-[#757575]">{job_responsibility}</span></h3>

                    <div className=" mb-6">
                        <h3 className="font-bold text-[#1A1919] mb-4">Education Requirements: </h3>
                        <p>
                            <span className="font-semibold text-[#757575]">{educational_requirements}</span>
                        </p>
                    </div>

                    <div className=" mb-6">
                        <h3 className="font-bold text-[#1A1919] mb-4">Experiences: </h3>
                        <p>
                            <span className="font-semibold text-[#757575]">{experiences}</span>
                        </p></div>
                </div>

                <div className="lg:col-span-2 md:col-span-2">
                    <div className="bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a]  p-7 mb-6">
                        <div className="mb-8">
                            <h4 className="text-xl font-bold mb-6">Job Details</h4>
                            <hr className="w-6/7 mx-auto mb-6" />

                            <p className="flex items-center text-lg lg:text-xl font-bold text-[#474747] mb-4"> <RiMoneyDollarCircleLine className="text-2xl mr-2 text-[#9873FF]" /> Salary : <span className="text-[#757575] font-semibold">{salary}</span></p>

                            <p className="flex items-center text-lg lg:text-xl font-bold text-[#474747]">
                                <MdOutlineSubtitles className="text-2xl mr-2 text-[#9873FF]" />
                                Job Title :  <span className="text-[#757575] font-semibold"> {job_title}</span>
                            </p>
                        </div>

                        <div className="text-xl font-bold mb-6">

                            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
                            <hr className="w-6/7 mx-auto mb-6" />
                            <p className="mb-4 text-lg lg:text-xl font-bold text-[#474747]">Phone : <span className="text-[#757575] font-semibold">{phone}</span></p>

                            <p className="mb-4 text-lg lg:text-xl font-bold text-[#474747]">Email : <span className="text-[#757575] font-semibold">{email}</span></p>

                            <p className="mb-4 text-lg lg:text-xl font-bold text-[#474747]">Address : <span className="text-[#757575] font-semibold">{address}</span></p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleApplyJob(id)} className={'w-full text-xl font-bold text-white btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'}>Apply Now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JobDetails;