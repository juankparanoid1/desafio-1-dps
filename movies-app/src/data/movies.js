import { genres } from "./genres";

const movies = [
    {
        "id": 1,
        "price": 9,
        "quantity": 0,
        "title": "100% Wolf",
        "year": 2020,
        "votes": 65,
        "genreIds": [
            10751,
            16,
            14
        ],
        "description": "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf."
    },
    {
        "id": 2,
        "price": 12,
        "quantity": 0,
        "title": "6 Underground",
        "year": 2019,
        "votes": 2869,
        "genreIds": [
            28,
            53
        ],
        "description": "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator."
    },
    {
        "id": 3,
        "price": 19,
        "quantity": 0,
        "title": "Alone",
        "year": 2020,
        "votes": 197,
        "genreIds": [
            53,
            27,
            18
        ],
        "description": "A recently widowed traveler is kidnapped by a cold blooded killer, only to escape into the wilderness where she is forced to battle against the elements as her pursuer closes in on her."
    },
    {
        "id": 4,
        "price": 39,
        "quantity": 0,
        "title": "Assassin 33 A.D.",
        "year": 2020,
        "votes": 22,
        "genreIds": [
            878,
            28,
            12,
            9648
        ],
        "description": "When a billionaire gives a group of young scientists unlimited resources to study the science of matter transfer, the scientists unlock the secrets of time travel. But they soon find out that the project is backed by a militant extremist group, and the billionaire plans to go back in time and prove that Jesus never rose from the dead."
    },
    {
        "id": 99,
        "price": 129,
        "quantity": 0,
        "title": "Ava",
        "year": 2020,
        "votes": 1217,
        "genreIds": [
            28,
            80,
            18,
            53
        ],
        "description": "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong."
    },
    {
        "id": 5,
        "price": 29,
        "quantity": 0,
        "title": "Avengers: Infinity War",
        "year": 2018,
        "votes": 20925,
        "genreIds": [
            12,
            28,
            878
        ],
        "description": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
    },
    {
        "id": 6,
        "price": 49,
        "quantity": 0,
        "title": "Bad Boys for Life",
        "year": 2020,
        "votes": 5936,
        "genreIds": [
            53,
            28,
            80
        ],
        "description": "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel."
    },
    {
        "id": 7,
        "price": 19.90,
        "quantity": 0,
        "title": "Bajocero",
        "year": 2021,
        "votes": 224,
        "genreIds": [
            28,
            80,
            53
        ],
        "description": "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures."
    },
    {
        "id": 8,
        "price": 87,
        "quantity": 0,
        "title": "Batman: Soul of the Dragon",
        "year": 2021,
        "votes": 82,
        "genreIds": [
            16,
            28,
            12,
            80
        ],
        "description": "Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva."
    },
    {
        "id": 9,
        "price": 12.92,
        "quantity": 0,
        "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
        "year": 2020,
        "votes": 6848,
        "genreIds": [
            28,
            80
        ],
        "description": "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord."
    },
    {
        "id": 10,
        "price": 89,
        "quantity": 0,
        "title": "Wonder Woman 1984",
        "year": 2020,
        "votes": 3420,
        "genreIds": [
            14,
            28,
            12
        ],
        "description": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah."
    },
    {
        "id": 11,
        "price": 78,
        "quantity": 0,
        "title": "Яга. Кошмар тёмного леса",
        "year": 2020,
        "votes": 81,
        "genreIds": [
            27
        ],
        "description": "The young family who moved to a new apartment on the outskirts of the city. The nanny hired by them for the newborn daughter quickly gained confidence. However, the older boy, Egor, talks about the frightening behavior of a woman, but his parents do not believe him. The surveillance cameras installed by the father for comfort only confirm everything is in order. Then one day, Egor, returning home, finds no trace of either the nanny or the little sister, and the parents are in a strange trance and do not even remember that they had a daughter. Then Egor, together with his friends, goes in search, during which it turns out that the nanny is an ancient Slavic demon, popularly known as Baba Yaga."
    },
    {
        "id": 12,
        "price": 78,
        "quantity": 0,
        "title": "僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング",
        "year": 2019,
        "votes": 612,
        "genreIds": [
            16,
            28,
            14,
            12
        ],
        "description": "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope."
    },
    {
        "id": 13,
        "price": 99,
        "quantity": 0,
        "title": "急先锋",
        "year": 2020,
        "votes": 175,
        "genreIds": [
            28,
            12,
            80
        ],
        "description": "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization."
    },
    {
        "id": 14,
        "price": 78,
        "quantity": 0,
        "title": "백두산",
        "year": 2019,
        "votes": 178,
        "genreIds": [
            28,
            12,
            53
        ],
        "description": "Stagnant since 1903, at an elevation of 9000', a volcano erupts on the mythical and majestic Baekdu Mountain."
    },
    {
        "id": 15,
        "price": 76,
        "quantity": 0,
        "title": "사냥의 시간",
        "year": 2020,
        "votes": 159,
        "genreIds": [
            18,
            28,
            53
        ],
        "description": "Four young men who want to leave their dystopian world behind and go to a distant paradise execute a money robbery, a daring act that will have unexpected consequences."
    }
]

export const moviesWithGenres = movies.map(movie => {
    const { genreIds, ...rest } = movie;
    delete rest.genreIds;
    return { ...rest, genres: genreIds.map(genreId => genres.find(g => g.id === genreId).name) };
  });
  