const skills = [
  { id: 1, skill: "Javascript", learned: true },
  { id: 2, skill: "Python", learned: false },
  { id: 3, skill: "MongoDB", learned: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 10000000;
  skill.learned = false;
  skills.push(skill);
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === parseInt(id));
}
