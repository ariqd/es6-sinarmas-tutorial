// Ambil element
const skills = document.getElementById("skills");

// ES5

// ES6
const yourSkill = ["Web Design", "UX Design", "Video Editor"];

let parent = "<ul>";

yourSkill.forEach((skill) => {
  console.log(skill);
  parent += `<li>${skill}</li>`;
});

parent += "</ul>";

skills.innerHTML = parent;
