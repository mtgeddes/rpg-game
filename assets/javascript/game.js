

// fix not being able to pick same char for hero and enemy
//  

$(document).ready(function() {
    
    
    var p1 = {hp: 130, ap: 6, cAp: 8};
    var p2 = {hp: 20, ap: 6, cAp: 8};
    var p3 = {hp: 30, ap: 6, cAp: 8};
    var p4 = {hp: 40, ap: 6, cAp: 8};

  
 
    var hero = []
    var enemy = []
    var kills = []
  
    var attack = function () {
        enemy[0].hp = enemy[0].hp - hero[0].ap;
        hero[0].hp = hero[0].hp - enemy[0].cAp;
        hero[0].ap = hero[0].ap + 6
    }

 

    $(".attack").click(function() {
        
        if (kills.length === 3) {
            $("#herohealth").text("You win")
            $("#enemyhealth").text("")
        }
        else if (hero[0].hp <= 0) {
            console.log("game over")
        }

        else if (enemy.length === 0) {
            $("#enemyhealth").text("Choose an opponent")
        }

        else {
            
            attack(); 
            $("#herohealth").text("Hero HP: " + hero[0].hp)
            $("#enemyhealth").text("Enemy HP: " + enemy[0].hp)
            
            console.log(enemy[0].hp); 
            console.log(hero[0].hp);

             if (enemy[0].hp <= 0) {
                enemy = [];
                kills.push("X")
                console.log("enemy died")
                $(".hide").hide()
                
                $("#enemyhealth").text("Dead. Choose your next opponent")
                $(".hidden").show()
                if (kills.length === 3) {
                    $("#herohealth").text("You win")
                    $("#enemyhealth").text("")
                }
            }
        }
        
    })

    $("article").click(function() {
        var chosen = $(this);
        var enemyHp = function () {
            $("#enemyhealth").text("Enemy HP: " + enemy[0].hp)
        }
        var heroHp = function () {
            $("#herohealth").text("Hero HP: " + hero[0].hp)
        }

        if (hero.length === 0) {
            chosen.appendTo(".color1")
 
            if (chosen.hasClass("p1")) {
                hero.push(p1)
                heroHp();
            }
            else if (chosen.hasClass("p2")) {
                hero.push(p2)
                heroHp();
            }
            else if (chosen.hasClass("p3")) {
                hero.push(p3)
                heroHp();
            }
            else if (chosen.hasClass("p4")) {
                hero.push(p4)
                heroHp();
            }
        } 

        else if (enemy.length === 0) {
            chosen.appendTo(".enemybox")
            chosen.addClass("hide")
            $(".hidden").hide()
            
            if (chosen.hasClass("p1")) {
                enemy.push(p1);
                enemyHp();
            }
            else if (chosen.hasClass("p2")) {
                enemy.push(p2)
                enemyHp();
            }
            else if (chosen.hasClass("p3")) {
                enemy.push(p3)
                enemyHp();
            }
            else if (chosen.hasClass("p4")) {
                enemy.push(p4)
                enemyHp();
            }
        }
    })

    $(".fightscene1").click(function() {
        $("#wrapper").css({"background-image": 'url(assets/images/fire.gif)'});
    })

    $(".fightscene2").click(function() {
        $("#wrapper").css({"background-image": 'url(assets/images/ship.gif)'});
    })

    $(".fightscene3").click(function() {
        $("#wrapper").css({"background-image": 'url(assets/images/zen-temple-in-fall.gif)'});
    })
})
