const skills = document.getElementById("skills");
const skills_content = document.getElementById("skills_content");
const skills_content_button = document.getElementById("skills_content_button");

skills.addEventListener("click",() => {skills_content.classList.add("show");
    console.log("skills has been pressed");
});
skills_content_button.addEventListener("click",() => {skills_content.classList.remove("show")
    console.log("body has been pressed")
});