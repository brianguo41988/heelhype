var eventData = [
    {
        id: '1',
        org: 'Carolina Adventures',
        title: 'Lunch Time Climb',
        time: '11 AM - 3 PM',
        location: 'Rams Head Climbing Wall',
        img: 'https://campusrec.unc.edu/wp-content/uploads/2021/06/Rams-Head-Climbing-Wall.jpg',
        description: 'Calling all UNC employees, faculty and staff! If you’ve ever wanted to try climbing, this is your chance. We offer free climbing (without a membership!) for UNC employees every Friday 11 AM – 3 PM throughout the semester. Join us at Rams Head Climbing Wall at Rams Rec Center and stay active during your lunch break. Climbing instruction is also available. Contact Russell Hobart rhobart@unc.edu for more information.',
    },
    {
        id: '2',
        org: 'Carolina Health Samartian Society',
        title: 'Tie-Dye Social',
        time: '12 PM - 2 PM',
        location: 'Carolina Union Room 3409',
        img: 'https://cdn.mos.cms.futurecdn.net/c5RvDi2DnLQej2b73R7R6E-768-80.jpg',
        description: 'Join us for our last social point event of the semester! All materials will be provided!        ',
    },
    {
        id: '3',
        org: 'UNC-CH Spikeball Club',
        title: 'Spikeball Charity Tournament',
        time: '9 AM - 4:30 PM',
        location: 'Finley Fields Soccer Field Center, Chapel Hill, NC',
        img: 'https://i.shgcdn.com/53aad314-db3a-445e-8c6d-626615ca39c2/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        description: "100% of proceeds will be going to Donate Sport! We will also have a donation box for used sports clothing. For more information, please visit their website, https://www.donatesport.org/donate. This Spikeball tournament is open to all!\
        Please visit here to sign up!\
        https://fwango.io/charity-unc\
        9:00am-9:30am: Warm-up/Check-in\
        9:30am-9:45am: Announcements\
        10:00am-12:30pm: Pool Play\
        12:30pm-1:15pm: Lunch Break\
        1:15pm-4:30pm: Bracket Play",
    },
    {
        id: '4',
        org: 'UNC-CH Campus Recreation',
        title: 'Battleship',
        time: '6 PM - 9 PM',
        location: 'Bowman Gray Memorial Pool',
        img: 'https://today.duke.edu/sites/default/files/styles/story_hero/public/025017_battleshipTOP.jpg?itok=a7WjC0JI',
        description: "Time to do battle on the high seas! Gather your crew of up to 4 sailors and head to Bowman Gray Memorial Pool. The last ship floating wins the day! This year, one crew member can serve as a rudder in the water guiding the ship. Sailors in the boat can choose the best weapon to defeat your adversaries, bucket or shield!  Spots are limited, so register today to get ready, climb aboard, and set sail!\
        Date: April 23, 2022\
        Time: 6pm-9pm\
        Location: Bowman Gray Memorial Pool\
        Register for Battleship on Stay Active.\
        Check out our intramural sports on our Intramurals page. Registration periods and dates of play vary and occur throughout the semester.",
    },
    {
        id: '5',
        org: 'UNC Hillel',
        title: 'Shabbat at Hillel',
        time: '5:30 PM - 8 PM',
        location: '210 West Cameron Ave , NC',
        img: 'https://www.ou.org/holidays/files/Shabbat-HaGadol-e1461234408421.jpg',
        description: "Eighth night Passover Seder and Shabbat at Hillel\
        Friday, April 22\
        5:30-6:00pm Schmooze & Snacks\
        6:00-8:00pm Seder",
    },
    {
        id: '6',
        org: 'Interdisciplinary Health Professionals',
        title: 'Human Movement Symposium',
        time: '8 AM - 5 PM',
        location: '130 Dubose Home Lane, Chapel Hill, North Carolina',
        img: 'https://www.pngkey.com/png/detail/423-4230982_medical-research-royalty-free-vector-clip-art-illustration.png',
        description: 'Join the UNC-CH HMSC students for a day of research and career development',
    },
    {
        id: '7',
        org: 'Chi Alpha Christian Fellowship',
        title: 'XAlive',
        time: '7 PM - 8:30 PM',
        location: 'FPG Student Union 3206',
        img: 'https://pbcdn1.podbean.com/imglogo/image-logo/6366729/Chi_Alpha_UNC_logo.png',
        description: "XAlive is a great time for our fellowship to come together and check in with each other. It's a wonderful place to experience a loving community centered on who god is and what He has done in our lives. Each week at XAlive you can expect a time of worship, prater, teaching, and socializing. Come join us!",
    },
    {
        id: '8',
        org: 'Carolina Adventures',
        title: 'Full Moon Paddle',
        time: '6 PM - 9 PM',
        location: 'Jordan Lake',
        img: 'https://www.rei.com/dam/van_dragt_092217_2_0391_basic_kayaking_strokes_lg.jpg',
        description: "Come unwind with an evening of canoeing on Jordan lake. Trip leaders will teach the basics of SUPing (Standup Paddlboarding) including setup, paddle strokes, manuvuer techniques, and water safety. Hopefully we’ll get to see some wading birds, herons, osprey, and eagles. We’ll catch the sunset and maybe see some stars! You will need to wear closed toed shoes that can get wet. Recommended to bring a towel and change of clothes in the event of immersion. Meetup time is dependent on sunset – exact time will be included in pre-trip email. This trip will last around 4 hours. Cost is $19",
    },
    {
        id: '9',
        org: 'Heels Care Network',
        title: 'Carolina Mental Health Update',
        time: '12 PM - 1:30 PM',
        location: 'Online',
        img: 'https://medicine.umich.edu/sites/default/files/images/shared/mental-health-wellness-during-covid-19.jpg',
        description: "Please join us for a campus mental health update during the first reading day of exams: Thursday, April 28, from noon – 1:30 p.m. During the conversation, we will:\
        Revisit themes from the fall semester mental health summit. \
        Recap current efforts toward supporting campus mental health and well-being.\
        Consider the topics for next year’s Carolina Mental Health Seminar Series. \
        Register for the Zoom Link\
        The conversation will be kicked off by Dr. Amy Johnson, Vice Chancellor for Student Affairs, and Dr. Samantha Meltzer-Brody, Chair of the Department of Psychiatry. Dr. Ed Fisher from the Gillings School of Public Health will update you on peer support initiatives.",
    },
    {
        id: '10',
        org: 'Student Wellness',
        title: 'Movie Night at the Bell Tower',
        time: '7 PM - 11:45 PM',
        location: 'Bell Tower Amphitheater',
        img: 'https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_.jpg',
        description: 'Calling All Students! Carolina After Dark is hosting a late night LDOC event and private movie showing. Come enjoy yard games, food, a Photo Booth, and succulent terrarium workshops to celebrate the end of the semester',
    },
    
]






module.exports = eventData;