const userData = [
    {
        name: "Leonardo da Vinci",
        username: "@vinci",
        profilePic: "https://images.unsplash.com/photo-1505695716405-61e75ecc5bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://i.etsystatic.com/11771780/r/il/46951e/984972233/il_570xN.984972233_fe42.jpg",
        tags: ["He/Him", "Renaissance", "Inventor", "Anatomy", "Engineering"],
        aboutMe: "Renaissance polymath, inventor, and artist. Known for the Mona Lisa and The Last Supper. Passionate about combining art with science and engineering. Always carrying my notebook for new ideas and observations.",
        status: "active"
    },
    {
        name: "Vincent Van Gogh",
        username: "@vangogh",
        profilePic: "https://images.unsplash.com/photo-1505695716405-61e75ecc5bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://static01.nyt.com/images/2023/11/02/multimedia/02adaa-armory-review-01-zvlc/02adaa-armory-review-01-zvlc-videoSixteenByNineJumbo1600.jpg",
        tags: ["He/Him", "Post-Impressionism", "Oil Painting", "Nature", "Emotions"],
        aboutMe: "Post-impressionist painter with a passion for bold colors and emotional expression. Finding beauty in sunflowers and starry nights. Creating art that speaks to the soul.",
        status: "active"
    },
    {
        name: "Pablo Picasso",
        username: "@pablopicasso",
        profilePic: "https://images.unsplash.com/photo-1516050327434-9d06ea9bfae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMDU5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI5MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://img.artlogic.net/w_2020,h_1160,c_limit/exhibit-e/5c8fedcea5aa2ccf708b4567/91fe0b4bc877d3cf16cf0181fa6829d2.jpeg",
        tags: ["He/Him", "Cubism", "Modern Art", "Innovation", "Sculpture"],
        aboutMe: "Co-founder of Cubism and revolutionary modern artist. Every act of creation is first an act of destruction. Constantly exploring new styles and pushing artistic boundaries.",
        status: "active"
    },
    {
        name: "Georgia O'Keeffe",
        username: "@georgiaokeeffe",
        profilePic: "https://images.unsplash.com/photo-1509924603848-aca5e5f276d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI1Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-fjqIg2FDhAu7SY23Sta6-jyCINAOC66EQ&s",
        tags: ["She/Her", "Modernism", "Nature", "American Art", "Desert"],
        aboutMe: "Mother of American modernism. Known for large-format paintings of natural forms and flowers. Finding infinite beauty in the New Mexico desert. Color and form are my language.",
        status: "active"
    },
    {
        name: "Michelangelo",
        username: "@michelangelo",
        profilePic: "https://images.unsplash.com/photo-1513906029980-32d13afe6d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTQ4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1543312152-3ec662727229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTIzNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhzfSAEUln1xpVbED9WTmFwajFAT0t_ey3w&s",
        tags: ["He/Him", "Renaissance", "Sculpture", "Fresco", "Architecture"],
        aboutMe: "Renaissance master of sculpture, painting, and architecture. Creator of David and the Sistine Chapel ceiling. Every block of stone has a statue inside it; it is the task of the sculptor to discover it.",
        status: "active"
    },
    {
        name: "Andy Warhol",
        username: "@EkanshGupta",
        profilePic: "https://images.unsplash.com/photo-1450297756549-a553121ddff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTYx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1665029541867-3a6ac3fafd89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTIyMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://upmag.com/wp-content/uploads/2021/07/Trotter-Sholer-NYisOkay-07.06.21-3-1024x768.jpg",
        tags: ["He/Him", "Pop Art", "Screen Printing", "Film", "Commercial Art"],
        aboutMe: "Pop art pioneer and cultural icon. Blending high art with popular culture. In the future, everyone will be world-famous for 15 minutes. Studio party at The Factory tonight!",
        status: "active"
    },
    {
        name: "Marilyn Monroe",
        username: "@marilynmonroe",
        profilePic: "https://images.unsplash.com/photo-1550155864-3033f844da36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTcz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1595121052771-b75779905b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTE5OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://art.art/wp-content/uploads/previews/1/17241.jpg",
        tags: ["She/Her", "Film", "Photography", "Fashion", "Icon"],
        aboutMe: "Hollywood's golden star and timeless icon. Subject of numerous famous artworks, especially by Andy Warhol. Imperfection is beauty, madness is genius, and it's better to be absolutely ridiculous than absolutely boring.",
        status: "active"
    },
]

export default userData;