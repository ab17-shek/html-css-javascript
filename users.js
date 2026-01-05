document.addEventListener('DOMContentLoaded', () => {
  const usersList = document.getElementById('usersList');
  const refreshBtn = document.getElementById('refreshBtn');

  async function loadUsers() {
    usersList.innerHTML = 'Loading...';
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      renderUsers(data);
    } catch (err) {
      console.log('API Failed');
      usersList.innerHTML = '<p>Failed to load users.</p>';
    }
  }

  function renderUsers(users) {
    usersList.innerHTML = '';
    users.forEach(u => {
      const card = document.createElement('div');
      card.className = 'user-card';

      const name = document.createElement('h3');
      name.textContent = u.username;

      const email = document.createElement('p');
      email.textContent = u.email;

      card.appendChild(name);
      card.appendChild(email);
      usersList.appendChild(card);
    });
  }

  refreshBtn.addEventListener('click', loadUsers);

  loadUsers();
});
