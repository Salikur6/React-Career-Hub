
const getDataFromLs = () => {
    const storedData = localStorage.getItem('jobId');

    if (storedData) {
        return JSON.parse(storedData);
    }
    return []
}
const saveDataToLs = (id) => {
    const storedJobId = getDataFromLs();
    console.log(storedJobId)
    const exists = storedJobId.find(jobId => jobId === id);
    console.log(exists)

    if (!exists) {
        storedJobId.push(id);
        localStorage.setItem('jobId', JSON.stringify(storedJobId))
    }
}

export { saveDataToLs, getDataFromLs };