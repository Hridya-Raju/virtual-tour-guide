document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!name || !email || !password) {
            alert("Please fill in all fields!");
            return;
        }

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                window.location.href = '/login';
            } else {
                const result = await response.json();
                alert(result.message);
            }
        } catch (err) {
            alert('Failed to register. Please try again later.');
        }
    });
});
