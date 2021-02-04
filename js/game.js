//connect HTML areas with JavaScript
var title = document.getElementById('title');
var text = document.getElementById('text');
const beginButton = document.getElementById('beginButton');
const nextButton = document.getElementById('nextButton');
const gameSpace = document.getElementById('gameSpace');
const buttonArea = document.getElementById('buttonArea');
const game = document.getElementById('game');
const buttonOptions = document.getElementById('buttonOptions');
const button_Options = document.getElementById('button-Options');
const randomResult = document.getElementById('randomResult');
const startButton = document.getElementById('startButton');


const scenes = [
    //Welcome - 0
    {
        title: 'Welcome to the first day of the rest of your Life',
        text: 'Have you ever wanted to stand on stage to sing  and dance in front of your adoring fans? Start your journey now and see if you’ve got what it takes to be Kpop’s Next Great Legend!',
        options: [
            {
                choice: 'Begin',
                takesYouTo: 'auditionPoster',
            }
        ]
    },
    //Audition Poster - 1
    { 
        title: 'Audition Poster',
        text: '',
        image:  'https://via.placeholder.com/100x100',
        options: [
                {
                    choice: 'Next',
                    takesYouTo: 'auditionAnnouncement',
                }
            ],
    },
    //Audition Announcement - 2
    {
        title: 'Overseas audition announcement',
        text: 'Wow! u&me ent has announced they will be holding auditions for new trainee positions open to all. As you know, they debuted the “monster rookie group” last year and they’re looking for new talent for their next group. After giving it some thought, you choose to:',
        options: [
                {
                    choice: 'Book your flight to LA because you have an audition to get to',
                    takesYouTo: 'arriveInLa',
                },
                {
                    choice: 'Cry because auditions are only being held in LA and there is no way you can get there.',
                    takesYouTo: 'gameOver',
                }
            ]
    },
    //Arrive in LA - 3
    {
        title: 'The road to new beginnings',
        text: 'After arriving in LA, you head straight to the venue. You sign in, receive your audition number ____, and are shown to the waiting area.',
        options: [
                {
                    choice: 'Head in for your audition',
                    takesYouTo: 'audition',
                },
                {
                    choice: 'Chicken out and go back home',
                    takesYouTo: 'gameOver',
                }
            ]
    },
    //Audition - 4
    {
        title: '5, 4, 3, 2, Showtime',
        text: 'You slowly enter the room and find 3 judges staring blankly at you. The first thing you do is:',
        options: [
                {
                    choice: 'Cue the Music',
                    takesYouTo: 'auditionResults'
                },
                // {
                //     choice: 'Talk about yourself: talk about your name, where you’re from, what you’ll be doing, and an interesting something about you',
                //     takesYouTo: '', //random
                // },
                // {
                //     choice: 'Say hello',
                //     takesYouTo: '', //random
                // },
                {
                    choice: 'Run Away',
                    takesYouTo: 'gameOver',
                }
            ]
    },
    //Audition Results - 5
    {
        title: 'Audition Results',
        text: 'The Results are in and you ...Made it',
        //randomResult: '',
        options: [
            {
                choice: 'Go home and pack. Your life at the company as a trainee starts next week',
                takesYouTo: 'grandTour/flightToKorea/trainingUpdate'
                
            },
            {
                choice: 'Go home and chill. You only did the audition to see if you’d make it.',
                takesYouTo:'gameOver'
            },
            // {
            //     choice: 'Accept Defeat and Go Home',
            //     takesYouTo: 'gameOver'
            // }, 
            // {
            //     choice: 'Ask for another chance',
            //     takesYouTo: 'audition',
            // }

        ]
    },
    //Flight to Korea - 6
    {
        title: 'Flight to South Korea',
        text: 'Picture of Plane Goes Here',
        options: [
            {
                choice: 'Continue',
                takesYouTo: 'trainingUpdate',
            },
            {
                choice: '',
                takesYouTo: '',
            }
        ],
    },
    //Training Update - 7
    {
        title: 'Training Update',
        text: 'Training has been grueling and has left you a bit homesick. You’ve been questioning your decision to take this path. Everyday has become harder and harder to face. You call home/friend, but you don’t get a response. So, you: ',
        options: [
                {
                    choice: 'You review your schedule and head to your next event',
                    takesYouTo: 'monthlyEvaluation',
                },
                {
                    choice: 'Head home. This is more than you wanted',
                    takesYouTo: 'gameOver',
                }
            ]
    },
    //Monthly Evaluation - 8
    {
        title: 'Monthly Evaluation',
        text: 'You and the other trainees enter a room full of producers, trainers, and successful artists. After greeting everyone, the head producer announces that today’s evaluation will determine the trainees who will debut. The number of members is not decided, the type of group is not decided. There will be either a girl group, a boy group, a mixed group, or a band.',
        options: [
                {
                    choice: 'You take a deep breath and cue the music.',
                    takesYouTo: 'monthlyEvaluationPerformance',
                },
                {
                    choice: '',
                    takesYouTo: '',
                }
            ]
    },
    //Monthly Evaluation Results - made it - 9
    {
        title: 'Evaluation Results Made It',
        text: 'The results are in and YOU MADE IT!!!',
        options: [
            {
                choice: 'You breathe an excited sigh of relief, but your excitement quickly fades as you realize many of your friends did not make it and will be returning home.',
                takesYouTo: 'nextSteps',
                
            }
        ]
    },
    //Monthly Evaluation Results - Did not make it - 10
    {
        title: 'Evaluation Results: You Did Not Make It',
        text: 'The manager instructs you to return to the dorm immediately and pack your things. You’ll be leaving the dorms and returning home tomorrow. You decide to:',
        options: [
            {
                choice: 'Congratulate the trainees who will be debuting, return to the dorm and pack your things, then go out for one last Korean meal.',
                takesYouTo: 'gameOver',
                
            },
            {
                choice: 'Congratulate the trainees who will be debuting. Approach the head producer, ask for another chance explaining why you should receive another chance.',
                takesYouTo: 'deliberation',
            }
        ]
    },
    //Deliberation - 11
    {
        title: 'Approaching the HP',
        text: 'After hearing your spill, the HP [Random Button]',
        randomResult: '',
        options: [
            {
                choice: 'Decides you can have one more shot in the morning. If successful, you can attend the first group meeting afterwards.',
                takesYouTo: 'monthlyEvaluation',
            },
            {
                choice: 'Tells you that you must always be ready and prepared for opportunities. There will be another audition soon for various fields. Come back then and don’t let your chance pass.',
                takesYouTo: 'gameOver',
            }

        ]
    },
    //Next Steps - 12
    {
        title: 'Next steps!!!',
        text: 'The manager gives you and your groupmates instructions to meet at the MAIN building (HQ) (the one reserved artists, producers, and other professionals) 1st thing tomorrow morning. You will begin debut preparations starting with assigning official positions, stage names, greetings, a fanbase name, and a group name.',
        options: [
                {
                    choice: 'Looking forward to tomorrow, you go home and sleep for the first time in months. ',
                    goTo: 'dayOne',
                },
                {
                    choice: 'You realize that this really isn’t your passion, and you’d like to live a healthy life loving what you do. So, you respectfully decline the offer and book a flight home.',
                    goTo: 'gameOver',
                },
            ]
    },
    //dayOne - 13
    {
        title: 'Day One',
        text: 'The day has finally come. Today, you will officially become a part of U&Me Family. The ‘celebrity’ van stops in front of the MAIN building’s entrance. You exit the van and head for the entrance. With a deep breath, you take your first step into HQ. It’s now time for the real work to start. -- The manager enters the room, takes out a piece of paper, and one by one reads the official group positions. --Your name is finally called. As you take in a deep breath, the manager says that you will be in a group with an "outer space" concept.',
        decisionText: 'Now that everything has been decided, the manager gives you the contract to review and the rest of the day off. You read the contract and decide to:',
        options: [
            {
                choice: 'Reject the terms. You realize this isn’t for you. It’s too restrictive, and you aren’t really feeling the concept.',
                takesYouTo: 'gameOver',
            },
            {
                choice: 'Accept the terms with a few additions.',
                takesYouTo: 'debutPoster',
            }
        ]
    },
    //Terminate Contract - 14
    {
        title: 'Contract Termination',
        text: 'After some thought, you realize that you’ve had enough and you want out. Although it’s inconvenient, the company allows you and option to pay and leave.',
        options: [
                {
                    choice: 'You can’t take it anymore. You find someone who will loan you the money to pay for all of the lessons, training, activities, and food you’ve received since joining the company',
                    takesYouTo: 'gameOver',
                },
                {
                    choice: 'You suck it up and get back to work. You made a commitment, and for now, you’ll honor it.',
                    takesYouTo: 'debutPoster',
                }
            ]
    },
    //Debut Poster - 15
    {
        title: 'Debut Poster',
        text: 'Picture of Debut Poster Goes Here',
        options: [
            {
                choice: 'Continue',
                takesYouTo: 'debutStage',
            }
        ],
    },
    //Debut Stage - 16
    {
        title: 'Congratulations on your debut!!!',
        text: 'You’ve finally debuted and it seems like your even more busy. Every moment of your day is filled with some kind of activity and you feel like you could collapse at any moment...but the looks on your fan’s faces, their comments, and their letters makes it all worth it. --You only have one performance left in your debut promotions, and to celebrate, the fans have sent cake and meals for everyone including production staff to the broadcasting studio. To thank the fans, the manager allows a quick "high touch event" after the recording.',
        options: [
                {
                    choice: 'Though this road hasn’t been easy, it’s definitely been filled with great moments. Reflecting on the past, you look forward to future',
                    takesYouTo: 'thankYou',
                }
            ]
    },
    //Thank You - 17
    {
        title: 'Thank You For Playing!!!',
        text: 'I hope that you were able to enjoy your journey. Regretfully, we must end it here. Keep working hard at whatever you choose to do. Greatness Awaits! --Fighting!'
    },
    //Game Over - 18
    {
        title: 'Game Over',
        text: 'GoodBye for now. Keep working hard at whatever you choose to do & one day you will be successful!',
        options: [
            {
                choice: '',
                takesYouTo: ''
            },
            {
                choice: 'Restart',
                takesYouTo: 'welcome',
            }
        ]
    }
]





