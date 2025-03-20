

function submitData(name, email) {
    const formData = {
        name: name,
        email: email,
    };

    // method: "POST" is missing from the object below

    const configurationObject = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
        method: "POST",


    };


    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
            document.getElementById("result").innerHTML = object.id
        })
        .catch(function (error) {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
            document.getElementById("result").innerHTML = error.message
        });
}