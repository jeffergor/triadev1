// Registro de nuevos usuarios
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const firstName = document.getElementById("newFirstName").value;
    const lastName = document.getElementById("newLastName").value;
    const email = document.getElementById("newEmail").value;
    const phone = document.getElementById("newPhone").value;
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const role = document.getElementById("newRole").value;
  
    // Validación de campos
    if (!firstName || !lastName || !email || !phone || !username || !password || !role) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    // Verificar si el usuario ya existe
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      alert("El usuario ya existe.");
      return;
    }
  
    // Crear nuevo usuario
    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      role
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Usuario creado con éxito.");
    window.location.href = "../login.html";

  });
  