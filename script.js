// Dati esempio dei colleghi
const colleagues = [
    {
        name: "Mario Rossi",
        role: "Sviluppatore",
        image: "https://www.example.com/mario.jpg",
        description: "Mario è un esperto sviluppatore web con una passione per React.js."
    },
    {
        name: "Luigi Bianchi",
        role: "Designer",
        image: "https://www.example.com/luigi.jpg",
        description: "Luigi è un designer creativo con un occhio per il dettaglio."
    },
    {
        name: "Anna Verdi",
        role: "Project Manager",
        image: "https://www.example.com/anna.jpg",
        description: "Anna è una project manager esperta nella gestione di team agili."
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
