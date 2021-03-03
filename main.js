// Ambil element
const skills = document.getElementById("skills");
const myPrimarySkillSpan = document.getElementById("primarySkill")

// ES6
const yourSkill = ["Web Design", "UX Design", "Video Editor"];

const printSkills = yourSkill.map((skill) => {
    return skill;
})

skills.innerHTML = printSkills

// Filter
const myPrimarySkill = yourSkill.filter((skill) => {
    return skill === "Video Editor"
    // return skill !== "UX Design"
})

console.log(myPrimarySkill)

myPrimarySkillSpan.innerHTML = myPrimarySkill;

// let parent = "<ul>";

// yourSkill.forEach((skill) => {
//   console.log(skill);
//   parent += `<li>${skill}</li>`;
// });

// parent += "</ul>";

// skills.innerHTML = parent;
