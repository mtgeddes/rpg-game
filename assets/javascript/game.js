$(document).ready(function() {
    // champions to pick from
    var p1 = {hp: 160, ap: 6, cAp: 20};
    var p2 = {hp: 160, ap: 6, cAp: 8};
    var p3 = {hp: 160, ap: 6, cAp: 20};
    var p4 = {hp: 160, ap: 6, cAp: 8};

    //Holds picks
    var hero = [];
    var enemy = [];
    var kills = [];

    //Updates enemy health bar depending on health left.
    var checkEnemyHp = function () {
        if (enemy[0].hp <= 160 && enemy[0].hp >= 120) {
            $("#enemyhealth").css({"background-image": 'url("assets/images/hpbar6.png")', "transform": "scaleX(-1)"});
        }
        else if (enemy[0].hp <= 120 && enemy[0].hp >= 80) {
            $("#enemyhealth").css({"background-image": 'url("assets/images/hpbar4.png")', "transform": "scaleX(-1)"});
        }
        else if (enemy[0].hp <= 80 && enemy[0].hp >= 40) {
            $("#enemyhealth").css({"background-image": 'url("assets/images/hpbar3.png")', "transform": "scaleX(-1)"});
        }
        else if (enemy[0].hp <= 40 && enemy[0].hp >= 0) {
            $("#enemyhealth").css({"background-image": 'url("assets/images/hpbar1.png")', "transform": "scaleX(-1)"});
        }
    };

    //Updates user health bar depending on health left.
    var checkUserHp = function () {
        if (hero[0].hp <= 160 && hero[0].hp >= 120) {
            $("#herohealth").css({"background-image": 'url("assets/images/hpbar6.png")'});
        }
        else if (hero[0].hp <= 120 && hero[0].hp >= 80) {
            $("#herohealth").css({"background-image": 'url("assets/images/hpbar4.png")'});
        }
        else if (hero[0].hp <= 80 && hero[0].hp >= 40) {
            $("#herohealth").css({"background-image": 'url("assets/images/hpbar3.png")'});
        }
        else if (hero[0].hp <= 40 && hero[0].hp >= 0) {
            $("#herohealth").css({"background-image": 'url("assets/images/hpbar1.png")'});
        }
    };
  
    //Attack function to cause characters to fight
    var attack = function () {
        enemy[0].hp = enemy[0].hp - hero[0].ap;
        hero[0].hp = hero[0].hp - enemy[0].cAp;
        hero[0].ap = hero[0].ap + 6;
        checkEnemyHp();
        checkUserHp();
    };

    //Click to make characters fight
    $(".attack").click(function() {
        if (hero[0].hp <= 0) {
            $(".box2").text("You lose!")  ;
        }
        else if (kills.length === 3) {
            $(".box2").text("You win!");
            $("#enemyinfo").text("");
        }
        else if (enemy.length === 0) {
            $("#enemyinfo").text("Choose an opponent");
        }
        else {
            attack(); 
            $("#heroinfo").text("Hero HP: " + hero[0].hp + ". You attack for " + hero[0].ap);
            $("#enemyinfo").text("Enemy HP: " + enemy[0].hp + ". Enemy attacks for " + enemy[0].cAp);
             if (enemy[0].hp <= 0) {
                enemy = [];
                kills.push("X");
                $(".hide").hide();
                $("#enemyinfo").text("Dead. Choose your next opponent");
                $(".hidden").show();
                $("#enemyhealth").css({"background-image": 'url("assets/images/hpbar0.png")', "transform": "scaleX(-1)"});
                if (hero[0].hp <= 0) {
                    $(".box2").text("You lose!");
                    $("#enemyinfo").text("");
                    $("#heroinfo").text("");
                    $("#herohealth").css({"background-image": 'url("assets/images/hpbar0.png")'});
                }
                else if (kills.length === 3) {
                    $(".box2").text("You win!");
                    $("#enemyinfo").text("");
                }
            }
        }
    })
    
    //Click to choose character
    $("article").click(function() {
        var chosen = $(this);
        var enemyHp = function () {
            $("#enemyinfo").text("Enemy HP: " + enemy[0].hp);
        }
        var heroHp = function () {
            $("#heroinfo").text("Hero HP: " + hero[0].hp);
        }

        if (hero.length === 0) {
            chosen.appendTo(".herobox");
            chosen.removeClass("notpicked");
            $("#herohealth").css({"background-image": 'url("assets/images/hpbar8.png")'});
            if (chosen.hasClass("p1")) {
                hero.push(p1);
                heroHp();
            }
            else if (chosen.hasClass("p2")) {
                hero.push(p2);
                heroHp();
            }
            else if (chosen.hasClass("p3")) {
                hero.push(p3);
                heroHp();
            }
            else if (chosen.hasClass("p4")) {
                hero.push(p4);
                heroHp();
            }
            $("#instructions").text("Choose your enemy");
        } 

        else if (enemy.length === 0 && chosen.hasClass("notpicked")) {
            chosen.appendTo(".enemybox");
            chosen.addClass("hide");
            $("#enemyhealth").css({"background-image": 'url("assets/images/hpbar8.png")', "transform": "scaleX(-1)"});
            $(".hidden").hide();
            
            if (chosen.hasClass("p1")) {
                enemy.push(p1);
                enemyHp();
            }
            else if (chosen.hasClass("p2")) {
                enemy.push(p2);
                enemyHp();
            }
            else if (chosen.hasClass("p3")) {
                enemy.push(p3);
                enemyHp();
            }
            else if (chosen.hasClass("p4")) {
                enemy.push(p4);
                enemyHp();
            }
        }
    })


    //Buttons to change background
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
