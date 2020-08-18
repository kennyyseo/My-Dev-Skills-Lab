const skills = [
  { id: 1, skill: "Javascript", learned: true },
  { id: 2, skill: "Python", learned: false },
  { id: 3, skill: "MongoDB", learned: false },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}
