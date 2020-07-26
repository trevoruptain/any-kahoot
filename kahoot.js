const questions = {
    1: {
        text: "What's the color of the sky?",
        type: 'multiple',
        options: {
            1: 'Red',
            2: 'Blue',
            3: 'Yellow',
            4: 'Green'
        }
    },
    2: {
        text: "What's the color of the sky? (button, not text)",
        type: 'multiple',
        options: {
            1: 'Yellow',
            2: 'Green',
            3: 'Red',
            4: 'Blue'
        }
    },
    3: {
        text: "Suicide Squad",
        type: 'multiple',
        options: {
            1: 'Marvel',
            2: 'DC'
        }
    },
    4: {
        text: "1 byte in bits",
        type: 'multiple',
        options: {
            1: '8',
            2: '64',
            3: '512',
            4: '4096'
        }
    },
    5: {
        text: "In which year were the Beatles founded?",
        type: 'multiple',
        options: {
            1: '1950',
            2: '1955',
            3: '1960',
            4: '1965'
        }
    },
    6: {
        text: "Who first said, 'Knowledge is power'?",
        type: 'multiple',
        options: {
            1: 'Francis Bacon',
            2: 'Zoroaster',
            3: 'Marcus Aurelius',
            4: 'Kanye West'
        }
    },
    7: {
        text: "What are the odds that you will answer this question correctly?",
        type: 'multiple',
        options: {
            1: '100%',
            2: '50%',
            3: '25%',
            4: '0%'
        }
    },
    8: {
        text: "RAM",
        type: 'multiple',
        options: {
            1: 'Random Ass Mom',
            2: 'Relay Access Memory',
            3: 'Random Access Machine',
            4: 'Random Access Memory'
        }
    },
    9: {
        text: "Who is the director of Black Panther?",
        type: 'multiple',
        options: {
            1: 'Chadwick Boseman',
            2: 'Ryan Coogler',
            3: 'Michael B. Jordan',
            4: 'Ron Howard'
        }
    },
    10: {
        text: "If you cut a worm in half, each half will regenerate into a new worm",
        type: 'boolean'
    },
    11: {
        text: "A penny dropped from the top of the Empire State Building will kill you",
        type: 'boolean'
    },
    12: {
        text: "Bananas grow on trees",
        type: 'boolean'
    },
    13: {
        text: "Chemical symbol for Sodium",
        type: 'multiple',
        options: {
            1: 'S',
            2: 'Sm',
            3: 'Na',
            4: 'Fe'
        }
    },
    14: {
        text: "________ has testified before congress.",
        type: 'multiple',
        options: {
            1: 'Elmo',
            2: 'Barney',
            3: 'Big Bird',
            4: 'Tinky-Winky'
        }
    },
    15: {
        text: "Google's original name",
        type: 'multiple',
        options: {
            1: 'FileStack',
            2: 'DogPile',
            3: 'BackRub',
            4: 'BackPage'
        }
    },
    16: {
        text: "Chris's brother",
        type: 'multiple',
        options: {
            1: 'Liam',
            2: 'George',
            3: 'John',
            4: 'Andre'
        }
    },
    17: {
        text: "Mark Zuckerberg founded Facebook",
        type: 'boolean'
    },
    18: {
        text: "Who is the 6th longest-reigning monarch of all time?",
        type: 'multiple',
        options: {
            1: 'Queen Elizabeth I',
            2: 'Queen Elizabeth II',
            3: 'Queen Elizabeth III',
            4: 'Queen Elizabeth IV'
        }
    },
    19: {
        text: "Golden Gate",
        type: 'multiple',
        options: {
            1: 'Warriors',
            2: 'Eagles',
            3: 'Weevils',
            4: 'Bison'
        }
    },
    20: {
        text: "What one is coolest dog?",
        type: 'multiple',
        options: {
            1: 'Lizard',
            2: 'Doggy',
            3: 'Ferret',
            4: 'Ant'
        }
    },
    21: {
        text: "How many wise men visited Jesus at his birth?",
        type: 'multiple',
        options: {
            1: '1',
            2: '3',
            3: '5',
            4: 'Unknown'
        }
    },
    22: {
        text: "What type of insect did John the Baptist eat in the desert?",
        type: 'multiple',
        options: {
            1: 'Cockroaches',
            2: 'Sand fleas',
            3: 'Locusts',
            4: 'Scorpions'
        }
    },
    23: {
        text: "The Baha'i faith, started in 1863, was founded by which religious figure?",
        type: 'multiple',
        options: {
            1: "Baháʼu'lláh",
            2: 'Zoroaster',
            3: 'Gautama Buddha',
            4: 'Mary Baker Eddy'
        }
    },
    24: {
        text: "The Islamic calendar is based on which cycle?",
        type: 'multiple',
        options: {
            1: 'Solar',
            2: 'Lunar'
        }
    },
    25: {
        text: "What sign did Judas give to signal Jesus' identity to the Roman officials?",
        type: 'multiple',
        options: {
            1: 'Pointed at him',
            2: 'Knelt before him',
            3: 'Hugged him',
            4: 'Kissed him'
        }
    },
    26: {
        text: "Judaism believes in hell",
        type: 'boolean'
    },
    27: {
        text: "Who is the first prophet in Islam?",
        type: 'multiple',
        options: {
            1: 'Elijah',
            2: 'Ishmael',
            3: 'Adam',
            4: 'Mohammad'
        }
    },
    28: {
        text: "How old was Joseph Smith's youngest wife?",
        type: 'multiple',
        options: {
            1: '12',
            2: '14',
            3: '16',
            4: '19'
        }
    },
    29: {
        text: "Which gospel was written by a doctor?",
        type: 'multiple',
        options: {
            1: 'Matthew',
            2: 'Mark',
            3: 'Luke',
            4: 'John'
        }
    },
    30: {
        text: "According to the Torah, is it okay to beat your slave?",
        type: 'multiple',
        options: {
            1: 'Yes',
            2: 'No',
            3: 'Yes, as long as they deserve it',
            4: "Yes, as long as they don't die"
        }
    },
    31: {
        text: "Jeffrey Epstein, Ghislaine Maxwell. Keith Raniere, _________",
        type: 'multiple',
        options: {
            1: 'Nicki Clyne',
            2: 'Emily Blunt',
            3: 'Emily Browning',
            4: 'Allison Mack'
        }
    },
    32: {
        text: "Which of these cults believes humans were created by aliens called Elohim, who pretended to be angels?",
        type: 'multiple',
        options: {
            1: "Heaven's Gate",
            2: 'Shining Path',
            3: 'Christian Science',
            4: 'Raëlism'
        }
    },
    33: {
        text: "The Brethren, founded by Jimmie T. Roberts, disallows members from using modern conveniences and forbids children from:",
        type: 'multiple',
        options: {
            1: 'Playing',
            2: 'Eating',
            3: 'Speaking',
            4: 'Crying'
        }
    },
    34: {
        text: "Members of this religious sect were massacred at their compound in Waco, TX in 1993",
        type: 'multiple',
        options: {
            1: 'Branch Davidians',
            2: 'Sign of the Moon',
            3: 'Unification Church',
            4: 'The Path'
        }
    },
    35: {
        text: 'Which cult engaged in a practice of recruiting new members by having sex with them, dubbed "Flirty Fishing"?',
        type: 'multiple',
        options: {
            1: "The People's Temple",
            2: 'The Children of God',
            3: "Heaven's Gate",
            4: "Jehovah's Witnesses"
        }
    },
    36: {
        text: "Which cyanide-laced substance was given to the People's Temple members to facilitate the Jonestown massacre?",
        type: 'multiple',
        options: {
            1: "Fanta",
            2: "Pepsi",
            3: "Orange Juice",
            4: "Grape Kool-Aid"
        }
    },
    37: {
        text: "Which phrase did Charles Manson use to describe the apocalyptic race war he foresaw?",
        type: 'multiple',
        options: {
            1: "Revelation",
            2: "Armageddon",
            3: "Taco Tuesday",
            4: "Helter Skelter"
        }
    },
    38: {
        text: "John Travolta, Elisabeth Moss, Tom Cruise",
        type: 'multiple',
        options: {
            1: "Christian",
            2: "Mormon",
            3: "Scientology",
            4: "Jehovah's Witness"
        }
    },
    39: {
        text: "Amy Adams, Paul Walker, Katherine Heigl",
        type: 'multiple',
        options: {
            1: "Christian",
            2: "Mormon",
            3: "NXIVM",
            4: "Jehovah's Witness"
        }
    },
    40: {
        text: "Prince, Serena Williams, Donald Glover",
        type: 'multiple',
        options: {
            1: "Christian",
            2: "Islam",
            3: "NXIVM",
            4: "Jehovah's Witness"
        }
    },
    41: {
        text: "Who opposed French president Emmanuel Macron in the last election?",
        type: 'multiple',
        options: {
            1: "Angela Merkel",
            2: "Justin Trudeau",
            3: "Marine Le Pen",
            4: "Jacques Cousteau"
        }
    },
    42: {
        text: 'Who ran for President of the United States with the campaign slogan "A chicken in every pot and a car in every garage"?',
        type: 'multiple',
        options: {
            1: "Woodrow Wilson (1912)",
            2: "Calivin Coolidge (1922)",
            3: "Herbert Hoover (1928)",
            4: "Ronald Reagan (1980)"
        }
    },
    43: {
        text: "What name is shared by the chairs of the UK House of Commons and the US House of Representatives?",
        type: 'multiple',
        options: {
            1: "Lord",
            2: "Lorde",
            3: "Speaker",
            4: "Chair"
        }
    },
    44: {
        text: "Why did David Cameron resign as Prime Minister in 2016?",
        type: 'multiple',
        options: {
            1: "Infidelity",
            2: "Brexit",
            3: "Trump's Election",
            4: "Watergate"
        }
    },
    45: {
        text: "Which Elton John song did President Donald Trump use to nickname North Korean leader Kim Jong-Un?",
        type: 'multiple',
        options: {
            1: "Tiny Dancer",
            2: "Honky Cat",
            3: "Rocket Man",
            4: "Pinball Wizard"
        }
    },
    46: {
        text: "Which US President did not renew the Patriot act?",
        type: 'multiple',
        options: {
            1: "Bill Clinton",
            2: "George W Bush",
            3: "Barack Obama",
            4: "Donald Trump"
        }
    },
    47: {
        text: "How many US Presidents have been only children?",
        type: 'multiple',
        options: {
            1: "0",
            2: "1",
            3: "4",
            4: "8"
        }
    },
    48: {
        text: "In 1893, which country became the first to give women the right to vote?",
        type: 'multiple',
        options: {
            1: "Australia",
            2: "New Zealand",
            3: "Wales",
            4: "The Netherlands"
        }
    },
    49: {
        text: "How many Presidents have been impeached?",
        type: 'multiple',
        options: {
            1: "1",
            2: "3",
            3: "5",
            4: "7"
        }
    },
    50: {
        text: "Which Mexican political party was voted out of office in 2000, after 71 years in power?",
        type: 'multiple',
        options: {
            1: "PRO",
            2: "PKF",
            3: "PCB",
            4: "PRI"
        }
    },
    51: {
        text: "Every president lived in the White House",
        type: 'boolean'
    },
    52: {
        text: "China is the world's most populous country",
        type: 'boolean'
    },
    53: {
        text: "You must be at least 33 years old to run for US President",
        type: 'boolean'
    },
    54: {
        text: "George W Bush was the governor of Texas",
        type: 'boolean'
    },
    55: {
        text: "The Teddy bear is named after Theodore Roosvelt",
        type: 'boolean'
    },
    56: {
        text: "Six US presidents have died while in office",
        type: 'boolean'
    },
    57: {
        text: "Alexander Hamilton became president in 1790",
        type: 'boolean'
    },
    58: {
        text: "Lee Harvey Oswald was arrested in a theater",
        type: 'boolean'
    },
    59: {
        text: '"Viva la Vida" was the war cry of the French Revolution',
        type: 'boolean'
    },
    60: {
        text: "Epstein killed himself",
        type: 'boolean'
    },
    61: {
        text: "The male G spot is in the prostrate",
        type: 'boolean'
    },
    62: {
        text: 'The word "Pornography" has Greek origins',
        type: 'boolean'
    },
    63: {
        text: 'People in Victorian times wore pubic wigs',
        type: 'boolean'
    },
    64: {
        text: 'Dildos are outlawed in Mississippi',
        type: 'boolean'
    },
    65: {
        text: 'The first sperm to the egg wins!',
        type: 'boolean'
    },
    66: {
        text: "Knismolagnia is sexual arousal from what?",
        type: 'multiple',
        options: {
            1: "Restraint",
            2: "Tickling",
            3: "Touch",
            4: "Pain"
        }
    },
    67: {
        text: "Which of these animals engages in prostitution?",
        type: 'multiple',
        options: {
            1: "Penguins",
            2: "Otters",
            3: "Seals",
            4: "Dolphins"
        }
    },
    68: {
        text: "Average female orgasm: ___ seconds. Average male orgasm: ___ seconds",
        type: 'multiple',
        options: {
            1: "10, 3",
            2: "30, 10",
            3: "20, 6",
            4: "8, 8"
        }
    },
    69: {
        text: "The average adult has sex around ___ times per year",
        type: 'multiple',
        options: {
            1: "10",
            2: "50",
            3: "80",
            4: "100"
        }
    },
    70: {
        text: "How long is the longest penis in the animal kingdom?",
        type: 'multiple',
        options: {
            1: "14 inches",
            2: "1 meter",
            3: "5 feet",
            4: "10 feet"
        }
    },
    71: {
        text: "Riley",
        type: 'multiple',
        options: {
            1: "Jones",
            2: "Rimjob",
            3: "Reid",
            4: "Green"
        }
    },
    72: {
        text: "Dillion",
        type: 'multiple',
        options: {
            1: "Harper",
            2: "Haliburton",
            3: "Dildo",
            4: "Halpert"
        }
    },
    73: {
        text: "Ryan",
        type: 'multiple',
        options: {
            1: "Hammer",
            2: "Driller",
            3: "Driver",
            4: "Riveter"
        }
    },
    74: {
        text: "Lana",
        type: 'multiple',
        options: {
            1: "Granger",
            2: "Daniels",
            3: "Lipring",
            4: "Rhoades"
        }
    },
    75: {
        text: "Christian ________ Grey",
        type: 'multiple',
        options: {
            1: "Bertelyan",
            2: "Estevelyan",
            3: "Jenelyan",
            4: "Trevelyan"
        }
    },
};

