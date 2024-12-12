document.getElementById('xhr-btn').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        displayUsers(users, 'XMLHttpRequest');
      } else {
        console.error('Error fetching data');
      }
    };
  
    xhr.onerror = function() {
      console.error('Request error');
    };
  
    xhr.send();
  });

document.getElementById('promise-btn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(users => {
        displayUsers(users, 'Promises');
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}); 

document.getElementById('async-btn').addEventListener('click', async function() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      displayUsers(users, 'Async/Await');
    } catch (error) {
      console.error('Fetch error:', error);
    }
});
  
  
function displayUsers(users, method) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = `<h3>Fetched using: ${method}</h3>`;
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email}) from ${user.address.city}`;
      userList.appendChild(li);
    });
}
  