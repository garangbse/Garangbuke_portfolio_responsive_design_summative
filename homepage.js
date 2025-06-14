const skills = document.getElementById("skills");
const skills_content = document.getElementById("skills_content");
const skills_content_button = document.getElementById("skills_content_button");
const homepage = document.getElementById("homepage_id");

// displays the skills box when pressed
skills.addEventListener("click",() => {
    skills_content.classList.add("show");
    homepage_id.style.height = "1095px";
    console.log("skills has been pressed");
});

// Closes the skills box when closed
skills_content_button.addEventListener("click",() => {
    skills_content.classList.remove("show")
    homepage_id.style.height = "822px"
    console.log("body has been pressed")
});
