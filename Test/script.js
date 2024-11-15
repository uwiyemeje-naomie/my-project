const skills = [
    "JavaScript",
    "Python",
    "SQL",
    "React",
    "Node.js",
    "Data Analysis",
    "Machine Learning",
    "APIs",
    "Git & Version Control"
];

// Array of projects relevant to your career
const projects = [
    {
        name: "Data Analysis Pipeline",
        description: "Developed an end-to-end data pipeline for real-time analytics using Python, SQL, and Tableau. Extracted insights to drive business decisions.",
        link: "https://example.com/data-analysis-project" // Replace with your project link if available
    },
    {
        name: "E-commerce Website",
        description: "Built a full-featured e-commerce website using React and Node.js, with secure payment integration, product management, and order tracking.",
        link: "https://example.com/ecommerce-project" // Replace with your project link if available
    }
];

/* Function to display skills*/ 
function displaySkills() {
    const skillsList = document.getElementById("skills-list");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// Function to display projects
function displayProjects() {
    const projectsList = document.getElementById("projects-list");
    projects.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project-card");

        const h3 = document.createElement("h3");
        h3.textContent = project.name;

        const p = document.createElement("p");
        p.textContent = project.description;

        const a = document.createElement("a");
        a.href = project.link;
        a.textContent = "View Project";
        a.target = "_blank";

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(a);
        projectsList.appendChild(div);
    });
}

// Call functions to populate data
displaySkills();
displayProjects();