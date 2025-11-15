import http.server
import socketserver
import os

PORT = 3331
DEFAULT_FILE = "index.html"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path in ('/', '/index.html'):
            self.path = '/' + DEFAULT_FILE
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Serving {DEFAULT_FILE} at http://localhost:{PORT}")
        httpd.serve_forever()
