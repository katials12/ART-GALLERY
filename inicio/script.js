document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes validar las credenciales (por ejemplo, con credenciales fijas)
    if (username === "usuario" && password === "contraseña") {
      document.getElementById("message").innerHTML = "Login exitoso";
      
      // Aquí puedes redirigir a otra página después del inicio de sesión exitoso
    } else {
      document.getElementById("message").innerHTML = "Credenciales incorrectas. Por favor, intenta de nuevo.";
    }
  });