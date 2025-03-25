from flask import Blueprint, jsonify, request, redirect, render_template, session
import bcrypt
from database import db

auth_bp = Blueprint('auth', __name__)

# User Registration
@auth_bp.route('/register', methods=['GET', 'POST'])
def register():
  try:
    if request.method == 'POST':
        data = request.get_json()
        if not data:
          return jsonify({"message": "No data received"}), 400
        name = data['name']
        email = data['email']
        password = data['password']

        if not name or not email or not password:
          return jsonify({"message": "All fields are required!"}), 400
    
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        conn = db.get_db_connection()
        cursor = conn.cursor()

        # Check if email already exists
        cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
        existing_user = cursor.fetchone()
        if existing_user:
          return jsonify({"message": "Email already registered!"}), 400

        cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, hashed_password))
        conn.commit()
        cursor.close()
        conn.close()
        
        return jsonify({"message": "Registration successful!"}), 201
    return render_template('register.html')
  except Exception as e:
    print("Error:", str(e))  # Logs error in Flask console
    return jsonify({"message": "Internal Server Error", "error": str(e)}), 500


@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
      data = request.get_json()
      
      if not data:
        return jsonify({"message": "No data received"}), 400
      
      email = data.get('email')
      password = data.get('password')

      if not email or not password:
        return jsonify({"message": "Email and password are required!"}), 400
      
      conn = db.get_db_connection()
      cursor = conn.cursor()
      cursor.execute("SELECT id, password FROM users WHERE email = %s", (email,))
      user = cursor.fetchone()
      cursor.close()
      conn.close()

      if not user:
                return jsonify({"message": "Invalid email or password!"}), 401

      user_id, hashed_password = user

      if bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8')):
                session['user_id'] = user_id
                return jsonify({"message": "Login successful!", "redirect": "/dashboard"}), 200
      else:
                return jsonify({"message": "Invalid email or password!"}), 401

    return render_template('login.html')
