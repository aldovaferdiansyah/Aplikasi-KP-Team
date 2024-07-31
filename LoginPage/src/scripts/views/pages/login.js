const Login = {
  async render() {
    return `
      <div class="container">
        <div class="left">
          <div class="header">
            <h2 class="animation a1">Welcome Back</h2>
            <h4 class="animation a2">Log in to your account using email and password</h4>
          </div>
          <div class="form">
            <input id="email" type="email" class="form-field animation a3" placeholder="Email Address">
            <input id="password" type="password" class="form-field animation a4" placeholder="Password">
            <button id="loginButton" class="animation a6">LOGIN</button>
          </div>
        </div>
        <div class="right"></div>
      </div>
    `;
  },

  async afterRender() {
    document.getElementById('loginButton').addEventListener('click', async () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (data.success) {
          if (data.role === 'admin') {
            window.location.hash = '/admin-dashboard';
          } else {
            window.location.hash = '/user-dashboard';
          }
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    });
  },
};

export default Login;
