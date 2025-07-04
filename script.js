// Dati esempio dei colleghi
const colleagues = [
    {
        name: "Mario Rossi",
        role: "Sviluppatore",
        department: "Tecnologia",
        skills: ["JavaScript", "React", "Node.js"],
        hobbies: ["Videogiochi", "Lettura", "Cucina"],
        nickname: "Super Mario",
        catchphrase: "Codifica prima, mangia dopo!",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Luigi Bianchi",
        role: "Designer",
        department: "Design",
        skills: ["UI/UX", "Photoshop", "Illustrator"],
        hobbies: ["Fotografia", "Viaggi", "Cucina"],
        nickname: "Piccolo Luigi",
        catchphrase: "Design is life!",
        image: "https://via.placeholder.com/100"
    }
];

const colleaguesList = document.getElementById("colleagues-list");

// Funzione per caricare i colleghi
function loadColleagues() {
    colleaguesList.innerHTML = "";
    colleagues.forEach(colleague => {
        const colleagueCard = document.createElement("div");
        colleagueCard.classList.add("colleague-card");

        colleagueCard.innerHTML = `
            <img src="${colleague.image}" alt="${colleague.name}">
            <h3>${colleague.name}</h3>
            <p>${colleague.role}</p>
            <p>${colleague.description}</p>
        `;
        colleaguesList.appendChild(colleagueCard);
    });
}

// Funzione per filtrare i colleghi
function searchColleagues() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredColleagues = colleagues.filter(colleague => colleague.name.toLowerCase().includes(searchTerm));
    colleaguesList.innerHTML = "";
    filteredColleagues.forEach(colleague => {
        const colleagueCard = document.createElement("div");
        colleagueCard.classList.add("colleague-card");

        colleagueCard.innerHTML = `
            <img src="${colleague.image}" alt="${colleague.name}">
            <h3>${colleague.name}</h3>
            <p>${colleague.role}</p>
            <p>${colleague.description}</p>
        `;
        colleaguesList.appendChild(colleagueCard);
    });
}

// Carica inizialmente i colleghi
loadColleagues();
