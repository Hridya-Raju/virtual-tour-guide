document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('loginForm');
  
  form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (!email || !password) {
          alert("Email and password are required!");
          return;
      }

      try {
          const response = await fetch('/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
          });

          const result = await response.json();

          if (response.ok) {
              window.location.href = result.redirect; // Redirect to dashboard
          } else {
              alert(result.message);
          }
      } catch (err) {
          alert("Failed to log in. Please try again.");
      }
  });
});
