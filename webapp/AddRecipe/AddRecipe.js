$(document).ready(function() {
    let submit = $("#submit")
    submit.click(function () {
        let name = $("#name");
        let hasMeat = $("#hasMeat");
        let notes = $("#notes");
        let numberOfDays = $("#numberOfDays");
        let lastCooked = $("#lastCooked");
        let requiresSideDish = $("#requiresSideDish")

        const jsonData = {
            name: name.val(),
            hasMeat: hasMeat.find(":selected").val(),
            notes: notes.val(),
            numberOfDays: numberOfDays.val(),
            lastCooked: lastCooked.val(),
            requiresSideDish: requiresSideDish.find(":selected").val()
        };
        fetch('http://localhost:8080/api/recipes/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => {
                alert("successful");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
})
