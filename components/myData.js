const yearDifference = () => {
    const birthDate = new Date("Dec 21, 1998");
    const diff =
        new Date(new Date() - new Date(birthDate)).getFullYear() - 1970;

    return diff;
};

export const myData = {
    my_image:
        "https://ik.imagekit.io/harrsh/Harrsh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651077804202?tr=w-1080,h-1080",
    name: "Harsh Patel",
    current_position: "Senior Software Engineer",
    about: {
        age: yearDifference(),
        dob: "21 Dec 1998",
        maritalStatus: "Never married",
        height: "5'8\"",
        weight: "75 kgs",
        religion: "Hindu",
        motherTongue: "Gujarati",
        annualIncome: "Rs. 6 - 7 lakhs per annum",
        familyIncome: "Rs. 12 - 13 lakhs per annum",
        location: "Ahmedabad",
        motherCaste: "Mother - Vaishnav Vania",
        fatherCaste: "Father - Kadva Patel",
        description: [
            {
                id: 0,
                data: "I'm an old-school guy with values for life. I enjoy exploring new places, meeting new people, writing and reading blogs. I love philosophy, psychology, travelling and photography. I am tech savvy and love new gadgets and softwares.",
            },
            {
                id: 1,
                data: "I am looking for someone who's understanding, caring and respectful towards me and my family. I also want my partner to work full-time to support the family.",
            },
        ],
        blogLink: "harsh2124.wordpress.com",
        familyDescription:
            "My dad is a wood trader and mom is a home-maker. I am a single child.",
        educationDescription: "I had done B.Tech in Computer Engineering.",
        occupationDescription:
            "I am a Software Developer working as a full-time Web developer in Ahmedabad.",
    },
    education: [
        {
            id: 0,
            duration: "2016 - 2020",
            field: "B.Tech in Computer Engineering",
            university: "Gujarat Technological University",
        },
    ],
    job: [
        {
            id: 0,
            duration: "2020 - Present",
            position: "Web Developer",
            city: "Ahmedabad",
        },
        {
            id: 1,
            duration: "2019 - 2020",
            position: "Python Developer (Internship)",
            city: "Ahmedabad",
        },
    ],
    family: {
        motherName: "Meetaben Patel",
        motherOccupation: "Housewife",
        motherContact: 9638668120,
        fatherName: "Haribhai Patel",
        fatherOccupation: "Businessman (Wood Trader)",
        fatherContact: 9825038120,
        sister: 0,
        brother: 0,
        familyStatus: "Middle class",
        familyType: "Nuclear family",
        familyValues: "Liberal",
    },
    lifestyle: {
        habits: {
            food: "Pure vegetarian",
            drink: "Non alcoholic",
            smoke: "Non smoker",
        },
        assets: {
            house: "Yes",
            car: "Yes",
        },
        languagesKnown: [
            {
                id: 0,
                data: "English",
            },
            {
                id: 1,
                data: "Gujarati",
            },
            {
                id: 2,
                data: "Hindi",
            },
        ],
        bloodGroup: "B+",
        residentialStatus: "Indian",
        physicalChallenges: "None",
    },
    myLikes: {
        hobbies: [
            {
                id: 1,
                data: "Cooking",
            },
            {
                id: 2,
                data: "Photography",
            }
        ],
        interests: [
            {
                id: 0,
                data: "Writing",
            },
            {
                id: 1,
                data: "Reading / Book clubs",
            },
            {
                id: 2,
                data: "Listening to music",
            },
            {
                id: 3,
                data: "Movies",
            },
            {
                id: 4,
                data: "Sports",
            },
            {
                id: 5,
                data: "Video / Computer games",
            },
            {
                id: 6,
                data: "Yoga / Meditation",
            },
            {
                id: 7,
                data: "Blogging",
            },
        ],
    },
    horoscopeDetails: {
        manglik: "Non Manglik",
        dob: "21 Dec 1998",
        time: "21:45 hours",
        city: "Ahmedabad, India",
        sunSign: "Cancer",
    },
    partnerPreferences: {
        age: `${yearDifference() - 3} to ${yearDifference()}`,
        height: "5'0\" to 5'8\"",
        religion: "Hindu",
        community: [
            {
                id: 0,
                data: "Patel (all)",
            },
            {
                id: 1,
                data: "Vaishnav (all)",
            },
        ],
        country: "India",
        state: [
            {
                id: 0,
                data: "Gujarat",
            },
            {
                id: 1,
                data: "Maharashtra",
            },
            {
                id: 2,
                data: "Madhya Pradesh",
            },
            {
                id: 3,
                data: "Rajasthan",
            },
        ],
        diet: [
            {
                id: 0,
                data: "Vegetarian",
            },
            {
                id: 1,
                data: "Vegan",
            },
            {
                id: 2,
                data: "Jain",
            },
        ],
    },
    contactDetails: {
        phone_one: 9099976321,
        phone_two: 9773195484,
        whatsApp: 9099976321,
        email_one: "me.harrsh.patel@gmail.com",
        email_two: "me@harrsh.com",
    },
};
