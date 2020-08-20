const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
};

function newSkill(req, res) {
  res.render("skills/new");
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    skillNum:
      Skill.getAll().findIndex(
        (skill) => skill.id === parseInt(req.params.id)
      ) + 1,
  });
}

function create(req, res) {
  console.log("req.body", req.body);
  Skill.create(req.body);
  res.redirect("/skills");
}
