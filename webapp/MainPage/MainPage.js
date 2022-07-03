$(document).ready( function () {
    let mainDiv = $("#mainDiv");
    let buttons = $("#buttons");
    let welcomeMessage = $("#welcomeMessage");
    console.log(mainDiv.width());
    console.log(buttons.width());
    buttons.css('margin-left', (parseInt(mainDiv.width())/2 - parseInt(buttons.width())/2) + 'px');
    buttons.css('margin-top', (parseInt(mainDiv.height())/2 - parseInt(buttons.height())/2) + 'px');
    welcomeMessage.css('margin-left', (parseInt(buttons.width())/2 - parseInt(welcomeMessage.width())/2) + 'px');
    buttons.css('visibility', 'visible')
})
