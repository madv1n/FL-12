let attempts = 3;
let fullPrize = 100;
let userPrize = 0;
let maxRange = 8;
let continueGame;

let roulette = confirm('Do you want to play a game?');

if (!roulette) {
    alert('You did not become a billionaire, but can.');
}

nextRound:

while (roulette) {

    let pocket = Math.floor(Math.random() * maxRange);
    console.log(pocket);

    while (roulette) {

        let userInput = parseInt(prompt('Choose a roulette pocket number from 0 to ' + maxRange +
            '\nAttempts left: ' + attempts +
            '\nTotal prize: ' + userPrize + '$' +
            '\nPossible price on current attempt: ' + fullPrize + '$'));

        if (userInput === pocket) {

            switch (attempts) {

                case 3:
                    userPrize += fullPrize;
                    continueGame = confirm('Congratulation, you won! Your prize is: ' + fullPrize +
                        ' $. Do you want to continue?');
                    break;

                case 2:
                    userPrize += fullPrize / 2;
                    continueGame = confirm('Congratulation, you won! Your prize is: ' + fullPrize / 2 +
                        ' $. Do you want to continue?');
                    break;

                case 1:
                    userPrize += fullPrize / 4;
                    continueGame = confirm('Congratulation, you won! Your prize is: ' + fullPrize / 4 +
                        ' $. Do you want to continue?');
                    break;
            }

            if (continueGame) {

                fullPrize *= 2;
                maxRange += 4;
                continue nextRound;

            }


        } else {
            if (attempts === 1) {

                alert('Thank you for your participation. Your prize is: ' + userPrize + '$');

                continueGame = confirm('Do you want to play again?');

                if (continueGame) {
                    attempts = 3;
                    fullPrize = 100;
                    maxRange = 8;
                    userPrize = 0;
                    continue nextRound;
                }
            }

            --attempts === 3;
        }
    }

    if (continueGame) {

        attempts = 3;
    }
}

if (attempts === 1) {

    alert('Thank you for your participation. Your prize is: ' + userPrize + '$');

    continueGame = confirm('Do you want to play again?');

    if (continueGame) {
        attempts = 3;
        fullPrize = 100;
        maxRange = 8;
        userPrize = 0;
    }
}