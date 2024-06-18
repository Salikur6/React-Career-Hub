
const getDataFromLs = () => {
    const storedData = localStorage.getItem('jobId');

    if (storedData) {
        return JSON.parse(storedData);
    }
    return []
}

const saveDataToLs = (id) => {
    const storedJobId = getDataFromLs();
    const exists = storedJobId.find(jobId => jobId === id);
    console.log(exists)

    if (!exists) {
        storedJobId.push(id);
        localStorage.setItem('jobId', JSON.stringify(storedJobId))
    }
    console.log(storedJobId)

}


const RemoveDataFromLs = (id) => {

    const storedData = getDataFromLs();


    const remaining = storedData.filter((jobId) => jobId !== id);

    // saveDataToLs(remaining);
    localStorage.setItem('jobId', JSON.stringify(remaining))


}


export { saveDataToLs, getDataFromLs, RemoveDataFromLs };