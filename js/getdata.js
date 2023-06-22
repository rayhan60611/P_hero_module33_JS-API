function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => displayUsers(users));
}

function displayUsers(users) {
  const ol = document.getElementById("user-list");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = `Id: ${user.id} -- Name: ${user.name} -- City: ${user.address.city}`;
    ol.appendChild(li);
  }
}
