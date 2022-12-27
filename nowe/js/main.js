let nextID = 1;

function incrementID() {
  return nextID++;
}
class Person {
  constructor(squat, bench, deadlift) {
    if (typeof squat !== 'number') {
      throw new Error('Squat must be a number!');
    }
    if (typeof bench !== 'number') {
      throw new Error('Bench must be a number!');
    }
    if (typeof deadlift !== 'number') {
      throw new Error('Deadlift must be a number!');
    }
    this.lifterID = incrementID();
    this.squat = squat;
    this.bench = bench;
    this.deadlift = deadlift;
    this.total = this.calculateTotal();
  }
  calculateTotal() {
    return this.squat + this.bench + this.deadlift;
  }
}

function addPerson(list, newPerson) {
  list.push(newPerson);
  return list;
}

function deletePerson(list, lifterId) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].lifter === lifterId) {
      list.splice(i, 1);
      break;
    }
  }
  return list;
}

function editPerson(list, editedPerson) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].lifter === editedPerson.lifter) {
      list[i] = editedPerson;
      return list[i];
    }
  }
}

function sortPeople(people, field, ascending) {
  return people.sort((a, b) => {
    if (ascending) {
      return a[field] > b[field] ? 1 : -1;
    } else {
      return a[field] < b[field] ? 1 : -1;
    }
  });
}

const newList = [];
let newPerson1 = new Person(220,140,160);
let newPerson2 = new Person(240,150,170);
addPerson(newList, newPerson1);
addPerson(newList, newPerson2);

function displayRow(person) {
  const container = document.getElementById('people-container');
  const div = document.getElementById('divo')

  const lifterIdParagraph = document.createElement('tr');
  lifterIdParagraph.textContent = `Lifter ID: ${person.lifterID}`;
  div.appendChild(lifterIdParagraph);

  const squatParagraph = document.createElement('td');
  squatParagraph.textContent = `Squat: ${person.squat}`;
  div.appendChild(squatParagraph);

  const benchParagraph = document.createElement('td');
  benchParagraph.textContent = `Bench: ${person.bench}`;
  div.appendChild(benchParagraph);

  const deadliftParagraph = document.createElement('td');
  deadliftParagraph.textContent = `Deadlift: ${person.deadlift}`;
  div.appendChild(deadliftParagraph);

  container.appendChild(div);
}
newList.forEach(person => displayRow(person));


//<tr>
//           <td><label for="lifter"></label><input class="inp" type="text" name="Lifter" id="lifter" placeholder="Lifter"/></td>
//           <td><label for="squat"></label><input type="number" name="Squat" id="squat" min="0" placeholder="Squat"/></td>
//           <td><label for="bench"></label><input type="number" name="Bench" id="bench" min="0" placeholder="Bench"/></td>
//           <td><label for="deadlift"></label><input type="number" name="Deadlift" id="deadlift" min="0" placeholder="Deadlift"/></td>
//           <th style="background-color: black; color: white">Total</th>
//         </tr>
