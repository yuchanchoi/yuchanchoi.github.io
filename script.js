const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const card = document.createElement("a");

    card.classList.add("project");
    card.href = project.page;

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.type}</p>
        <p>${project.tags.join(" • ")}</p>
    `;

    projectList.appendChild(card);
});
