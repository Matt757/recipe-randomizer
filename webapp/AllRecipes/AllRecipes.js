$(document).ready(function() {
    let mainDiv = $("#mainDiv");
    let table = $("#recipes")
    fetch('http://localhost:8080/api/recipes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            let tableHead = table.find("thead");
            let tableBody = table.find("tbody");
            tableHead.append("<tr><th>Name</th><th>Notes</th><th>Number of days</th><th>Last Cooked</th></tr>");
            tableBody.append("")
            data.forEach(recipe => {
                let name = recipe.name;
                let notes = recipe.notes;
                let numberOfDays = recipe.numberOfDays;
                let lastCooked = recipe.lastCooked;
                tableBody.append("<tr><td>"+name+"</td><td>"+notes+"</td><td>"+numberOfDays+"</td><td>"+lastCooked+"</td></tr>");
            })
            table.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(table.width())/2) + 'px');
        })
        .catch(error => {
            console.error('Error:', error);
        });
})
