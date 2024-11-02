const userData = [
    {
        name: "Leonardo da Vinci",
        username: "@vinci",
        profilePic: "https://images.unsplash.com/photo-1505695716405-61e75ecc5bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        tags: ["He/Him", "Renaissance", "Inventor", "Anatomy", "Engineering"],
        aboutMe: "Renaissance polymath, inventor, and artist. Known for the Mona Lisa and The Last Supper. Passionate about combining art with science and engineering. Always carrying my notebook for new ideas and observations.",
        status: "active"
    },
    {
        name: "Vincent Van Gogh",
        username: "@vangogh",
        profilePic: "https://images.unsplash.com/photo-1505695716405-61e75ecc5bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        tags: ["He/Him", "Post-Impressionism", "Oil Painting", "Nature", "Emotions"],
        aboutMe: "Post-impressionist painter with a passion for bold colors and emotional expression. Finding beauty in sunflowers and starry nights. Creating art that speaks to the soul.",
        status: "active"
    },
    {
        name: "Pablo Picasso",
        username: "@pablopicasso",
        profilePic: "https://images.unsplash.com/photo-1516050327434-9d06ea9bfae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMDU5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI5MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1274&q=80",
        tags: ["He/Him", "Cubism", "Modern Art", "Innovation", "Sculpture"],
        aboutMe: "Co-founder of Cubism and revolutionary modern artist. Every act of creation is first an act of destruction. Constantly exploring new styles and pushing artistic boundaries.",
        status: "active"
    },
    {
        name: "Georgia O'Keeffe",
        username: "@georgiaokeeffe",
        profilePic: "https://images.unsplash.com/photo-1509924603848-aca5e5f276d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTI1Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        tags: ["She/Her", "Modernism", "Nature", "American Art", "Desert"],
        aboutMe: "Mother of American modernism. Known for large-format paintings of natural forms and flowers. Finding infinite beauty in the New Mexico desert. Color and form are my language.",
        status: "active"
    },
    {
        name: "Michelangelo",
        username: "@michelangelo",
        profilePic: "https://images.unsplash.com/photo-1513906029980-32d13afe6d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTQ4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1543312152-3ec662727229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTIzNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        tags: ["He/Him", "Renaissance", "Sculpture", "Fresco", "Architecture"],
        aboutMe: "Renaissance master of sculpture, painting, and architecture. Creator of David and the Sistine Chapel ceiling. Every block of stone has a statue inside it; it is the task of the sculptor to discover it.",
        status: "active"
    },
    {
        name: "Andy Warhol",
        username: "@EkanshGupta",
        profilePic: "https://images.unsplash.com/photo-1450297756549-a553121ddff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTYx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1665029541867-3a6ac3fafd89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTIyMQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        tags: ["He/Him", "Pop Art", "Screen Printing", "Film", "Commercial Art"],
        aboutMe: "Pop art pioneer and cultural icon. Blending high art with popular culture. In the future, everyone will be world-famous for 15 minutes. Studio party at The Factory tonight!",
        status: "active"
    },
    {
        name: "Marilyn Monroe",
        username: "@marilynmonroe",
        profilePic: "https://images.unsplash.com/photo-1550155864-3033f844da36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybCxib3l8fHx8fHwxNjg5NzcxMTcz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        storyImage: "https://images.unsplash.com/photo-1595121052771-b75779905b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLGdpcmwsd29tZW4sYm95fHx8fHx8MTY4OTc3MTE5OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
        postImg: "https://images.unsplash.com/photo-1534083264897-aeabfc7daf8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        tags: ["She/Her", "Film", "Photography", "Fashion", "Icon"],
        aboutMe: "Hollywood's golden star and timeless icon. Subject of numerous famous artworks, especially by Andy Warhol. Imperfection is beauty, madness is genius, and it's better to be absolutely ridiculous than absolutely boring.",
        status: "active"
    },
]

export default userData;