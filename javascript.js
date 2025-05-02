let createBtn = document.getElementById("createEle");
let taskform = document.getElementById("taskForm");
let submitBtn = document.getElementById("submitFormBtn");
console.log(createBtn);
createBtn.addEventListener("click", () => {
  console.log("work");
  taskform.style.display = "block";
});
console.log(submitBtn);

submitBtn.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  let desc = document.getElementById("taskDescription").value;
  let date = document.getElementById("dates").value;
  let time = document.getElementById("times").value;
  let status = document.getElementById("taskStatus").value;

  let row = taskTable.insertRow();
  row.insertCell(0).textContent = desc;
  row.insertCell(1).textContent = date;
  row.insertCell(2).textContent = time;
  row.insertCell(3).textContent = status + "%";
  row.insertCell(4).textContent = "-";

  // Optional: clear form fields
  form.reset();
});
