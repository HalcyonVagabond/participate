

const nashvilleAPImodule = {
    "getEmployees":{
        getCouncilMembers(){
            const url = "https://data.nashville.gov/resource/54m3-iiq3.json"
            return fetch(url).then(resp=>resp.json())
        },
        getEmployeesByTitle(title){
            const url = `https://data.nashville.gov/resource/2hu7-5kjq.json?$where=starts_with(title, '${title}')`

            // Note: Titles are stored with first letter of each word capitalized
            return fetch(url).then(resp=>resp.json())
        }
    }
}



export default nashvilleAPImodule;