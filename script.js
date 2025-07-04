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
    },
    // Aggiungi altri colleghi di esempio
];

const colleaguesList = document.getElementById("colleagues-list");

function loadColleagues() {
    colleaguesList.innerHTML = "";
    colleagues.forEach(colleague => {
        const colleagueCard = document.createElement("div");
        colleagueCard.classList.add("colleague-card");

        colleagueCard.innerHTML = `
            <img src="${colleague.image}" alt="${colleague.name}">
            <h3>${colleague.name}</h3>
            <p><strong>Ruolo:</strong> ${colleague.role}</p>
            <p><strong>Reparto:</strong> ${colleague.department}</p>
            <p><strong>Skills:</strong> ${colleague.skills.join(", ")}</p>
            <p><strong>Soprannome:</strong> ${colleague.nickname}</p>
            <p><strong>Frase tipica:</strong> "${colleague.catchphrase}"</p>
        `;
        colleaguesList.appendChild(colleagueCard);
    });
}

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
            <p><strong>Ruolo:</strong> ${colleague.role}</p>
            <p><strong>Reparto:</strong> ${colleague.department}</p>
            <p><strong>Skills:</strong> ${colleague.skills.join(", ")}</p>
            <p><strong>Soprannome:</strong> ${colleague.nickname}</p>
            <p><strong>Frase tipica:</strong> "${colleague.catchphrase}"</p>
        `;
        colleaguesList.appendChild(colleagueCard);
    });
}

function filterByDepartment() {
    const department = document.getElementById("department-filter").value;
    const filteredColleagues = department ? colleagues.filter(colleague => colleague.department === department) : colleagues;
    colleaguesList.innerHTML = "";
    filteredColleagues.forEach(colleague => {
        const colleagueCard = document.createElement("div");
        colleagueCard.classList.add("colleague-card");
        colleagueCard.innerHTML = `
            <img src="${colleague.image}" alt="${colleague.name}">
            <h3>${colleague.name}</h3>
            <p><strong>Ruolo:</strong> ${colleague.role}</p>
            <p><strong>Reparto:</strong> ${colleague.department}</p>
            <p><strong>Skills:</strong> ${colleague.skills.join(", ")}</p>
            <p><strong>Soprannome:</strong> ${colleague.nickname}</p>
            <p><strong>Frase tipica:</strong> "${colleague.catchphrase}"</p>
        `;
        colleaguesList.appendChild(colleagueCard);
    });
}

function filterBySkills() {
    const skillsTerm = document.getElementById("skills-filter").value.toLowerCase();
    const filteredColleagues = colleagues.filter(colleague => colleague.skills.some(skill => skill.toLowerCase().includes(skillsTerm)));
    colleaguesList.innerHTML = "";
    filteredColleagues.forEach(colleague => {
        const colleagueCard = document.createElement("div");
        colleagueCard.classList.add("colleague-card");
        colleagueCard.innerHTML = `
            <img src="${colleague.image}" alt="${colleague.name}">
            <h3>${colleague.name}</h3>
            <p><strong>Ruolo:</strong> ${colleague.role}</p>
            <p><strong>Reparto:</strong> ${colleague.department}</p>
            <p><strong>Skills:</strong> ${colleague.skills.join(", ")}</p>
            <p><strong>Soprannome:</strong> ${colleague.nickname}</p>
            <p><strong>Frase tipica:</strong> "${colleague.catchphrase}"</p>
        `;
        colleaguesList.appendChild(colleagueCard);
    });
}

function randomColleague() {
    const random = colleagues[Math.floor(Math.random() * colleagues.length)];
    alert(`Collega del giorno: ${random.name} - ${random.catchphrase}`);
}

loadColleagues();
