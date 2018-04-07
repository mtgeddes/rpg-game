

// choose a player by clicking on picture
// move the player when chosen when either attacker or defender
// need attack button
// removed when hp === 0.
// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.
// Each time the player attacks, their character's Attack Power increases by its base Attack Power.
// Enemy only has a counterattacker

$(document).ready(function() {

    var charOne = {hp: 0, ap: 6, cAp: 8}
    var charTwo = {hp: 0, ap: 6, cAp: 8}
    var charThree = {hp: 0, ap: 6, cAp: 8}
    var charFour = {hp: 0, ap: 6, cAp: 8}


    $("button").click(function() {
        var chosen = $(this);
        chosen.appendTo("#color1")
            if (chosen === $("#color2a")) {
                
                charOne.hp = 100;
                chosen.text("HP: " + charOne.hp)
            }

            else {

            }
    })



})
