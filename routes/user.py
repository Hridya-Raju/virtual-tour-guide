from flask import Blueprint, render_template, session, redirect, request
from database import db

user_bp = Blueprint('user', __name__)

# User Dashboard Route
@user_bp.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect('/login')  # Redirect to login if not logged in

    conn = db.get_db_connection()
    cursor = conn.cursor()

    # Get user details
    cursor.execute("SELECT name, email FROM users WHERE id = %s", (session['user_id'],))
    user = cursor.fetchone()

    # Get wishlist places
    cursor.execute("""
        SELECT places.id, places.name, places.location
        FROM wishlist
        JOIN places ON wishlist.place_id = places.id
        WHERE wishlist.user_id = %s
    """, (session['user_id'],))
    wishlist = cursor.fetchall()

    # Get visited places
    cursor.execute("""
        SELECT places.id, places.name, places.location, visited_places.visited_on
        FROM visited_places
        JOIN places ON visited_places.place_id = places.id
        WHERE visited_places.user_id = %s
    """, (session['user_id'],))
    visited_places = cursor.fetchall()

    cursor.close()
    conn.close()

    return render_template("dashboard.html", user=user, wishlist=wishlist, visited_places=visited_places)


# Add a place to wishlist
@user_bp.route('/add_wishlist/<int:place_id>')
def add_wishlist(place_id):
    if 'user_id' not in session:
        return redirect('/login')

    conn = db.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO wishlist (user_id, place_id) VALUES (%s, %s)", 
                   (session['user_id'], place_id))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect('/dashboard')

@user_bp.route('/explore')
def explore():
    return render_template('explore.html')
2

# Remove a place from wishlist
@user_bp.route('/remove_wishlist/<int:place_id>')
def remove_wishlist(place_id):
    if 'user_id' not in session:
        return redirect('/login')

    conn = db.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM wishlist WHERE user_id = %s AND place_id = %s", 
                   (session['user_id'], place_id))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect('/dashboard')

# Mark a place as visited
@user_bp.route('/mark_visited/<int:place_id>')
def mark_visited(place_id):
    if 'user_id' not in session:
        return redirect('/login')

    conn = db.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO visited_places (user_id, place_id, visited_on) VALUES (%s, %s, NOW())", 
                   (session['user_id'], place_id))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect('/dashboard')