//start game
//go to next page if it's only a picture
//go to next page from button

// Start Game
    //click button to begin
    //append new background
    //append title, text, buttons

//Move to next scene
    //when button is clicked, load text and answers associated with button
    //change background

//If scene is picture, use next button to move forward

//Incorporate Random Parts

startButton.addEventListener('click', startGame);


function startGame() {
    gameSpace.classList.remove('hide');
    game.classList.remove('hide');
    buttonOptions.classList.add('hide');
    button_Options.classList.add('hide');
    startButton.classList.add('hide');
    beginButton.classList.remove('hide');
    title.innerText = scenes[0].title;
    text.innerText = scenes[0].text;
    document.body.classList.add('clouds');
}

beginButton.addEventListener('click', start) 

function start() {
    // beginButton.classList.add('hide');
    // nextButton.classList.remove('hide');
    // buttonOptions.classList.add('hide');
    // button_Options.classList.add('hide');
    // //click button to begin
    // //append new background
    // document.body.classList.add('correct')
    // //append title, text, buttons
    // title.innerText = scenes[0].title;
    // text.innerText = scenes[0].text;
    // nextButton.innerText = 'Next';
    // gameSpace.classList.remove('hide');
    
    sceneAuditionPoster()
}

function sceneAuditionPoster() {
    beginButton.classList.add('hide');
    nextButton.classList.remove('hide');
    title.innerText = scenes[1].title;
    text.innerText = scenes[1].text;
    document.body.classList.add('correct');
    nextButton.innerText = 'Next';
}


