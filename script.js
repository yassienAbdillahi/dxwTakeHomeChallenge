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





//now to create autocomplete functionality
let userTyped = document.getElementById("userInput");
let dropdown = document.getElementById("acros")

userTyped.addEventListener("keyup", addDropdownOptions);

function addDropdownOptions () {

    //first clear the paragraph in case a previous search has already been done
    document.getElementById("fullOrgName").innerHTML = "";

    //get the letter(s) the user typed
    lettersTyped = userTyped.value;
    console.log(lettersTyped);

    //remove existing dropdown from previous searches
    removeAllChildNodes(dropdown);

    //call different fns based on the number of letters typed so far
    switch(lettersTyped.length){
        case 1:
        dropdownOne(lettersTyped);
        break;
        case 2:
        dropdownTwo(lettersTyped);
        break;
        case 3:
        dropdownThree(lettersTyped);
        break;
        case 4:
        dropdownFour(lettersTyped);
        break;
        case 5:
        dropdownFive(lettersTyped);
        break;
        default:
        console.log("No letters typed yet")
        }
    
    
}
    
    
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
    
function dropdownOne(lettersTyped) {
    console.log("One letter typed so far");
    
    /*to deal with case sensitivity since the first letter is always upper case 
    in the original object*/
    let transformedLettersTyped = lettersTyped.toUpperCase();
    
    /*loop through all the properties of the original object and check if
    the first letter matches that which the user typed. If it does, add that 
    property in the dropdown list*/
    
    for (let x in acronymOrganisationPairs) {
    
        if (transformedLettersTyped[0] === x[0]) {
            console.log(x);
    
            //create a html option element for the property
            const optionToBeAdded = document.createElement("option");
    
            //write into it
            optionToBeAdded.innerHTML = x;

            //now add it to the dropdown
            dropdown.appendChild(optionToBeAdded);

            //make the option clickable; it should write into the searchbar when clicked
            optionToBeAdded.addEventListener("click", autoFillSearchbar)
        }

    }



}

function dropdownTwo(lettersTyped) {
    console.log("Two letters typed so far");

    /*to deal with case sensitivity (my if condition will compare using 
    the transformed object's properties instead*/
    let transformedLettersTyped = lettersTyped.toUpperCase();

    for (let x in transformedObject) {

        if(
            transformedLettersTyped[0] === x[0] && transformedLettersTyped[1] === x[1]
        ) {

            console.log(x);

            //create a html option element for the property
            const optionToBeAdded = document.createElement("option");

            //write into it
            optionToBeAdded.innerHTML = x;

            //now add it to the dropdown
            dropdown.appendChild(optionToBeAdded);

            //make the option clickable; it should write into the searchbar when clicked
            optionToBeAdded.addEventListener("click", autoFillSearchbar)
        }

    }


}

function dropdownThree(lettersTyped) {
    console.log("Three letters typed so far");

    /*to deal with case sensitivity (my if condition will compare using 
    the transformed object's properties instead*/
    let transformedLettersTyped = lettersTyped.toUpperCase();

    for (let x in transformedObject) {

        if(
            transformedLettersTyped[0] === x[0] && transformedLettersTyped[1] === x[1] &&
            transformedLettersTyped[2] === x[2]
        ) {

            console.log(x);

            //create a html option element for the property
            const optionToBeAdded = document.createElement("option");

            //write into it
            optionToBeAdded.innerHTML = x;

            //now add it to the dropdown
            dropdown.appendChild(optionToBeAdded);

            //make the option clickable; it should write into the searchbar when clicked
            optionToBeAdded.addEventListener("click", autoFillSearchbar)
        }

    }


}

function dropdownFour(lettersTyped) {
    console.log("Four letters typed so far");

    /*to deal with case sensitivity (my if condition will compare using 
    the transformed object's properties instead*/
    let transformedLettersTyped = lettersTyped.toUpperCase();


    for (let x in transformedObject) {

        if(
            transformedLettersTyped[0] === x[0] && transformedLettersTyped[1] === x[1] &&
            transformedLettersTyped[2] === x[2] && transformedLettersTyped[3] === x[3]
        ) {

            console.log(x);

            //create a html option element for the property
            const optionToBeAdded = document.createElement("option");

            //write into it
            optionToBeAdded.innerHTML = x;

            //now add it to the dropdown
            dropdown.appendChild(optionToBeAdded);

            //make the option clickable; it should write into the searchbar when clicked
            optionToBeAdded.addEventListener("click", autoFillSearchbar)
        }

    }



}

function dropdownFive(lettersTyped) {
    console.log("Five letters typed");

    /*to deal with case sensitivity (my if condition will compare using 
    the transformed object's properties instead*/
    let transformedLettersTyped = lettersTyped.toUpperCase();


    for (let x in transformedObject) {

        if(
            transformedLettersTyped[0] === x[0] && transformedLettersTyped[1] === x[1] &&
            transformedLettersTyped[2] === x[2] && transformedLettersTyped[3] === x[3] &&
            transformedLettersTyped[4] === x[4]
        ) {

            console.log(x);

            //create a html option element for the property
            const optionToBeAdded = document.createElement("option");

            //write into it
            optionToBeAdded.innerHTML = x;

            //now add it to the dropdown
            dropdown.appendChild(optionToBeAdded);

            //make the option clickable; it should write into the searchbar when clicked
            optionToBeAdded.addEventListener("click", autoFillSearchbar)
        }

    }




}

function autoFillSearchbar() {

    document.getElementById("userInput").value = this.value;

}







//now to deal with the actual checking of the user input
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
       whereToDisplayResultIfFound.innerHTML = `The full organisation name associated with that acronym is <span class="bold-red">'${transformedObject[transformedUserSearchedFor]}'</span>.`;
    }

    else {
        alert ("Sorry, no such acronym exists. Please try again using different letters");
    }
}