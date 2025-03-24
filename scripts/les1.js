// opdracht 1

const salesEmployees = "De afdeling sales heeft" + departments.sales.numberOfEmployees + "aantal medewerkers";
console.log(salesEmployees);

const descriptionMarketing = " Marketing is een leuke afdeling om te werken." + " " + departments.marketing.description + ".";
console.log(descriptionMarketing);

const customerServiceEmployees = "De afdeling Customer Service heeft" + " " + departments["customer-service"].numberOfEmployees + " " + "medewerkers.";
console.log(customerServiceEmployees);

const descriptionVerkoopmanager = "Sales is een uitdagende afdeling om te werken als verkoopmanager." + departments.sales.jobs[1]
console.log(descriptionVerkoopmanager);

// opdracht 2
const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
// console.log(userInput);

const marketing = departments.marketing.description;
const sales = departments.sales.description;
const customerService = departments["customer-service"].description;

if (userInput === "marketing") {
    console.log("Je koos" + " " + userInput + " " + marketing);
} else if (userInput === "sales") {
    console.log("Je koos" + " " + userInput + " " + sales);
} else if (userInput === "customerService") {
    console.log("Je koos" + " " + userInput + " " + customerService);
} else {
    console.error("Ongeldige keuze");
}

// //     opdracht 3

const job1 = departments.marketing.jobs[0].title;
const job2 = departments.marketing.jobs[1].title;
const job3 = departments.marketing.jobs[2].title;
const job4 = departments.marketing.jobs[3].title;

const job5 = departments.sales.jobs[0].title;
const job6 = departments.sales.jobs[1].title;
const job7 = departments.sales.jobs[2].title;
const job8 = departments.sales.jobs[3].title;

const description5 = departments.sales.jobs[0].description
const description6 = departments.sales.jobs[1].description
const description7 = departments.sales.jobs[2].description
const description8 = departments.sales.jobs[3].description

const description1 = departments.marketing.jobs[0].description;
const description2 = departments.marketing.jobs[1].description;
const description3 = departments.marketing.jobs[2].description;
const description4 = departments.marketing.jobs[3].description;


const choise1 = prompt("je koos " + userInput + ". Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + "\n"
    + "\n" + 0 + ": " + job1 + "\n" + 1 + ": " + job2 + "\n" + 2 + ": " + job3 + "\n" + 3 + ": " + job4);


switch (choise1 === "marketing") {
    case "0":
        console.log("Je koos " + job1 + ". Een uitdagende rol! " + description1);
        break;
    case "1":
        console.log("Je koos " + job2 + ". Een uitdagende rol! " + description2);
        break;
    case "2":
        console.log("Je koos " + job3 + ". Een uitdagende rol! " + description3);
        break;
    case "3":
        console.log("Je koos " + job4 + ". Een uitdagende rol! " + description4);
        break;
    default:
        console.log("onjuiste keuze")
}

// //  opdracht 4

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


document.getElementById('role-title').textContent = 'marketingmanager';
document.getElementById('department-description').textContent = 'Marketing omvat verschillende strategieën en activiteiten gericht op het promoten van\n' +
    '        producten, diensten of merken bij het doelpubliek. Het omvat het begrijpen van de behoeften en voorkeuren van\n' +
    '        consumenten, het uitvoeren van marktonderzoek, het ontwikkelen van marketingplannen en het implementeren van\n' +
    '        tactieken om potentiële klanten te bereiken en te betrekken. Marketingprofessionals analyseren markttrends,\n' +
    '        identificeren doelmarkten en creëren overtuigende boodschappen en communicatiestrategieën om merkbekendheid op\n' +
    '        te bouwen, klantenwerving te stimuleren en klantloyaliteit te bevorderen';
document.getElementById('role-description').textContent = '>De marketingmanager is verantwoordelijk voor het ontwikkelen en implementeren van\n' +
    '        marketingstrategieën om de producten of diensten van een bedrijf te promoten. Ze houden toezicht op\n' +
    '        marktonderzoek, reclamecampagnes en initiatieven voor klantenwerving. Ze analyseren markttrends, identificeren\n' +
    '        doelgroepen en werken samen met interdisciplinaire teams om marketingdoelen te bereiken en bedrijfsgroei te\n' +
    '        stimuleren.';
