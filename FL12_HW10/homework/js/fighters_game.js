
function Fighter(options) {
    let name = options.name;
    let damage = options.damage;
    let hp = options.hp;
    let strength = options.strength;
    let agility = options.agility;
    let wins = 0;
    let loses = 0;

    function createObject () {
        return Object.create({
            getName: function() {
                return name;
            },
            getDamage: function() {
                return damage;
            },
            getStrength: function() {
                return strength;
            },
            getAgility: function() {
                return agility;
            },
            getHealth: function(){
                return hp;
            },
            attack: function(myFighter2) {
                let attackChance = (myFighter2.getStrength() + myFighter2.getAgility())/100;
                let attackResult = Math.random(1 - attackChance);
                    if(attackResult > attackChance) {
                        myFighter2.dealDamage(this.getDamage());
                        console.log(name + ' makes ' + damage + ' damage to ' + myFighter2.getName());
                    } else {
                        console.log(myFighter2.getName() + ' attack missed');
                    }
            },
            logCombatHistory: function() {
                console.log('Name: ' + this.getName() + ', Wins: ' + wins + ', Losses: ' + loses);
            },
            heal: function(healingPoints) {
                let fullHP = hp;
                if(hp + healingPoints > fullHP) {
                    hp = fullHP;
                } else {
                    hp += healingPoints;
                }
            },
            dealDamage: function (damagePoints) {
                let minHP = 0;
                if(hp - damagePoints < minHP) {
                    hp = minHP;
                } else {
                    hp -= damagePoints;
                }
            },
            addWin: function() {
                wins++;
            },
            addLoss: function () {
                loses++;
            }


        });
    }

    return createObject();
}

function battle(fighter1, fighter2) {

    if (fighter1.getHealth() <= 0) {
        console.log(fighter1.getName() + ' is dead and can`t fight.')
    }
    if (fighter2.getHealth() <= 0) {
        console.log(fighter1.getName() + ' is dead and can`t fight.')
    }

    while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        fighter1.attack(fighter2);
        if(fighter2.getHealth() <= 0 ) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(fighter1.getName() + 'has won!');
        } else {
            fighter2.attack(fighter1);
        } if (fighter1.getHealth() <= 0) {
            fighter1.addLoss();
            fighter2.addWin();
            console.log(fighter2.getName() + ' has won!');
        }
    }
}