from flask import Flask

app = Flask(__name__)

# API route

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(host='localhost', port=9000, debug=True)