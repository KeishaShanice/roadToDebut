var auditionChoices = [];


const gameScenes = {
    welcome: {
        title: 'Welcome to the first day of the rest of your Life',
        text: 'Have you ever wanted to stand on stage to sing  and dance in front of your adoring fans? Start your journey now and see if you’ve got what it takes to be Kpop’s Next Great Legend!',
        options: {
            buttons: [
                {
                    choice: 'Begin',
                    takesYouTo: 'auditionPoster',
                }
            ],
        },
        image: ''
        //'./media/game1.jpg'
        //'https://via.placeholder.com/100x100'
    },

    auditionPoster: {
        title: 'Audition Poster',
        text: '',
        image:  'https://via.placeholder.com/100x100',
        options: {
            buttons: [
                {
                    choice: 'Next',
                    takesYouTo: 'auditionAnnouncement',
                }
            ],
        },
    },

    auditionAnnouncement: {
        title: 'Overseas audition announcement',
        text: 'Wow! u&me ent has announced they will be holding auditions for new trainee positions open to all. As you know, they debuted the “monster rookie group” last year and they’re looking for new talent for their next group. After giving it some thought, you choose to:',
        options: {
            //decisionText: ['After giving it some thought, you choose to:', 'OR'],
            buttons: [
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
        image:  'https://via.placeholder.com/100x100'
    },

    arriveInLa: {
        title: 'The road to new beginnings',
        text: 'After arriving in LA, you head straight to the venue. You sign in, receive your audition number ____, and are shown to the waiting area.',
        options: {
            prompt: '', //timer-alert -your number has been called
            buttons: [
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
        image:  'https://via.placeholder.com/100x100'
    },

    audition: {
        title: '5, 4, 3, 2, Showtime',
        text: 'You slowly enter the room and find 3 judges staring blankly at you. The first thing you do is:',
        options: {
            buttons: [
                {
                    choice: 'Cue the Music',
                    takesYouTo: 'gameOver',
                },
                {
                    choice: 'Talk about yourself: talk about your name, where you’re from, what you’ll be doing, and an interesting something about you',
                    takesYouTo: '', //random
                },
                {
                    choice: 'Say hello',
                    takesYouTo: '', //random
                },
                {
                    choice: 'Run Away',
                    takesYouTo: 'gameOver',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    auditionResults: {
        title: 'Audition Results',
        text: ['The results are in and … You made it', 'The results are in and … You didn’t make it'],
        options: {
            buttons: [
                {
                    choice: 'Go home and chill. You only did the audition to see if you’d make it.',
                    takesYouTo: 'gameOver',
                },
                {
                    choice: 'Go home and pack. Your life at the company as a trainee starts next week',
                    takesYouTo: 'grandTour',
                },
                {
                    choice: 'Accept Defeat and Go Home',
                    takesYouTo: 'gameOver',
                },
                {
                    choice: ' Ask for another chance',
                    takesYouTo: 'audition',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    grandTour: {
        title: 'The Grand Tour',
        text: ['Finally, after the longest week ever, a 15h flight, and a 30min drive, you’ve arrived at u&me ent.', 'After a tour of the facilities, you are taken to the training room where you meet a mixed group of 19 other trainees.'],
        options: {
            decisionText: 'Before training “officially” begins, you have a bit of free time. You decide to:',
            buttons: [
                {
                    choice: 'Bond with the other trainees through a night of fun-filled activities',
                    takesYouTo: '',
                },
                {
                    choice: 'Sign up for Korean Lessons',
                    takesYouTo: '',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    trainingSchedulePopup: {
        image:  'https://via.placeholder.com/100x100'
    },

    trainingUpdate: {
        title: 'Training Update',
        text: 'Training has been grueling and has left you a bit homesick. You’ve been questioning your decision to take this path. Everyday has become harder and harder to face. You call home/friend, but you don’t get a response. So, you: ',
        options: {
            buttons: [
                {
                    choice: 'Head to Han River for a mental break and  some much needed R&R',
                    takesYouTo: '',
                },
                {
                    choice: 'Head to the practice room. They don’t call it training for nothing./ Weights were meant to be carried.',
                    takesYouTo: '',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    monthlyEvaluation: {
        title: 'Monthly Evaluation',
        text: 'You and the other trainees enter a room full of producers, trainers, and successful artists. After greeting everyone, the head producer announces that today’s evaluation will determine the trainees who will debut. The number of members is not decided, the type of group is not decided. There will be either a girl group, a boy group, a mixed group, or a band.',
        options: {
            buttons: [
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
        image:  'https://via.placeholder.com/100x100'
    },

    monthlyEvaluationPerformance: {
        title: 'Monthly Evaluation performance',
        text: ['You perform your chosen dance:', 'You perform your chosen song:'],
        performance: {
            dance: [],
            song: [],
        },
        options: {
            buttons: [
                {
                    choice: '',
                    takesYouTo: '',
                },
                {
                    choice: '',
                    takesYouTo: '',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
        
    },

    evaluationResultsCongrats: {
        title: 'Evaluation Results',
        text: ['Congratulations!!! You made the group!!!', 'The results are in and … You didn’t make it'],
        options: {
            buttons: [
                {
                    choice: 'You breathe an excited sigh of relief, but your excitement quickly fades as you realize many of your friends did not make it and will be returning home.',
                    takesYouTo: 'nextSteps',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    evaluationResultsUnfortunately: {
        title: 'Evaluation Results',
        text: ['Congratulations!!! You made the group!!!', 'The results are in and … You didn’t make it'],
        options: {
            decisionText: 'The manager instructs you to return to the dorm immediately and pack your things. You’ll be leaving the dorms and returning home tomorrow. You decide to:',
            buttons: [
                {
                    choice: 'Congratulate the trainees who will be debuting, return to the dorm and pack your things, then go out for one last Korean meal.',
                    takesYouTo: 'gameOver',
                },
                {
                    choice: 'Congratulate the trainees who will be debuting. Approach the head producer, ask for another chance explaining why you should receive another chance.',
                    takesYouTo: 'deliberation',
                }
            ],
        },
        image:  'https://via.placeholder.com/100x100'
    },

    evaluationResultsUnfortunatelyDeliberation: {
        title: 'Evaluation Results',
        text: ['Congratulations!!! You made the group!!!', 'The results are in and … You didn’t make it'],
        options: {
            decisionText: 'After hearing your spill, the HP [Random Button]',
            //hp decision will be random depending on the choices below; the choices will take you to a certain place
            buttons: [
                {
                    choice: 'Decides you can have one more shot in the morning. If successful, you can attend the first group meeting afterwards.',
                    takesYouTo: 'monthlyEvaluationPerformance',
                },
                {
                    choice: 'Tells you that you must always be ready and prepared for opportunities. There will be another audition soon for various fields. Come back then and don’t let your chance pass.',
                    takesYouTo: 'gameOver',
                },
            ],
        },
        image:  'https://via.placeholder.com/100x100'
    },

    nextSteps: {
        title: 'Next steps!!!',
        text: 'The manager gives you and your groupmates instructions to meet at the MAIN building (HQ) (the one reserved artists, producers, and other professionals) 1st thing tomorrow morning. You will begin debut preparations starting with assigning official positions, stage names, greetings, a fanbase name, and a group name.',
        options: {
            buttons: [
                {
                    choice: 'You realize that this really isn’t your passion, and you’d like to live a healthy life loving what you do. So, you respectfully decline the offer and book a flight home.',
                    goTo: 'gameOver',
                },
                {
                    choice: 'Looking forward to tomorrow, you go home and sleep for the first time in months. ',
                    goTo: 'dayOne',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    dayOne: {
        title: 'Day 1 ',
        text: 'The day has finally come. Today, you will officially become a part of U&Me Family. The ‘celebrity’ van stops in front of the MAIN building’s entrance. You exit the van and head for the entrance. With a deep breath, you take your first step into HQ. It’s now time for the real work to start. -- The manager enters the room, takes out a piece of paper, and one by one reads the official group positions. --Your name is finally called. As you take in a deep breath, the manager says that you will be: Random button for Band, SS Group, Mixed Group or Solo',
        //textTwo: 'The manager enters the room, takes out a piece of paper, and one by one reads the official group positions.',
        options: {
            //decisionText: 'Your name is finally called. As you take in a deep breath, the manager says that you will be: Random button for Band, SS Group, Mixed Group or Solo',
            buttons: [
                //if group
                {
                    choice: 'Your',
                    takesYouTo: 'groupInfo',
                },
                //if solo
                {
                    choice: 'Your',
                    takesYouTo: 'concept',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    groupInfo: {
        title: 'Group Work',
        text: ["You’ve been given the position of: Random position picker", 'The name of your group will be: Random Group Name Picker  with a fanbase name of: Random Fanbase Name Picker'],
        options: {
            decisionText: '',
            buttons: [
                {
                    choice: 'Your',
                    takesYouTo: 'concept',
                },
                {
                    choice: '',
                    takesYouTo: '',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    concept: {
        title: 'Concept & Stage Name',
        text: 'Your concept has been decided, and it will be: Random Concept -- Your stage name has been decided, and it will be: Random name/Pick for yourself  and your fanbase name will be: Random fanbase name picker -- Now that everything has been decided, the manager gives you the contract to review and the rest of the day off. You read the contract and decide to:',
        //textTwo: 'Your stage name has been decided, and it will be: Random name/Pick for yourself  and your fanbase name will be: Random fanbase name picker',
        options: {
            //decisionText: 'Now that everything has been decided, the manager gives you the contract to review and the rest of the day off. You read the contract and decide to:',
            buttons: [
                {
                    choice: 'Reject the terms. You realize this isn’t for you. It’s too restrictive, and you aren’t really feeling the concept.',
                    takesYouTo: 'gameOver',
                },
                {
                    choice: 'Accept the terms with a few additions.',
                    takesYouTo: 'debutPrepSchedule',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    debutPrepSchedule: {
        image:  'https://via.placeholder.com/100x100'
    },

    finalCountdown: {
        title: 'The Final Countdown',
        text: 'Days have turned into weeks, weeks have turned into months, but the time has finally come. Your manager informs you that debut activities will begin tomorrow. After reviewing the promotion schedule, he leave you with three words --Greatness Awaits..., FIGHTING!!! (asterik -- you can do this), Ring! Ring! Incoming call..although you don\'t recognize the number, it has been months since you\'ve had access to your phone. So...you:',
        options: {
            //decisionText: ['Greatness Awaits...', 'FIGHTING!!! (asterik -- you can do this)', 'Ring! Ring! Incoming call..although you don\'t recognize the number, it has been months since you\'ve had access to your phone. So...you:'],
            buttons: [
                {
                    choice: 'don\'t answer  and look forward to D - 20 promotion release',
                    takesYouTo: 'debutPoster',
                },
                {
                    choice: 'answer it. Someone probably just has a new number', //random result
                    takesYouTo: 'phoneCall',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    phoneCall: {
        title: 'Phone Call',
        text: '“Hello”,  you say. At first there is no response, but as you move to hang up you hear, “You sure you want to go through with this?” You\’re shaken/ taken aback. They continue, “...”',
        options: {
            buttons: [
                //random
                {
                    choice: 'You slowly hang up the phone, unsure..of everything.',
                    takesYouTo: 'terminateContract',
                },
                {
                    choice: 'You abruptly cut the speaker off and tell them to look forward to your upcoming release.',
                    takesYouTo: 'debutPoster',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    terminateContract: {
        title: 'Contract Termination',
        text: 'After some thought, you realize that you’ve had enough and you want out. Although it’s inconvenient, the company allows you and option to pay and leave.',
        options: {
            buttons: [
                {
                    choice: 'You can’t take it anymore. You find someone who will loan you the money to pay for all of the lessons, training, activities, and food you’ve received since joining the company',
                    takesYouTo: 'gameOver',
                },
                {
                    choice: 'You suck it up and get back to work. You made a commitment, and for now, you’ll honor it.',
                    takesYouTo: 'debutStage',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    debutPoster: {
        image:  'https://via.placeholder.com/100x100'
    },

    debutStage: {
        title: 'Congratulations on your debut!!!',
        text: 'You’ve finally debuted and it seems like your even more busy. Every moment of your day is filled with some kind of activity and you feel like you could collapse at any moment...but the looks on your fan’s faces, their comments, and their letters makes it all worth it. --You only have one performance left in your debut promotions, and to celebrate, the fans have sent cake and meals for everyone including production staff to the broadcasting studio. To thank the fans, the manager allows a quick "high touch event" after the recording.',
        //textTwo: 'You only have one performance left in your debut promotions, and to celebrate, the fans have sent cake and meals for everyone including production staff to the broadcasting studio. To thank the fans, the manager allows a quick "high touch event" after the recording.',
        options: {
            buttons: [
                {
                    choice: 'Though this road hasn’t been easy, it’s definitely been filled with great moments. Reflecting on the past, you look forward to future',
                    takesYouTo: 'thankYou',
                },
                {
                    choice: '',
                    takesYouTo: '',
                }
            ]
        },
        image:  'https://via.placeholder.com/100x100'
    },

    thankYou: {
        title: 'Thank You For Playing!!!',
        text: 'I hope that you were able to enjoy your journey. Regretfully, we must end it here. Keep working hard at whatever you choose to do. Greatness Awaits! --Fighting!',
        //textTwo: 'Fighting!',
        image: 'https://via.placeholder.com/100x100'
    },

    //optional
    goodbyeStage: {
        title: 'After the Goodbye stage',
        text: 'Everything has been going well. You’ve had a few more releases through which you have gained more fans. One day, as you are headed to the office you:',
        options: {
            scandal: {
                scenarios: ['Receive a text message showing you in some scandalous pictures from the night you and the other trainees first went out. The message reads “Story drops tomorrow”. Unfortunately, your company couldn’t stop the story from releasing. You receive backlash from netizens and because of it your album release is postponed.']
            },
            languageClasses: {
                scenarios: ['Receive a call asking if you’d like to participate in a new show. The show will be based on showcasing great tourist locations to foreigners. Your company allows you to record the show and because of it you gain more domestic and international fans.']
            }
        },
        image:  'https://via.placeholder.com/100x100'
    },

    gameOver: {
        title: 'Game Over',
        text: 'GoodBye for now. Keep working hard at whatever you choose to do & one day you will be successful!',
        image:  'https://via.placeholder.com/100x100'
    }
}

//add gameboard to html
//add scene
//add text
//add buttons
//add click events
//ensure buttons go to each page clicked automatically

//ensure all text etc loads on each page automatically
//make random portions
//style main portion of game
//add images


//game.innerHTML = "hello";
//game.innerHTML += `<img src = '${gameScenes[scene].image}'/>`;
//game.innerHTML += `<p>${gameScenes[scene].text}</p>`;

function addScene(scene) {
    console.log("scene");
//connect gameboard and js
    const game = document.getElementById('gameBoard');
    
//create a space for all elements to fit without much styling
    let gameSpace = document.getElementById('gameSpace');
    //const gameSpace = document.createElement('div');
    //console.log(gameSpace);

//create a space for buttons
    let buttonSpace = document.getElementById('buttonRow');


//create header-title for each scene
    var pageTitle = document.getElementById('title');
    //let pageTitle = document.createElement('h2');
    pageTitle.innerHTML = `<h2>${gameScenes[scene].title}</h2>`;
    //game.append(pageTitle);
    console.log(pageTitle);

//create text for each scene
    var pageText = document.getElementById('text');
    //let pageText = document.createElement('p');
    pageText.innerHTML = `<p>${gameScenes[scene].text}</p>`;
    console.log(pageText.innerHTML);
    //game.append(pageText);

//create image holder for each scene
//var image = document.getElementById('image');
let image = document.createElement('img');
image.src = gameScenes[scene].image;
gameSpace.append(image);


// create space for answer display
let answer = document.getElementById('answer');
answer.innerText="This is a random Response"



//use for/of loop to add any text to button
    for (const element of gameScenes[scene].options.buttons){
        console.log(element);

    //make buttons on each page depending on how many choices there are
    //create button on each scene load
        let button = document.createElement('button');
        
    //each button needs different words and target locations
        button.innerText = element.choice;
        button.value = element.takesYouTo;
        //button.dataset.goto = element.goTo;
        
    //add buttons to gameboard
        buttonSpace.append(button);

     //when button clicked clear old scene and load scene linked in the button 
        button.addEventListener('click', function(event) {
            console.log(event);
            console.log('clicked');
            console.log(event.target);
            alert('began');
            game.innerHTML = '';
            if (gameScenes[scene] === gameScenes.welcome){
                gameScenes[scene] = gameScenes.auditionPoster;
                addScene(gameScenes[scene]);
            }
            //addScene(event.value);
        }); 
        //when clicked do/run this
        

    }
    // for (const scene in gameScenes) {
    //     let button = document.createElement('button');
    //     button.innerText = scene.options.buttons.choice;
    //     button.value = scene.options.buttons.takesYouTo;

    //     button.addEventListener('click', function(event) {
    //         game.innerHTML = '';
    //         if (button.value === gameScenes[scene]) {
    //             //let goTo = button.value;
    //             addScene(scene);
    //             console.log(scene);
    //         }
    //     });
    // }
}

// if (button.element.takesYouTo === gameScenes[scene]) {
//     append.scene
// }


// var buttons = document.getElementById('button').addEventListener('click', runEvent);
// function runEvent(e) {
//     console.log(e);
//     if ('click') {
//         console.log(e.target.value);
//     }
// }
//html button value= takesyouto; onclick save value in variable load variable on addScene




/*
//'function to clear & load scene'
function newScene(event) {
    console.log('clicked');
    console.log(event.target);
    const game = document.getElementById('gameBoard');
    let gameSpace = document.getElementById('gameSpace');
    //clear gameboard
    game.innerHTML = '';
    gameSpace.innerHTML = '';
    //load scene
    addScene('gameOver')
}
*/

addScene('welcome');


//add html button connect function/event listener --when clicked add scene of whatever you want

//if scene = scene when button clicked go to scene x; or complete styling for game

//button value = blah add scene [blah]




Start New Game
var progress = 0;

let obj = {
    progress: 0,
    text: 'Congrats! You have earned a bonus of $' ,
}

//let showBonus = document.getElementById('showBonus');

const pages = {

    opening: {
        id: 1,
        title: 'startPage',
        text: '',
        buttons: [
            {
                choice: 'Your Adventure Awaits',
                goTo: 'welcome',
            }
        ],
        img: "./media/gameOpen.jpg",
        value: 0
    },
    
    welcome: {
        id: 2,
        title: 'Welcome to the first day of the rest of your Life',
        text: 'Have you ever wanted to stand on stage to sing  and dance in front of your adoring fans? Start your journey now and see if you’ve got what it takes to be Kpop’s Next Great Legend!',
        buttons: [
            {
                choice: 'Begin',
                goTo: 'auditionPoster',
            }
        ],
        img: "./media/clouds.jpg",
    },
    
    auditionPoster: {
        id: 3,
        title: 'Audition Poster',
        text: '',
        buttons: [
            {
                choice: 'Next',
                goTo: 'auditionAnnouncement',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    auditionAnnouncement: {
        id: 4,
        title: 'Overseas audition announcement',
        text: 'Wow! u&me ent has announced they will be holding auditions for new trainee positions open to all. As you know, they debuted the “monster rookie group” last year and they’re looking for new talent for their next group. After giving it some thought, you choose to:',
        buttons: [
            {
                choice: 'Book your flight to LA because you have an audition to get to',
                goTo: 'arriveInLA',
            },
            {
                choice: 'Cry because auditions are only being held in LA and there is no way you can get there.',
                goTo: 'gameOver',
            }
        ],
        img: "./media/auditionPoster.jpg",
    },

    arriveInLA: {
        id: 5,
        title: 'The road to new beginnings',
        text: 'After arriving in LA, you head straight to the venue. You sign in, receive your audition number ____, and are shown to the waiting area.',
        buttons: [
            {
                choice: 'Head in for your audition',
                goTo: 'audition',
            },
            {
                choice: 'Chicken out and go back home',
                goTo: 'gameOver',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    audition: {
        id: 6,
        title: '5, 4, 3, 2, Showtime',
        text: 'You slowly enter the room and find 3 judges staring blankly at you. The first thing you do is:',
        buttons: [
            {
                choice: 'Cue the Music', //+3
                goTo: 'flightToKorea',
            },
            {
                choice: 'Talk about yourself: talk about your name, where you’re from, what you’ll be doing, and an interesting something about you', //+8
                goTo: 'flightToKorea', //random
            },
            {
                choice: 'Say hello in Korean', //+5
                goTo: 'flightToKorea', //random
            },
            // {
            //     choice: 'Cue the Music. Give it your best shot and accept the results.',
            //     goTo: 'flightToKorea'
            // },
            {
                choice: 'Run Away. Stage fright has gotten the best of you.',
                goTo: 'gameOver',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    flightToKorea: {
        id: 7,
        title: 'You MADE IT!!!',
        text: 'Sit back and enjoy the flight!',
        buttons: [
            {
                choice: 'Continue',
                goTo: 'grandTour',
            },
            // {
            //     choice: '',
            //     goTo: '',
            // }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    grandTour: {
        id: 8,
        title: 'The Grand Tour',
        text: ['Finally, after the longest week ever, a 15h flight, and a 30min drive, you’ve arrived at u&me ent.', 'After a tour of the facilities, you are taken to the training room where you meet a mixed group of 19 other trainees.', 'Before training “officially” begins, you have a bit of free time. You decide to:'],
        buttons: [
            {
                choice: 'Bond with the other trainees through a night of fun-filled activities', //+3
                goTo: 'trainingUpdate',
            },
            {
                choice: 'Sign up for Korean Lessons',//+5
                goTo: 'trainingUpdate',
            }
        ],
        img:  'https://via.placeholder.com/100x100'
    },

    trainingUpdate: {
        id: 9,
        title: 'Training Update',
        text: 'Training has been grueling and has left you a bit homesick. You’ve been questioning your decision to take this path. Everyday has become harder and harder to face. You call home/friend, but you don’t get a response. So, you: ',
        buttons: [
            {
                choice: 'Head to Han River for a mental break and  some much needed R&R', //+3
                goTo: 'monthlyEvaluation',
            },
            {
                choice: 'You review your schedule and head to your next event', //+5
                goTo: 'monthlyEvaluation',
            },
            {
                choice: 'Head home. This is more than you wanted',
                goTo: 'gameOver',
            }
        ],
        img: 'https://via.placeholder.com/100x100'
    },

    monthlyEvaluation: {
        id: 10,
        title: 'Monthly Evaluation',
        text: 'It\'s that time again. You and the other trainees enter a room full of producers, trainers, and successful artists. After greeting everyone, the head producer announces that today’s evaluation will determine the trainees who will debut. The number of members is not decided, the type of group is not decided. There will be either a girl group, a boy group, a mixed group, or a band.',
        buttons: [
            {
                choice: 'You take a deep breath and cue the music.', //+2
                goTo: 'evaluationResults',
            },
            {
                choice: 'RunAway',
                goTo: 'gameOver',
            }
        ],
        img: 'https://via.placeholder.com/100x100'
    },

    evaluationResults: { 
        id: 11,
        title: 'CONGRATULATIONS',
        text: 'The results are in and YOU MADE IT!!!',
            //Congrats! You have earned a bonus of $' + obj.progress + ',000.'
        buttons: [
            {
                choice: 'You breathe an excited sigh of relief, but your excitement quickly fades as you realize many of your friends did not make it and will be returning home.',
                goTo: 'nextSteps',
                
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    evaluationResultsUnfortunately: {
        id: 12,
        title: 'Evaluation Results',
        text: 'The results are in and … You didn’t make the group. The manager instructs you to return to the dorm immediately and pack your things. You’ll be leaving the dorms and returning home tomorrow. You decide to:',
        buttons: [
            {
                choice: 'Congratulate the trainees who will be debuting, return to the dorm and pack your things, then go out for one last Korean meal.',
                goTo: 'gameOver',
            },
            {
                choice: 'Congratulate the trainees who will be debuting. Approach the head producer, ask for another chance explaining why you should receive another chance.',
                goTo: 'monthlyEvaluation',
            }
        ],
        img:  'https://via.placeholder.com/100x100'
    },


    nextSteps: {
        id: 13,
        title: 'Next steps!!!',
        text: 'The manager gives you and your groupmates instructions to meet at the MAIN building (HQ) (the one reserved artists, producers, and other professionals) 1st thing tomorrow morning. You will begin debut preparations starting with assigning official positions, stage names, greetings, a fanbase name, and a group name.',
        buttons: [
            {
                choice: 'Looking forward to tomorrow, you go home and sleep for the first time in months. ',
                goTo: 'dayOne',
            },
            {
                choice: 'You realize that this really isn’t your passion, and you’d like to live a healthy life loving what you do. So, you respectfully decline the offer and book a flight home.',
                goTo: 'gameOver',
            },
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    dayOne: {
        id: 14,
        title: 'Day One',
        text: 'The day has finally come. Today, you will officially become a part of U&Me Family. The ‘celebrity’ van stops in front of the MAIN building’s entrance. You exit the van and head for the entrance. With a deep breath, you take your first step into HQ. It’s now time for the real work to start. -- The manager enters the room, takes out a piece of paper, and one by one reads the official group positions. --Your name is finally called. As you take in a deep breath, the manager says that you will be in a group with an "outer space" concept.',
        decisionText: 'Now that everything has been decided, the manager gives you the contract to review and the rest of the day off. You read the contract and decide to:',
        buttons: [
            {
                choice: 'Reject the terms. You realize this isn’t for you. It’s too restrictive, and you aren’t really feeling the concept.',
                goTo: 'gameOver',
            },
            {
                choice: 'Accept the terms with a few additions.',
                goTo: 'debutPoster',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    debutPoster: {
        id: 15,
        title: 'Debut Poster!!!',
        text: 'Picture of Debut Poster Goes Here',
        buttons: [
            {
                choice: 'Continue',
                goTo: 'debutStage',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    debutStage: {
        id: 16,
        title: 'Congratulations on your debut!!!',
        text: 'You’ve finally debuted and it seems like your even more busy. Every moment of your day is filled with some kind of activity and you feel like you could collapse at any moment...but the looks on your fan’s faces, their comments, and their letters makes it all worth it. --You only have one performance left in your debut promotions, and to celebrate, the fans have sent cake and meals for everyone including production staff to the broadcasting studio. To thank the fans, the manager allows a quick "high touch event" after the recording.',
        buttons: [
            {
                choice: 'Though this road hasn’t been easy, it’s definitely been filled with great moments. Reflecting on the past, you look forward to future',
                goTo: 'thankYou',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    thankYou: {
        id: 17,
        title: 'Thank You For Playing!!!',
        text: 'I hope that you were able to enjoy your journey. Regretfully, we must end it here. Keep working hard at whatever you choose to do. Greatness Awaits! --Fighting!',
        img: 'https://via.placeholder.com/100x100',
        buttons: [
            {
                choice: 'Restart', //progress = 0
                goTo: 'welcome'
            }
        ]
    },

    gameOver: {
        id: 18,
        title: 'Game Over',
        text: 'GoodBye for now. Keep working hard at whatever you choose to do & one day you will be successful!',
        buttons: [
            // {
            //     choice: '',
            //     goTo: ''
            // },
            {
                choice: 'Restart', //progress = 0
                goTo: 'welcome',
            }
        ], 
        img: 'https://via.placeholder.com/100x100',
    },
}



function addScene(scene) {
    const game = document.getElementById('game');
    let gameSpace = document.createElement('div');
    gameSpace.classList.add('gameSpace');
    
    let showBonus = document.getElementById('showBonus');
    
    
    //creates a dom nod for the image, then append image to div on dom
    // let img = document.createElement('img');
    // img.src = pages[scene].img;
    // gameSpace.appendChild(img);

    gameSpace.innerHTML += `<h2>${pages[scene].title}</h2>`;
    gameSpace.innerHTML += `<p>${pages[scene].text}</p>`;
    
    for (const element of pages[scene].buttons) {
        let button = document.createElement('button');
        button.classList.add('btn', 'button');
        button.innerText = element.choice;
        button.addEventListener('click', (event) => {
            game.innerHTML = '';
            

            //addScene(event.target.dataset.goto)

            let sceneImg = event.target.dataset.goto;
            switch(sceneImg) {
                case 'opening':
                    document.body.classList.remove('gameOver');
                    document.body.classList.remove('thankYou');
                    document.body.classList.add('gameOpen');
                case 'welcome':
                    document.body.classList.remove('gameOver');
                    document.body.classList.remove('thankYou');
                    document.body.classList.add('clouds');
                    break;
                case 'auditionPoster':
                    document.body.classList.remove('clouds');
                    document.body.classList.add('auditionPoster');
                    break;
                case 'auditionAnnouncement':
                    document.body.classList.remove('auditionPoster');
                    document.body.classList.add('clouds');
                    break;
                case 'arriveInLA':
                    document.body.classList.remove('clouds');
                    document.body.classList.add('hollywood');
                    break;
                case 'audition':
                    document.body.classList.remove('hollywood');
                    document.body.classList.add('micLong');
                    break;
                case 'flightToKorea':
                    document.body.classList.remove('micLong');
                    document.body.classList.add('planeClouds');
                    break;
                case 'grandTour':
                    document.body.classList.remove('planeClouds');
                    document.body.classList.add('clouds');
                    break;
                case 'trainingUpdate':
                    document.body.classList.remove('planeClouds');
                    document.body.classList.add('practice');
                    break;
                case 'monthlyEvaluation':
                    document.body.classList.remove('practice');
                    document.body.classList.add('butterflies');
                    break;
                case 'evaluationResults':
                    document.body.classList.remove('butterflies');
                    document.body.classList.add('congrats');
                    break;
                case 'evaluationResultsUnfortunately':
                    document.body.classList.remove('butterflies');
                    document.body.classList.add('practice');
                    break;
                case 'nextSteps':
                    document.body.classList.remove('congrats');
                    document.body.classList.add('building');
                    break;
                case 'dayOne':
                    document.body.classList.remove('building');
                    document.body.classList.add('clouds');
                    break;
                case 'debutPoster':
                    document.body.classList.remove('clouds');
                    document.body.classList.add('debutPoster');
                    break;
                case 'debutStage':
                    document.body.classList.remove('debutPoster');
                    document.body.classList.add('debutFlowers');
                    break;
                case 'thankYou':
                    document.body.classList.remove('debutFlowers');
                    document.body.classList.add('thankYou');
                    break;
                case 'gameOver':
                    document.body.classList.remove('thankYou');
                    document.body.classList.add('gameOver');
                    break;
            }


            //button.dataset.goto
            switch(button.innerText) {
                case 'Cue the Music': 
                    obj.progress += 15;
                    //console.log(obj.progress);
                    break;
                case 'Say hello in Korean':
                    obj.progress +=  18;
                    //console.log(obj.progress);
                    break;
                case 'Bond with the other trainees through a night of fun-filled activities':
                    obj.progress +=  3;
                    //console.log(obj.progress);
                    break;
                case 'Sign up for Korean Lessons':
                    obj.progress +=  3;
                    //console.log(obj.progress);
                    break;
                // case 'You take a deep breath and cue the music.':
                //     gameSpace.innerHTML += 'opp';
                //     break;
                case 'Restart':
                    obj.progress = 0;
                    //console.log(obj.progress);
                    break;
            }

            //take incrementing value and go to appropriate scene
            if (obj.progress >= 20 && (pages[scene].id === 10)){
                addScene('evaluationResults');
            } else if (obj.progress < 19 && (pages[scene].id === 10)) {
                pages.monthlyEvaluation.buttons[0].goTo = addScene('evaluationResultsUnfortunately');
            } else {
                addScene(event.target.dataset.goto);
            }

            // if (obj.progress >= 20 && (pages[scene].id === 10)){
            //     pages.monthlyEvaluation.buttons[0].goTo = 'evaluationResults';
            // } else if (obj.progress < 19 && (pages[scene].id === 10)) {
            //     pages.monthlyEvaluation.buttons[0].goTo = 'evaluationResultsUnfortunately';
            // }


            //addScene(event.target.dataset.goto);
            
        });
        button.dataset.goto = element.goTo;
        gameSpace.appendChild(button);
        

        
        
    }
    

    



    // if (obj.progress >= 20 && (pages[scene].id === 11)){
    //     let newBonus = document.createElement('div');
    //     newBonus = obj.text + obj.progress + ',000.';
    //     game.append(newBonus);
    // }


    // if (obj.progress >= 20){
    //     let newBonus = document.createElement('div');
    //     newBonus = obj.text + obj.progress + ',000.';
    //     game.append(newBonus);
    // }
    console.log(obj.progress);
    game.appendChild(gameSpace);
}

addScene('opening');