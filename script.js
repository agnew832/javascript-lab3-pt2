//contact class
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

//address book class properties
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  //address book methods
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

//AddressBook mybook
let myBook = new AddressBook();

myBook.add("betty agnew", "betty@gmail.com", "313.555.1234", "mother");
myBook.add("kristian agnew", "krissy@gmail.com", "248.555.1234", "daughter");
myBook.add("cortrelle agnew", "cortrelle@gmail.com", "313.555.5678", "brother");
myBook.add("willow", "willow@gmail", "313.555.5555", "fur baby");
// myBook.deleteAt(1); //delete kristian
console.log(myBook);

// //print function {
// const print = function(AddressBookReference) {
//   AddressBookReference.contacts.forEach(contact => {
//     console.log(contact);
//   });
// };

// print(myBook);

console.log(myBook.contacts);

function display() {
  // document.querySelector(".contacts").innerHTML="";
  // myBook.contacts.forEach((contact,index)=>{
  // const newEntry = document.createElement("div");
  // newEntry.classList.add("contact-box");
  let container = document.querySelector(".contacts-container");
  container.innerHTML = "";
  for (let contact of myBook.contacts) {
    let card = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = `Name: ${contact.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${contact.email}`;
    let phone = document.createElement("p");
    phone.innerText = `Phone: ${contact.phone}`;
    let relation = document.createElement("p");
    relation.innerText = `Relation: ${contact.relation}`;
    // let icon = document.createElement("i");
    // <i class="fas-fa-trash"></i>;
    // icon.setAttribute("data-index-number", `${index}`);
    card.append(name, email, phone, relation);
    container.append(card);
    card.setAttribute("class", "contacts");
  }
}
display();

let form = addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  addressBook.add(
    formData.get("name"),
    formData.get("email"),
    formData.get("phone"),
    formData.get("relation")
  );

  reset();
  display();
});
