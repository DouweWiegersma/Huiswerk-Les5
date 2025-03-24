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
console.log(userInput);

const marketing = departments.marketing.description;
const sales = departments.sales.description;
const customerService = departments["customer-service"].description;

const job1 = departments.marketing.jobs[0].title;
const job2 = departments.marketing.jobs[1].title;
const job3 = departments.marketing.jobs[2].title;
const job4 = departments.marketing.jobs[3].title;

const job5 = departments.sales.jobs[0].title;
const job6 = departments.sales.jobs[1].title;
const job7 = departments.sales.jobs[2].title;
const job8 = departments.sales.jobs[3].title;

const job9 = departments["customer-service"].jobs[0].title
const job10 = departments["customer-service"].jobs[1].title
const job11 = departments["customer-service"].jobs[2].title
const job12 = departments["customer-service"].jobs[3].title

const description9 = departments["customer-service"].jobs[0].description
const description10 = departments["customer-service"].jobs[1].description
const description11 = departments["customer-service"].jobs[2].description
const description12 = departments["customer-service"].jobs[3].description

const description5 = departments.sales.jobs[0].description
const description6 = departments.sales.jobs[1].description
const description7 = departments.sales.jobs[2].description
const description8 = departments.sales.jobs[3].description

const description1 = departments.marketing.jobs[0].description;
const description2 = departments.marketing.jobs[1].description;
const description3 = departments.marketing.jobs[2].description;
const description4 = departments.marketing.jobs[3].description;


if (userInput === "marketing") {
    userInput2 = prompt("je koos " + userInput + ". Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + "\n"
        + "\n" + 0 + ": " + job1 + "\n" + 1 + ": " + job2 + "\n" + 2 + ": " + job3 + "\n" + 3 + ": " + job4);
    console.log("Je koos" + " " + userInput + " " + marketing);
}
else if (userInput === "sales") {
    userInput2 = prompt("je koos " + userInput + ". Over welke functie wil je meer weten? Voer een getal tussen 4 en 7 in." + "\n"
        + "\n" + 4 + ": " + job5 + "\n" + 5 + ": " + job6 + "\n" + 6 + ": " + job7 + "\n" + 7 + ": " + job8);
    console.log("Je koos" + " " + userInput + " " + sales);
}
else if (userInput === "customer-service") {
    userInput2 = prompt("je koos " + userInput + ". Over welke functie wil je meer weten? Voer een getal tussen 7 en 11 in." + "\n"
        + "\n" + 8 + ": " + job9 + "\n" + 9 + ": " + job10 + "\n" + 10 + ": " + job11 + "\n" + 11 + ": " + job12);
    console.log("Je koos" + " " + userInput + " " + customerService);
}
else {
    document.getElementById('error-message').textContent = 'Onjuiste keuze!!';
    console.error("Ongeldige keuze");
}

// //     opdracht 3

switch (userInput2) {
    case "0":
        document.getElementById('role-title').textContent = job1;
        document.getElementById('department-description').textContent = marketing;
        document.getElementById('role-description').textContent = description1;
        console.log("Je koos " + job1 + ". Een uitdagende rol! " + description1);
        break;
    case "1":
        document.getElementById('role-title').textContent = job2;
        document.getElementById('department-description').textContent = marketing;
        document.getElementById('role-description').textContent = description2;
        console.log("Je koos " + job2 + ". Een uitdagende rol! " + description2);
        break;
    case "2":
        document.getElementById('role-title').textContent = job3;
        document.getElementById('department-description').textContent = marketing;
        document.getElementById('role-description').textContent = description3;
        console.log("Je koos " + job3 + ". Een uitdagende rol! " + description3);
        break;
    case "3":
        document.getElementById('role-title').textContent = job4;
        document.getElementById('department-description').textContent = marketing;
        document.getElementById('role-description').textContent = description4;
        console.log("Je koos " + job4 + ". Een uitdagende rol! " + description4);
        break;
    case "4":
        document.getElementById('role-title').textContent = job5;
        document.getElementById('department-description').textContent = sales;
        document.getElementById('role-description').textContent = description5;
        console.log("je koos " + job5 + ". Een uitdagende rol! " + description5);
        break;
    case "5":
        document.getElementById('role-title').textContent = job6;
        document.getElementById('department-description').textContent = sales;
        document.getElementById('role-description').textContent = description6;
        console.log("Je koos " + job6 + ". Een uitdagende rol! " + description6);
            break;
    case "6":
        document.getElementById('role-title').textContent = job7;
        document.getElementById('department-description').textContent = sales;
        document.getElementById('role-description').textContent = description7;
        console.log("Je koos " + job7 + ". Een uitdagende rol! " + description7);
            break;
    case "7":
        document.getElementById('role-title').textContent = job8;
        document.getElementById('department-description').textContent = sales;
        document.getElementById('role-description').textContent = description8;
        console.log("Je koos " + job8 + ". Een uitdagende rol! " + description8);
            break;
    case "8":
        document.getElementById('role-title').textContent = job9;
        document.getElementById('department-description').textContent = customerService;
        document.getElementById('role-description').textContent = description9;
        console.log("Je koos " + job9 + ". Een uitdagende rol! " + description9);
        break;
    case "9":
        document.getElementById('role-title').textContent = job10;
        document.getElementById('department-description').textContent = customerService;
        document.getElementById('role-description').textContent = description10;
        console.log("Je koos " + job10 + ". Een uitdagende rol! " + description10);
        break;
    case "10":
        document.getElementById('role-title').textContent = job11;
        document.getElementById('department-description').textContent = customerService;
        document.getElementById('role-description').textContent = description11;
        console.log("Je koos " + job11 + ". Een uitdagende rol! " + description11);
        break;
    case "11":
        document.getElementById('role-title').textContent = job12;
        document.getElementById('department-description').textContent = customerService;
        document.getElementById('role-description').textContent = description12;
        console.log("Je koos " + job8 + ". Een uitdagende rol! " + description12);
        break;
    default:
        document.getElementById('error-message').textContent = 'Onjuiste keuze!!';
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




