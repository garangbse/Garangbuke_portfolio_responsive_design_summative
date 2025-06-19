const skills = document.getElementById("skills");
const projects = document.getElementById("projects_title");
const projects_link = document.getElementById("projects_link");
const skills_content = document.getElementById("skills_content");
const skills_content_button = document.getElementById("skills_content_button");


// displays the skills box when pressed
skills.addEventListener("click",() => {
    skills_content.classList.add("show");

});

// Closes the skills box when closed
skills_content_button.addEventListener("click",() => {
    skills_content.classList.remove("show")

});

projects_link.addEventListener("click", function () {
  projects.scrollIntoView({ behavior: "smooth" });
});
