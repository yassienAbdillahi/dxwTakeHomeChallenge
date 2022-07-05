const acronymOrganisationPairs = {
    "AGO": "Attorney General's Office",
    "APA": "Asset Protection Agency",
    "BIS": "Department for Business, Innovation and Skills",
    "BEIS": "Department for Business, Energy and Industrial Strategy",
    "CO": "Cabinet Office",
    "CxD": "Chancellor's Departments (APA, DMO, GAD, HMRC, HMT, NS&I, OBR)",
    "DCLG": "Department for Communities and Local Government",
    "DCMS": "Department for Digital, Culture, Media and Sport",
    "DECC": "Department of Energy and Climate Change",
    "Defra": "Department for Environment, Food and Rural Affairs",
    "DE&S": "Defence Equipment and Support (part of MoD)",
    "DExEU": "Department for Exiting the European Union",
    "DfE": "Department for Education",
    "DfID": "Department for International Development",
    "DfT": "Department for Transport",
    "DH": "Department of Health",
    "DHSC": "Department of Health and Social Care",
    "DMO": "Debt Management Office",
    "DPM": "Deputy Prime Minister",
    "DVLA": "Driver and Vehicle Licensing Agency (part of DfT)",
    "DWP": "Department for Work and Pensions",
    "ERG": "Efficiency and Reform Group (part of CO)",
    "FCO": "Foreign and Commonwealth Office",
    "GAD": "Government Actuary's Department",
    "GDS": "Government Digital Service",
    "HCS": "Home Civil Service (all civil servants in UK, Scottish and Welsh governments)",
    "HMRC": "Her Majesty's Revenue and Customs",
    "HMT": "Her Majesty's Treasury",
    "HO": "Home Office",
    "HofC": "House of Commons",
    "HofL": "House of Lords",
    "IPA": "Infrastructure and Projects Authority",
    "Law": "Law officers (AGO, Office of the Advocate General for Scotland)",
    "MHCLG": "MInistry of Housing, Communities and Local Government",
    "MoD": "Ministry of Defence",
    "MoJ": "Ministry for Justice",
    "MPA": "Major Projects Authority (part of CO)",
    "NAO": "National Audit Office",
    "NHS": "National Health Service",
    "NICS": "Northern Ireland Civil Service",
    "NIO": "Northern Ireland Office",
    "NS&I": "National Savings and Investments",
    "OBR": "Office for Budget Responsibility",
    "ONS": "Office for National Statistics",
    "PM": "Prime Minister",
    "Scot": "Scotland Office",
    "SG": "Scottish Government",
    "Wal": "Wales Office",
    "WG": "Welsh Government"
}; 

/*Because of the possibility of the user submitting an acronym in the wrong mix 
of lower and upper case eg hmrc instead of HMRC or HOFC instead of HofC, I can't 
just use an if condition like:
acronymOrganisationPairs.hasOwnProperty(userSearchedFor) == true
Since none of the acronyms only differ by case (eg hMrc vs HMRC)
I can just create a new object with all the keys of the first changed to upper case
then later when I get the input from the user, I can change that to upper too*/

const transformedObject = {};

//loop through the original object to get the keys and values for the new one
for (let x in acronymOrganisationPairs) {
    let changedKey = x.toUpperCase();
    transformedObject[changedKey] = acronymOrganisationPairs[x];
}

console.log(transformedObject);


const form = document.getElementById("form1");

form.addEventListener("submit", handleSearch);

function handleSearch(event) {
    event.preventDefault();



    let userSearchedFor = document.getElementById("userInput").value;

    console.log(userSearchedFor);

    let transformedUserSearchedFor = userSearchedFor.toUpperCase();
    console.log(transformedUserSearchedFor);

    let whereToDisplayResultIfFound = document.getElementById("fullOrgName");

    //first clear the paragraph in case a previous search has already been done
    whereToDisplayResultIfFound.innerHTML = "";

    if (
       transformedObject.hasOwnProperty(transformedUserSearchedFor) == true
    ) {
        whereToDisplayResultIfFound.innerHTML = `You searched for '${userSearchedFor}'.<br><br>The full organisation name associated with that acronym is <span class="bold-red">'${transformedObject[transformedUserSearchedFor]}'</span>.`;
    }

    else {
        alert ("Sorry, no such acronym exists. Please try again using different letters");
    }
}