let current = 1;
const startButton = document.querySelector("button[data-functional-selector=start-button]");
let nextButtonListener;

startButton.addEventListener("click", () => {
    listenForQuestion();
});

const listenForQuestion = button => {
    if (button) {
        button.removeEventListener("click", nextButtonListener);
    }

    const question = document.querySelector("div[data-functional-selector=question-block-title]");

    if (question) {
        const span = question.children[0];
        span.innerText = questions[current].text;
        listenForOptions();
    } else {
        setTimeout(listenForQuestion, 20);
    }
};

const listenForOptions = () => {
    const firstOption = document.querySelector("div[data-functional-selector=answer-0]");

    if (firstOption) {
        const question = questions[current];
        const questionTitle = document.querySelector("span[data-functional-selector=block-title]");
        questionTitle.innerText = question.text;

        if (question.type === 'multiple') {
            for (ord in question.options) {
                const currentQuestion = document.querySelector(`div[data-functional-selector=answer-${ord - 1}]`);
                currentQuestion.children[1].children[0].innerText = question.options[ord];
            }
        }

        listenForAnswers();
    } else {
        setTimeout(listenForOptions, 20);
    }
};

const listenForAnswers = () => {
    const scoreboard = document.querySelector("div[data-functional-selector=scoreboard]");

    if (scoreboard) {
        const question = questions[current];
        current += 1;
        const questionTitle = document.querySelector("span[data-functional-selector=block-title]");
        questionTitle.innerText = question.text;

        if (question.type === 'multiple') {
            for (ord in question.options) {
                const currentQuestion = document.querySelector(`div[data-functional-selector=answer-${ord - 1}]`);
                currentQuestion.children[1].children[0].innerText = question.options[ord];
            }
        }

        const nextButton = document.querySelector("button[data-functional-selector=next-button]");

        nextButtonListener = nextButton.addEventListener("click", e => {
            listenForQuestion(e.target);
        });
    } else {
        setTimeout(listenForAnswers, 20);
    }
};
