$(document).ready(function() {
    $("#getRecipe").click(function () {
        $('#recipe > tbody  > tr').each(function(index, tr) {
            tr.remove()
        });
        $('#recipe > thead  > tr').each(function(index, tr) {
            tr.remove()
        });
        $('#firstCourse > tbody  > tr').each(function(index, tr) {
            tr.remove()
        });
        $('#firstCourse > thead  > tr').each(function(index, tr) {
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
                tableBody.append("");
                if (data.sideDishDto == null) {
                    let name = data.mainCourseDto.name;
                    let notes = data.mainCourseDto.notes;
                    let numberOfDays = data.mainCourseDto.numberOfDays;
                    let lastCooked = data.mainCourseDto.lastCooked;
                    $("#recipeId").html(data.mainCourseDto.id);
                    $("#recipeName").html(data.mainCourseDto.name);
                    $("#recipeHasMeat").html(data.mainCourseDto.hasMeat.toString());
                    $("#recipeNotes").html(data.mainCourseDto.notes);
                    $("#recipeNumberOfDays").html(data.mainCourseDto.numberOfDays);
                    $("#recipeLastCooked").html(data.mainCourseDto.lastCooked);
                    $("#recipeRequiresSideDish").html(data.mainCourseDto.requiresSideDish.toString());
                    tableHead.append("<tr><th>Name</th><th>Notes</th><th>Number of days</th><th>Last Cooked</th></tr>");
                    tableBody.append("<tr><td>"+name+"</td><td>"+notes+"</td><td>"+numberOfDays+"</td><td>"+lastCooked+"</td></tr>");
                }
                else {
                    $("#getDifferentSideDish").css("visibility", "visible");
                    let name = data.mainCourseDto.name;
                    let notes = data.mainCourseDto.notes;
                    let numberOfDays = data.mainCourseDto.numberOfDays;
                    let lastCooked = data.mainCourseDto.lastCooked;
                    let sideDishName = data.sideDishDto.name;
                    let sideDishNotes = data.sideDishDto.notes;
                    $("#recipeId").html(data.mainCourseDto.id);
                    $("#recipeName").html(data.mainCourseDto.name);
                    $("#recipeHasMeat").html(data.mainCourseDto.hasMeat.toString());
                    $("#recipeNotes").html(data.mainCourseDto.notes);
                    $("#recipeNumberOfDays").html(data.mainCourseDto.numberOfDays);
                    $("#recipeLastCooked").html(data.mainCourseDto.lastCooked);
                    $("#recipeRequiresSideDish").html(data.mainCourseDto.requiresSideDish.toString());
                    $("#sideDishId").html(data.sideDishDto.id);
                    $("#sideDishName").html(data.sideDishDto.name);
                    $("#sideDishHasMeat").html(data.sideDishDto.hasMeat.toString());
                    $("#sideDishNotes").html(data.sideDishDto.notes);
                    tableHead.append("<tr><th>Name</th><th>Notes</th><th>Number of days</th><th>Last Cooked</th><th>Side Dish name</th><th>Notes</th></tr>");
                    tableBody.append("<tr><td>"+name+"</td><td>"+notes+"</td><td>"+numberOfDays+"</td><td>"+lastCooked+"</td><td>"+sideDishName+"</td><td>"+sideDishNotes+"</td></tr>");
                }
                $("#getFirstCourse").css("visibility", "visible");
                $("#updateRecipes").css("visibility", "visible");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
    $("#getFirstCourse").click(function () {
        let table = $("#firstCourse");
        let meatless = $("#meatless");
        let firstCourseId = $("#firstCourseId").html();
        console.log(firstCourseId);
        $('#firstCourse > tbody  > tr').each(function(index, tr) {
            tr.remove()
        });
        $('#firstCourse > thead  > tr').each(function(index, tr) {
            tr.remove()
        });
        fetch('http://localhost:8080/api/firstCourse/' + firstCourseId.valueOf(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                let tableHead = table.find("thead");
                let tableBody = table.find("tbody");
                tableHead.append("");
                tableBody.append("");
                let name = data.name;
                let notes = data.notes;
                $("#firstCourseId").html(data.id);
                $("#firstCourseName").html(data.name);
                $("#firstCourseHasMeat").html(data.hasMeat.toString());
                $("#firstCourseNotes").html(data.notes);
                tableHead.append("<tr><th>Name</th><th>Notes</th></tr>");
                tableBody.append("<tr><td>"+name+"</td><td>"+notes+"</td></tr>");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
    $("#updateRecipes").click(function () {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + "-" + mm + "-" + dd;

        let id = $("#recipeId");
        let name = $("#recipeName");
        let hasMeat = $("#recipeHasMeat");
        let notes = $("#recipeNotes");
        let numberOfDays = $("#recipeNumberOfDays");
        let requiresSideDish = $("#recipeRequiresSideDish");

        const jsonData = { id: id.html(), name: name.html(), hasMeat: hasMeat.html(), notes: notes.html(), numberOfDays: numberOfDays.html(), lastCooked: today, requiresSideDish: requiresSideDish.html()};
        fetch('http://localhost:8080/api/recipes/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => {
                if (response.ok === true) {
                    alert("successful");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
})
