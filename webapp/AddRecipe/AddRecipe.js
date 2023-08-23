$(document).ready(function() {
    let mainDiv = $("#mainDiv");
    let nameLabel = $("#nameLabel");
    let name = $("#name");
    let hasMeatLabel = $("#hasMeatLabel");
    let hasMeat = $("#hasMeat");
    let notesLabel = $("#notesLabel");
    let notes = $("#notes");
    let numberOfDaysLabel = $("#numberOfDaysLabel");
    let numberOfDays = $("#numberOfDays");
    let lastCookedLabel = $("#lastCookedLabel");
    let lastCooked = $("#lastCooked");
    let requiresSideDishLabel = $("#requiresSideDishLabel")
    let requiresSideDish = $("#requiresSideDish")
    nameLabel.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(nameLabel.width())/2) + 'px');
    nameLabel.css('visibility', 'visible');
    name.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(name.width())/2) + 'px').css('visibility', 'visible');
    hasMeatLabel.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(hasMeatLabel.width())/2) + 'px');
    hasMeatLabel.css('visibility', 'visible');
    hasMeat.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(hasMeat.width())/2) + 'px');
    hasMeat.css('visibility', 'visible');
    notesLabel.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(notesLabel.width())/2) + 'px');
    notesLabel.css('visibility', 'visible');
    notes.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(notes.width())/2) + 'px');
    notes.css('visibility', 'visible');
    numberOfDaysLabel.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(numberOfDaysLabel.width())/2) + 'px');
    numberOfDaysLabel.css('visibility', 'visible');
    numberOfDays.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(numberOfDays.width())/2) + 'px');
    numberOfDays.css('visibility', 'visible');
    lastCookedLabel.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(lastCookedLabel.width())/2) + 'px');
    lastCookedLabel.css('visibility', 'visible');
    lastCooked.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(lastCooked.width())/2) + 'px');
    lastCooked.css('visibility', 'visible');
    requiresSideDishLabel.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(requiresSideDishLabel.width())/2) + 'px');
    requiresSideDishLabel.css('visibility', 'visible');
    requiresSideDish.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(requiresSideDish.width())/2) + 'px');
    requiresSideDish.css('visibility', 'visible');
    let submit = $("#submit")
    console.log(parseInt(submit.width()));
    console.log(parseInt(requiresSideDish.width()));
    submit.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(submit.width())/2) + 'px');
    submit.css('visibility', 'visible');
    let backButton = $("#backButton");
    backButton.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(backButton.width())/2) + 'px');
    backButton.css('visibility', 'visible');
    submit.click(function () {
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
