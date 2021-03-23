from flask import Flask, render_template, redirect


# Create an instance of Flask
app = Flask(__name__)

@app.route("/")
def home():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/employer<br/>"
        f"/employee")

@app.route("/employer")
def employer():
    return render_template("employerindex.html")


@app.route("/employee")
def employee():
    return render_template("employeeindex.html")


if __name__ == "__main__":
    app.run(debug=True)