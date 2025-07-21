from flask import Flask
import socket

app = Flask(__name__)

@app.route("/home")
def home():
    hostname = socket.gethostname()
    IPAddr = socket.gethostbyname(hostname)
    return f"welcome to lw, my hostname : {hostname} <br /> my ip: {IPAddr}"

app.run(host="0.0.0.0", port=5000)

