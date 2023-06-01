// index.html Smash Games - Home
// blast.html Smash Games - Inferno Blast

const data = {
    brandName: "Smash Games",
    pages: [
        {
            name: "index",
            pageName: "Home",
            callToAction: {
                src: "images/SmashGamesLogo-short.png",
                altText: "Smash Games Logo"
            }
        },
        {
            name: "blast",
            pageName: "Inferno Blast",
            blocks: [
                { 
                    type: "call-to-action",
                    src: "images/Inferno-Jumbotron.png",
                    altText: "Inferno Blast Gameplay",
                    buttonLinkSrc: "https://steampowered.com",
                    buttonLinkText: "Buy now on Steam"
                },
                {
                    type: "description",
                    text: "text here"
                },
                {
                    type: "deck",
                    cards: [
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-2-Short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Dynamic Environments",
                            body: "Navigate through a variety of fiery landscapes, including lava pits, crumbling ruins, and demonic strongholds."
                        },
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-1-Short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Upgradeable Weapons",
                            body: "Customize your arsenal with a range of weapons and power-ups, including flamethrowers, rocket launchers, and more.",
                        },
                        {
                            type: "card",
                            src: "images/Inferno/Inferno-3-Short.png",
                            altText: "Inferno Blast Gameplay",
                            title: "Epis Boss Battles",
                            body: "Face off against towering demon bosses, each with their own unique strengths and weaknesses.",
                        }
                    ],

                },
                {
                    type: "requirements",
                    platforms: [
                        "steam",
                        "playstation",
                        "xbox",
                        "facebook",
                        "twitter",
                        "instagram",
                        "patreon",
                        "twitch",
                        "youtube",
                    ],
                    requirements: [
                        {
                            type: "minimum-requiremnents",
                            title: "Minimum Requirements",
                            requirements: [
                                { title: "OS", value: "Win7" },
                                { title: "Processor", value: "Intel 13 or Ryzen 3"},
                                { title: "RAM", value: "8gb"},
                                { title: "Graphics", value: "GeForce GTX 570"},
                                { title: "Storage", value: "1gb HDD"},
                            ]
                        },
                        {
                            type: "recommended-requiremnents",
                            title: "Recommended Requirements",
                            requirements: [
                                { title: "OS", value: "Win11" },
                                { title: "Processor", value: "Intel 19 or Ryzen 7"},
                                { title: "RAM", value: "16gb"},
                                { title: "Graphics", value: "GeForce GTX 2000"},
                                { title: "Storage", value: "5gb SSD"},
                            ]
                        },
                    ]                       
                },
                {
                    type: "wishlist",
                    title: "Wishlist",
                },
                {
                    type: "faq",
                    questions: [
                        { question: "what does this do?", answer: "stuff"},
                    ]
                }
            ],

        }
    ],
}

console.log(data.pages[1].blocks[2].cards[1].body);