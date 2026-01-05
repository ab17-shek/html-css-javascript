const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const list = document.getElementById("userList");

    users.forEach(user => {
      const li = document.createElement("li");
      li.innerText = user.name;
      list.appendChild(li);
    });
  };

  fetchUsers();
