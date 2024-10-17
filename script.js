let counter = 0; 
let contacts = [];

const cellName = document.getElementById("cellName");
const cellTel = document.getElementById("cellTel");
const phoneBookList = document.getElementById("phoneBookList");
const contactList = document.getElementById("contactList");

function addRow() {
    const name = cellName.value;
    const tel = cellTel.value;

    if (!name || !tel) {
        alert("Please enter both name and phone number.");
        return;
    }

    counter += 1;

    const row = document.createElement("tr");

    const cellNo = document.createElement("td");
    const cellNameElement = document.createElement("td");
    const cellTelElement = document.createElement("td");

    cellNo.textContent = counter;  
    cellNameElement.textContent = name;
    cellTelElement.textContent = tel; 

    row.appendChild(cellNo);
    row.appendChild(cellNameElement);
    row.appendChild(cellTelElement);
    phoneBookList.appendChild(row);
    contacts.push({ name: name, phone: tel });
    cellName.value = "";
    cellTel.value = "";
    displayContacts();
}

function displayContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${index + 1}. ${contact.name} - ${contact.phone}`;
        contactList.appendChild(li);
    });
}

function saveCSV() {
    const csvContent = contacts.map(contact => `${contact.name},${contact.phone}`).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "contacts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function setUsername() {
    const input = document.getElementById("input");
    const username = document.getElementById("username");

    username.textContent = input.value;
    input.value = "";
}

function setImage() {
    const profileInput = document.getElementById("profileInput");
    const profile = document.getElementById("profile");

    profile.style.backgroundImage = "url(" + profileInput.value + ")";
    profileInput.value = "";
}