nextButton.addEventListener('click', () => {
    sceneAuditionAnnouncement();
});


function sceneAuditionAnnouncement() {
    
    nextButton.classList.add('hide');
    buttonOptions.classList.remove('hide');
    button_Options.classList.remove('hide');
    
    //click button to begin
    //append new background
    document.body.classList.add('correct')
    //append title, text, buttons
    title.innerText = scenes[2].title;
    text.innerText = scenes[2].text;
    buttonOptions.innerText = scenes[2].options[0].choice;
    buttonOptions.addEventListener('click', buttonWork);
    button_Options.innerText = scenes[2].options[1].choice;
    button_Options.addEventListener('click', otherSide)
    // gameSpace.classList.remove('hide');
}

function nextScene() {
    title.innerText = scenes[3].title;
    text.innerText = scenes[3].text;
    buttonOptions.innerText = scenes[3].options[0].choice;
    button_Options.innerText = scenes[3].options[1].choice;
}

function buttonWork(){
    let allButtons = document.getElementsByTagName('button');
    for (var i = 0; i < allButtons.length; i++) {
        if (buttonOptions.innerText === scenes[2].options[0].choice) {
            // console.log('button');
            addScene(scenes[3])

            // title.innerText = scenes[3].title;
            // text.innerText = scenes[3].text;
            // buttonOptions.innerText = scenes[3].options[0].choice;
            // button_Options.innerText = scenes[3].options[1].choice;
        } else if (buttonOptions.innerText === scenes[3].options[0].choice) {
            addScene(scenes[4]);
        }  
        // if (buttonOptions.innerText === scenes[4].options[0].choice) {
        //     addScene(scenes[5])
        // }
    
    }
    auditionResults();
    
    
}

