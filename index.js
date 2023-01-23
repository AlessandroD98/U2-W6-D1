let SaveButton = document.getElementById("SaveButton");
let InputName = document.getElementById("InputName");
let InputSurname = document.getElementById("InputSurname");
let InputBday = document.getElementById("InputBday");

const User = function (name, surname, Bday) {
  this.name = name;
  this.surname = surname;
  this.Bday = Bday;
};

let currentUser = new User();

let table = document.getElementById("table");

SaveButton.addEventListener("click", () => {
  let newrow = document.createElement("tr");
  let Namecell = document.createElement("td");
  Namecell.innerHTML = InputName.value;
  let Surnamecell = document.createElement("td");
  Surnamecell.innerHTML = InputSurname.value;
  let Bdaycell = document.createElement("td");
  Bdaycell.innerHTML = InputBday.value;

  newrow.appendChild(Namecell);
  newrow.appendChild(Surnamecell);
  newrow.appendChild(Bdaycell);

  table.appendChild(newrow);
});
