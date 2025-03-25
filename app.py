import os
from flask import Flask, redirect, url_for
from routes.auth import auth_bp
from routes.user import user_bp
from routes.admin import admin_bp

app = Flask(__name__)
app.secret_key = os.urandom(24)  # Needed for session handling

# Register Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(user_bp)
app.register_blueprint(admin_bp)

@app.route('/')
def home():
    return redirect(url_for('auth.login'))

if __name__ == "__main__":
    app.run(debug=True)