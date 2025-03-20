// opdracht 1

const salesEmployees = "De afdeling Sales heeft" + " " + departments.sales.numberOfEmployees + " " + "medewerkers";
console.log(salesEmployees);

const descriptionMarketing = " Marketing is een leuke afdeling om te werken." + " " + departments.marketing.description + ".";
console.log(descriptionMarketing);

const customerServiceEmployees = "De afdeling Customer Service heeft" + " " + departments["customer-service"].numberOfEmployees + " " + "medewerkers.";
console.log(customerServiceEmployees);

const descriptionVerkoopmanager = "Sales is een uitdagende afdeling om te werken als verkoopmanager." + departments.sales.jobs[1]
console.log(descriptionVerkoopmanager);

// opdracht 2
const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
console.log(userInput);

const marketing = departments.marketing.description;
const sales = departments.sales.description;
const customerService = departments["customer-service"].description;

if (userInput === "marketing"){
    console.log("Je koos" + " " + userInput + " " + marketing);

}
else if (userInput === "sales"){
    console.log("Je koos" + " " + userInput + " " + sales);
}
else if (userInput === "customerService"){
    console.log("Je koos" + " " + userInput + " " + customerService);
}
else {
    console.error("Ongeldige keuze");
}

// //     opdracht 3

const job1 = departments.marketing.jobs[0].title;
const job2 = departments.marketing.jobs[1].title;
const job3 = departments.marketing.jobs[2].title;
const job4 = departments.marketing.jobs[3].title;


const description1 = departments.marketing.jobs[0].description;
const description2 = departments.marketing.jobs[1].description;
const description3 = departments.marketing.jobs[2].description;
const description4 = departments.marketing.jobs[3].description;


const userInputs = prompt("je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + "\n"
    + "\n" + 0 + ": " + job1 + "\n" + 1 + ": " + job2 + "\n" + 2 + ": " + job3 + "\n" + 3 + ": " + job4);


switch(userInputs){
    case "0":
        console.log("Je koos " + job1 + ". Een uitdagende rol! " + description1 );
        break;
    case "1":
        console.log("Je koos " + job2 + ". Een uitdagende rol! " + description2 );
        break;
    case "2":
        console.log("Je koos " + job3 + ". Een uitdagende rol! " + description3 );
        break;
    case "3":
        console.log("Je koos " + job4 + ". Een uitdagende rol! " + description4 );
        break;
    default:
        console.log("onjuiste keuze")
}

//  opdracht 4

const answer = {
    afdeeling: userInput,
    medewerkers: departments.marketing.numberOfEmployees
};

console.log(answer.afdeeling + " is een leuke afdeling om te werken. Er werken op dit moment " + answer.medewerkers + " medewerkers");

const obj = {
    titel: departments.marketing.jobs[0].title,
    employees: departments.marketing.numberOfEmployees,
};

const myVar = "titel";
const myVars = "employees"
console.log(obj[myVar] + " is een leuke afdeling om te werken. Er werken op dit moment " + obj[myVars] + " medewerkers.");