function auditionResults() {
    if (scenes[4]) { //audition
        buttonOptions.addEventListener('click', () => {
            addScene(scenes[5]); //auditionREsults
        })
        
    } 
    if (scenes[5]) { //auditionResults
        buttonOptions.addEventListener('click', () => {
            button_Options.classList.add('hide');
            addScene(scenes[6]); //flightToKorea
            document.body.classList.add('planeSky');
            // gameSpace.classList.add('hide');
            // game.classList.add('hide');
        })
    }
}

function inKorea() {
    if (scenes[6]) { //flight to Korea
        buttonOptions.addEventListener('click', () => {
            //button_Options.classList.add('hide');
            addScene(scenes[7]); //trainingUpdate
        })
    }
    if (scenes[7]) { //trainingUpdate
        buttonOptions.addEventListener('click', () => {
            button_Options.classList.add('hide');
            addScene(scenes[8]); //monthlyEvaluation
        })
    }
}


// auditionResults();
inKorea();


function addScene(scene) {
    title.innerHTML = `<h1>${scene.title}</h1>`;
    text.innerHTML = `<p>${scene.text}</p>`;
    buttonOptions.innerText = scene.options[0].choice;
    button_Options.innerHTML = scene.options[1].choice;
    console.log(scene.title);
    console.log(scene.text);
    console.log(buttonOptions.innerHTML);
    console.log(button_Options.innerHTML);
}

function otherSide() {
    let allButtons = document.getElementsByTagName('button');
    for (var i = 0; i < allButtons.length; i++) {
        if (button_Options.innerText = scenes[2].options[1].choice) {
            buttonOptions.classList.add('hide');
            addOtherSideScene(scenes[18])

        } else if (button_Options.innerText = scenes[3].options[1].choice) {
            buttonOptions.classList.add('hide');
            addOtherSideScene(scenes[18])
        }  else if (button_Options.innerText = scenes[4].options[1].choice) {
            buttonOptions.classList.add('hide');
            addOtherSideScene(scenes[18])
        } else if (button_Options.innerText = scenes[5].options[1].choice) {
            buttonOptions.classList.add('hide');
            addOtherSideScene(scenes[18])
        }
    
    }
}


