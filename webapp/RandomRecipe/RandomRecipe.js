$(document).ready(function() {
    $("#getRecipe").click(function () {
        $('#recipe > tbody  > tr').each(function(index, tr) {
            tr.remove()
        });
        $('#recipe > thead  > tr').each(function(index, tr) {
            tr.remove()
        });
        let table = $("#recipe");
        let meatless = $("#meatless");
        let oneDay = $("#oneDay");
        const jsonData = { meatless: meatless.find(":selected").val(), oneDay: oneDay.find(":selected").val()};
        fetch('http://localhost:8080/api/randomRecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => response.json())
            .then(data => {
                let tableHead = table.find("thead");
                let tableBody = table.find("tbody");
                tableHead.append("");
                tableBody.append("")
                if (data.sideDishDto == null) {
                    let name = data.mainCourseDto.name;
                    let notes = data.mainCourseDto.notes;
                    let numberOfDays = data.mainCourseDto.numberOfDays;
                    let lastCooked = data.mainCourseDto.lastCooked;
                    tableHead.append("<tr><th>Name</th><th>Notes</th><th>Number of days</th><th>Last Cooked</th></tr>");
                    tableBody.append("<tr><td>"+name+"</td><td>"+notes+"</td><td>"+numberOfDays+"</td><td>"+lastCooked+"</td></tr>");
                }
                else {
                    let name = data.mainCourseDto.name;
                    let notes = data.mainCourseDto.notes;
                    let numberOfDays = data.mainCourseDto.numberOfDays;
                    let lastCooked = data.mainCourseDto.lastCooked;
                    let sideDishName = data.sideDishDto.name;
                    let sideDishNotes = data.sideDishDto.notes;
                    tableHead.append("<tr><th>Name</th><th>Notes</th><th>Number of days</th><th>Last Cooked</th><th>Side Dish name</th><th>Notes</th></tr>");
                    tableBody.append("<tr><td>"+name+"</td><td>"+notes+"</td><td>"+numberOfDays+"</td><td>"+lastCooked+"</td><td>"+sideDishName+"</td><td>"+sideDishNotes+"</td></tr>");
                }
                $("#getDifferentSideDish").css("visibility", "visible");
                $("#getFirstCourse").css("visibility", "visible");
            })
            .catch(error => {
                console.error('Error:', error);
            });

    })
    $("#getFirstCourse").click(function () {

    })
})
