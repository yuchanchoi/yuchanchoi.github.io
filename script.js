const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project");

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.type}</p>
        <p>${project.tags.join(" • ")}</p>
    `;

    projectList.appendChild(card);
});