function addOtherSideScene(scene) {
    title.innerHTML = `<h1>${scene.title}</h1>`;
    text.innerHTML = `<p>${scene.text}</p>`;
    button_Options.innerText = scene.options[1].choice;
    button_Options.addEventListener('click', restartGame);
    console.log(scene.title);
    console.log(scene.text);
    console.log(buttonOptions.innerHTML);
    // console.log(button_Options.innerHTML);
}

function restartGame(){
    beginButton.classList.remove('hide');
    button_Options.classList.add('hide');
    startGame()
}


function randomChoice(scene) {
    // if ()
    title.innerHTML = `<h1>${scene.title}</h1>`;
    text.innerHTML = `<p>${scene.text}</p>`;
    let choiceArray = ['YOU MADE IT!!', 'you did not make it'];
    randomResult.classList.remove('hide');
    randomResult.innerText = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    let result = randomResult.innerText;
    console.log(result);
    if (result === choiceArray[0]) {
        buttonOptions.innerText = scene.options[0].choice;
        button_Options.innerText = scene.options[1].choice;
    } else if (result === choiceArray[1]) {
        buttonOptions.innerText = scene.options[2].choice;
        button_Options.innerText = scene.options[3].choice;
    }



            // if (you made it) {
            //     display buttons :choice: 'Go home and chill. You only did the audition to see if you’d make it.',
            //     takesYouTo: 'gameOver', AND choice: 'Go home and pack. Your life at the company as a trainee starts next week',
            //     takesYouTo: 'grandTour',
            // } else {
            //     display buttons: choice: 'Accept Defeat and Go Home',
            //     takesYouTo: 'gameOver', AND choice: ' Ask for another chance',
            //     takesYouTo: 'audition',
            // }

}




//addScene(scenes[3]);

//startGame();

//function scene1() {
    // game.innerHTML = '';
    // for (choice of options) {
    //     let button = document.createElement('button');
    //         button.innerText = options.choice;
    //         button.classList.add('button', 'btn');
    //         button.addEventListener('click', moveForward);
    //         buttonArea.appendChild(button);
    // }
//}

// if (options[i].choice === "Begin") {
//     title.innerText = "Audition Poster";
//     text.innerText = "Audition Poster Goes Here";
// }

// function changeScene(scene) {
//     scene.options.forEach(option => {
//         let button = document.createElement('button');
//         button.innerText = options.choice;
//         button.classList.add('button', 'btn');
//         button.addEventListener('click', moveForward);
//         buttonArea.appendChild(button);
//     })
// }

// function addButtons(scene) {
//     scene.forEach(options => {
//         let button = document.createElement('button');
//         button.innerText = options.choice;
//         button.classList.add('button', 'btn');
//         button.addEventListener('click', moveForward);
//         buttonArea.appendChild(button);
//     })
// }




// function moveForward() {
//     game.innerHTML = '';
//     let buttons = document.querySelectorAll('.button');
//     buttons.addEventListener('click', () => {
//         for (var i = 0; i < options.length; i++) {
//             buttons.innerText = options[i].choice;
//         }
//         buttonSpace.append(buttons);
//         if (options[i].choice === "Begin") {
//             title.innerText = "Audition Poster";
//             text.innerText = "Audition Poster Goes Here";
//         }
//     })
// }

// function addScene(index) {
//     title.innerText = ;
//     text.innerText = ;
// }

// local
// class Constructor
// class game {
//     scene.
// }

// string literal
// when i start game how many options i had create buttons and text scripts

// forEach

// this.scene.title
// this.scene.options

// let scene = `<h1>hello</h1> <img src-='source.jpg' alt='img'> <p>text</p><button>Click</button>'

// for (let i = 0; i < arr.length; i++) {
// scene += scene}