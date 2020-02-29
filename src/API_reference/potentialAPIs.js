

const metroNashvilleAPIs = {
    "employees": {
        "titlesAndSalaries": {
            "mainUrl": "https://data.nashville.gov/General-Government/General-Government-Employees-Titles-and-Base-Annua/2hu7-5kjq",
            "dataJSON": "https://data.nashville.gov/resource/2hu7-5kjq.json",
            "dataKeys": ["name", "title", "department", "employment_status","annual"]
        },
        "generalDemographics": {

        },
        "councilMembers": {
            "mainUrl": "https://data.nashville.gov/Metro-Government/Metropolitan-Council-Members/54m3-iiq3",
            "dataJSON": "https://data.nashville.gov/resource/54m3-iiq3.json",
            "dataKeys": ["last_name", "first_name", "position", "district", "business_phone","business_address", "email_address"]
        }

    },
    "publicWorks":{
        "mainUrl": "https://data.nashville.gov/Public-Services/Metro-Public-Works-Capital-Projects/4bez-eha9",
        "dataJSON": "https://data.nashville.gov/resource/4bez-eha9.json",
        "dataKeys": "There are a bunch! See documentation."
    }
}
