//obj to store progress in order to increment and apply value
let obj = {
    progress: 0,
    text: 'Congrats! You have earned a bonus of $' ,
}

//data set to store information for easy access
const pages = {

    opening: {
        id: 1,
        title: '',
        text: '',
        buttons: [
            {
                choice: 'Your Adventure Awaits',
                goTo: 'welcome',
            }
        ],
        img: "./media/gameOpen.jpg",
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
        title: '',
        text: '',
        buttons: [
            {
                choice: 'Next',
                goTo: 'auditionAnnouncement',
            }
        ],
        img: './media/auditionPoster.jpg',
    },

    auditionAnnouncement: {
        id: 4,
        title: '', //Overseas audition announcement
        text: 'Wow! U & Me Entertainment has announced they will be holding auditions in Los Angeles, California for new trainee positions open to all. As you know, they debuted the “Monster Rookie Group” last year and they’re looking for new talent for their next group. After giving it some thought, you choose to:',
        buttons: [
            {
                choice: 'Book Your Flight',
                goTo: 'arriveInLA',
                optionText: 'Book your flight to LA because you have an audition to get to',
            },
            {
                choice: 'Cry - you cant go',
                goTo: 'gameOver',
                optionText: 'Cry because auditions are only being held in LA and there is no way you can get there.',
            }
        ],
        img: "./media/auditionPoster.jpg",
    },

    arriveInLA: {
        id: 5,
        title: 'The road to new beginnings',
        text: 'After arriving in LA, you head straight to the venue. You sign in, receive your audition number and are shown to the waiting area.',
        buttons: [
            {
                choice: 'Head In',
                goTo: 'audition',
                optionText: 'Head in for your audition',
            },
            {
                choice: 'Chicken Out',
                goTo: 'gameOver',
                optionText: 'Chicken out and go back home',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    audition: {
        id: 6,
        title: '      ', //'5, 4, 3, 2, Showtime'
        text: 'You slowly enter the room and find 3 judges staring blankly at you. The first thing you do is: 1) Cue the Music 2) Talk about yourself: talk about your name, where you’re from, what you’ll be doing, and an interesting something about you 3) Say hello in Korean 4)Run Away. Stage fright has gotten the best of you.',
        buttons: [
            {
                choice: 'Option 1', //+3
                goTo: 'flightToKorea',
                optionText:  'Cue the Music',
            },
            {
                choice: 'Option 2', //+8
                goTo: 'flightToKorea',
                optionText: 'Korean Introduction',
            },
            {
                choice: 'Option 3', //+5
                goTo: 'flightToKorea',
                optionText: 'Say hello in Korean',
            },
            {
                choice: 'Option 4',
                goTo: 'gameOver',
                optionText: 'Run Away',
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
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    grandTour: {
        id: 8,
        title: 'The Grand Tour',
        text: 'Finally, after the longest week ever, a 15h flight, and a 30min drive, you’ve arrived at U & Me Ent. After a tour of the facilities, you are taken to the training room where you meet a mixed group of 19 other trainees. Before training “officially” begins, you have a bit of free time. You decide to: 1) Bond with the other trainees through a night of fun-filled activities 2) Sign up for Korean Lessons',
        buttons: [
            {
                choice: 'Option 1', //+3
                goTo: 'trainingUpdate',
                optionText: 'Party',
            },
            {
                choice: 'Option 2',//+5
                goTo: 'trainingUpdate',
                optionText: 'Lessons',
            },
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
                optionText: 'Han River',
            },
            {
                choice: 'You review your schedule and head to your next event', //+5
                goTo: 'monthlyEvaluation',
                optionText: 'Review Schedule',
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
                optionText: 'Perform',
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
        title: 'CONGRATULATIONS! The results are in and YOU MADE IT!!!',
        text: 'You breathe an excited sigh of relief, but your excitement quickly fades as you realize many of your friends did not make it and will be returning home.',
            //Congrats! You have earned a bonus of $' + obj.progress + ',000.'
        buttons: [
            {
                choice: 'Continue',
                goTo: 'nextSteps',
                
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    evaluationResultsUnfortunately: {
        id: 12,
        title: 'Evaluation Results',
        text: 'The results are in and … You didn’t make the group. The manager instructs you to return to the dorm immediately and pack your things. You’ll be leaving the dorms and returning home tomorrow. You decide to: 1) Congratulate the trainees who will be debuting, return to the dorm and pack your things, then go out for one last Korean meal. 2) Congratulate the trainees who will be debuting. Approach the head producer, ask for another chance explaining why you should receive another chance.',
        buttons: [
            {
                choice: 'Option 1',
                goTo: 'gameOver',
                optionText: 'Congratulate the trainees who will be debuting, return to the dorm and pack your things, then go out for one last Korean meal.',
            },
            {
                choice: 'Option 2',
                goTo: 'monthlyEvaluation',
                optionText: 'Congratulate the trainees who will be debuting. Approach the head producer, ask for another chance explaining why you should receive another chance.',
            }
        ],
        img:  'https://via.placeholder.com/100x100'
    },


    nextSteps: {
        id: 13,
        title: 'Next steps!!!',
        text: 'The manager gives you and your groupmates instructions to meet at the MAIN building (HQ) (the one reserved artists, producers, and other professionals) 1st thing tomorrow morning. You will begin debut preparations starting with assigning official positions, stage names, greetings, a fanbase name, and a group name. So: 1) Looking forward to tomorrow, you go home and sleep for the first time in months. 2) You realize that this really isn’t your passion, and you’d like to live a healthy life loving what you do. So, you respectfully decline the offer and book a flight home.',
        buttons: [
            {
                choice: 'Option 1',
                goTo: 'dayOne',
                optionText: 'Looking forward to tomorrow, you go home and sleep for the first time in months. ',
            },
            {
                choice: 'Option 2',
                goTo: 'gameOver',
                optionText: 'You realize that this really isn’t your passion, and you’d like to live a healthy life loving what you do. So, you respectfully decline the offer and book a flight home.',
            },
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    dayOne: {
        id: 14,
        title: '',
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
        title: '',
        text: '',
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
        buttons: [
            {
                choice: 'Restart', //progress = 0
                goTo: 'welcome',
                optionText: 'Restart',
            }
        ],
        img: 'https://via.placeholder.com/100x100',
    },

    gameOver: {
        id: 18,
        title: 'Game Over',
        text: 'GoodBye for now. Keep working hard at whatever you choose to do & one day you will be successful!',
        buttons: [
            {
                choice: 'Next', //progress = 0
                goTo: 'thankYou',
                optionText: 'Next',
            }
        ], 
        img: 'https://via.placeholder.com/100x100',
    },
}


//add scene to html/game
function addScene(scene) {

    const game = document.getElementById('game');
    let gameSpace = document.createElement('div');
    gameSpace.classList.add('gameSpace');


    // let img = document.createElement('img');
    // img.src = pages[scene].img;
    // img.classList.add('image');
    // gameSpace.appendChild(img);

    //adds the h2 and p from data to the gamespace div/node when function is called
    gameSpace.innerHTML += `<h2>${pages[scene].title}</h2>`;
    gameSpace.innerHTML += `<p>${pages[scene].text}</p>`;
    

    // loop through buttons and add them to the div before appending to the page
    for (const element of pages[scene].buttons) {
        let button = document.createElement('button');
        button.classList.add('btn', 'button');
        button.innerText = element.choice;
        button.dataset.optiontext = element.optionText;
        button.addEventListener('click', (event) => {
            game.innerHTML = ''; //clears gameboard
            

            //change body background/css styling using javascript
            let sceneImg = event.target.dataset.goto;
            switch(sceneImg) {
                case 'opening':
                    document.body.classList.remove('gameOver');
                    document.body.classList.remove('thankYou');
                    document.body.classList.add('gameOpen');
                    game.classList.add('startRow', 'startButton');
                    break;
                case 'welcome':
                    document.body.classList.remove('gameOver');
                    document.body.classList.remove('thankYou');
                    document.body.classList.remove('gameOpen');
                    document.body.classList.add('clouds');
                    game.classList.remove('startRow', 'startButton');
                    game.classList.remove('text');
                    break;
                case 'auditionPoster':
                    document.body.classList.remove('clouds');
                    document.body.classList.add('auditionPoster');
                    game.classList.add('startRow');
                    break;
                case 'auditionAnnouncement':
                    document.body.classList.remove('auditionPoster');
                    document.body.classList.add('clouds');
                    game.classList.remove('startRow');
                    break;
                case 'arriveInLA':
                    document.body.classList.remove('clouds');
                    document.body.classList.add('hollywood');
                    game.classList.add('startRow', 'text');
                    break;
                case 'audition':
                    document.body.classList.remove('hollywood');
                    document.body.classList.add('micLong');
                    game.classList.remove('text');
                    break;
                case 'flightToKorea':
                    document.body.classList.remove('micLong');
                    document.body.classList.add('planeClouds');
                    break;
                case 'grandTour':
                    document.body.classList.remove('planeClouds');
                    document.body.classList.add('fireworks');
                    break;
                case 'trainingUpdate':
                    document.body.classList.remove('fireworks');
                    document.body.classList.add('practice');
                    game.classList.remove('startRow');
                    break;
                case 'monthlyEvaluation':
                    document.body.classList.remove('practice');
                    document.body.classList.remove('congrats');
                    document.body.classList.remove('gameOver');
                    document.body.classList.add('butterflies');
                    game.classList.add('startRow');
                    game.classList.remove('text');
                    break;
                case 'evaluationResults':
                    document.body.classList.remove('butterflies');
                    document.body.classList.add('congrats');
                    break;
                case 'evaluationResultsUnfortunately':
                    game.classList.remove('startRow');
                    document.body.classList.remove('butterflies');
                    document.body.classList.add('gameOver');
                    document.body.classList.remove('congrats');
                    break;
                case 'nextSteps':
                    document.body.classList.remove('congrats');
                    document.body.classList.add('building');
                    break;
                case 'dayOne':
                    document.body.classList.remove('building');
                    document.body.classList.add('contract');
                    break;
                case 'debutPoster':
                    document.body.classList.remove('contract');
                    document.body.classList.add('debutPoster');
                    game.classList.add('startRow');
                    break;
                case 'debutStage':
                    document.body.classList.remove('debutPoster');
                    document.body.classList.add('debutFlowers');
                    break;
                case 'thankYou':
                    document.body.classList.remove('debutFlowers');
                    game.classList.add('startRow');
                    document.body.classList.remove('gameOver');
                    document.body.classList.add('thankYou');
                    game.classList.remove('text');
                    break;
                case 'gameOver':
                    document.body.classList.remove('clouds', 'hollywood', 'micLong', 'practice', 'butterflies', 'building', 'contract');
                    document.body.classList.remove('thankYou');
                    document.body.classList.add('gameOver');
                    break;
            }

            //increment progress value for debut/nondebut
            switch(button.dataset.optiontext) {
                //options (1)
                case 'Cue the Music': 
                    obj.progress += 3;
                    break;
                case 'Korean Introduction': 
                    obj.progress += 8;
                    break;
                case 'Say hello in Korean':
                    obj.progress +=  5;
                    break;
                //options (2)
                case 'Party':
                    obj.progress +=  3;
                    break;
                case 'Lessons':
                    obj.progress +=  8;
                    break;
                //options (3)
                case 'Han River':
                    obj.progress +=  3;
                    break;
                case 'Review Schedule':
                    obj.progress += 5;
                    break;
                //options
                case 'Perform':
                    obj.progress += 2;
                    break;
                case 'Restart':
                    obj.progress = 0;
                    break;
            }

            //take incrementing value and go to appropriate scene
            if (obj.progress >= 20 && (pages[scene].id === 10)){
                addScene('evaluationResults');
            } else if (obj.progress < 19 && (pages[scene].id === 10)) {
                addScene('evaluationResultsUnfortunately');
                game.classList.remove('startRow');
                document.body.classList.remove('butterflies');
                document.body.classList.add('gameOver');
                document.body.classList.remove('congrats');
                //pages.monthlyEvaluation.buttons[0].goTo = addScene('evaluationResultsUnfortunately');
            } else {
                addScene(event.target.dataset.goto);
            }
            
        });
        button.dataset.goto = element.goTo;
        gameSpace.appendChild(button);
    }

    console.log(obj.progress);
    game.appendChild(gameSpace);
}

// To begin game you need to append first scene
addScene('opening');