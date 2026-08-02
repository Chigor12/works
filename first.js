let userName = "Chigor";
console.log(userName);

let age = 20;


function greetUser() {

        let message = "<h3>Hello, " + userName + "! welcome to the web page</h3>";

        // Condition checking if user is above 18

        if (age > 18) {

            message += "<p>You are above 18 years old.</p>";

        } else {

            message += "<p>You are 18 years old or younger.</p>";

        }

        // Loop counting from 1 to 5

        message += "<p><strong>Counting from 1 to 5:</strong></p><ul>";

        for (let i = 1; i <= 5; i++) {

            message += "<li>" + i + "</li>";

        }

        message += "</ul>";

        document.getElementById("output").innerHTML = message;
    }    

