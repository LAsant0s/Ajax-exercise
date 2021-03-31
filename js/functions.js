function loadPeople(sex) {
  const file = './json/people.json';
  const xhttp = new XMLHttpRequest(); 

  xhttp.onreadystatechange = () => {
    if (xhttp.status == 200 && xhttp.readyState == 4) {
        loadPeopleInfo(xhttp.responseText, sex);
    }
  }
  xhttp.open("GET", file, true);
  xhttp.send(); 
}

function loadPeopleInfo(peopleJson, sex) {
  const tbody = document.getElementById('tBody')
  let people = JSON.parse(peopleJson); 
  let filteredPeople;

  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }

  switch(sex) {
    case 'male':
      filteredPeople = people.filter(person => person.sex == 'M');
      break; 
    case 'female': 
      filteredPeople = people.filter(person => person.sex == 'F');
      break;
    case 'every':
      filteredPeople = people;
      break;
    default:
      filteredPeople = [];
  }
  filteredPeople.forEach(printPeopleData);
}

function printPeopleData(person) {
  const tbody = document.getElementById('tBody')
  let dataLine = document.createElement("tr"); 

  let nameLine = document.createElement("td");
  let ageLine = document.createElement("td");
  let sexLine = document.createElement("td");

  let name = document.createTextNode(person.name);
  let age = document.createTextNode(person.age);
  let sex = document.createTextNode(person.sex);

  nameLine.appendChild(name);
  ageLine.appendChild(age);
  sexLine.appendChild(sex);

  dataLine.appendChild(nameLine);
  dataLine.appendChild(ageLine);
  dataLine.appendChild(sexLine);

  tbody.appendChild(dataLine);
}