from flask import Blueprint, render_template, session, redirect, request
from database import db

admin_bp = Blueprint('admin', __name__)

# Admin Dashboard
@admin_bp.route('/admin')
def admin_dashboard():
    if 'user_id' not in session:
        return redirect('/login')

    conn = db.get_db_connection()
    cursor = conn.cursor()

    # Get all users
    cursor.execute("SELECT id, name, email FROM users")
    users = cursor.fetchall()

    # Get all places
    cursor.execute("SELECT id, name, location FROM places")
    places = cursor.fetchall()

    cursor.close()
    conn.close()

    return render_template("admin.html", users=users, places=places)
