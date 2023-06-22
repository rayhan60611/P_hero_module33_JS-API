function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => displayUsers(users));
}

function displayUsers(users) {
  const ol = document.getElementById("user-list");
  for (const user of users) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ol.appendChild(li);
  }
}
