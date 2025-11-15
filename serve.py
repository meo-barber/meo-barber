
# Updated server to use Flask for template rendering and static file serving
from flask import Flask, render_template, send_from_directory
import os

PORT = 3331

app = Flask(
    __name__,
    static_folder='static',
    template_folder='templates'
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/meo')
def meo():
    return render_template('meo.html')

@app.route('/test-translations')
def test_translations():
    return render_template('test-translations.html')

# Serve static files (css, js, images)
@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == "__main__":
    print(f"Serving Flask app at http://localhost:{PORT}")
    app.run(host="0.0.0.0", port=PORT, debug=True)
