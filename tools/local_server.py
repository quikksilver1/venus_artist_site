"""Run a local static server for previewing the site.
Usage: python tools/local_server.py
Then open http://localhost:8000
"""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os

ROOT = Path(__file__).resolve().parents[1]
os.chdir(ROOT)
server = ThreadingHTTPServer(("localhost", 8000), SimpleHTTPRequestHandler)
print("Serving Venus Niebres Taylor website at http://localhost:8000")
server.serve_forever()
