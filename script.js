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
                        { question: "what does that do", answer: "that stuff"},
                        { question: "what does any of this do", answer: "stuff I think"},
                    ]
                }
            ],

        }
    ]
}

// we need a handle on the title
let page = data.pages[1];

document.title = data.brandName + " - " + page.pageName;
// get access to the brand name and change to data.brandName
document.getElementById("brand").innerHTML = data.brandName.toUpperCase();

// get access to the page title h1 and change it to page.pageName
document.getElementById("pageName").intterHTML = page.pageName

// this is the code to create blocks

// <div class="call-to-action">
    // <img src="images/Inferno-Jumbotron.png" alt="Inferno Blast Gameplay" />
    // <br />
    // <a class="btn" href="https://steampowered.com" target="_blank">Buy Now on Steam! <i class="fa-brands fa-steam-symbol"></i></a>
// </div>

createCallToAction(page.blocks[0]);

function createImage(imgData) {
    let img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;

    return img;
}

function createButtonLink(linkData) {
    let link = document.createElement("a");
    link.classList.add("btn");
    link.href = linkData.buttonLinkSrc;
    link.target = "_blank";
    link.innerHTML = linkData.buttonLinkText + ' <i class="fa-brands fa-steam-symbol"></i>';
    return link;
}

function createCallToAction(blockData) {
    // get the main container
    let container = document.getElementById("main");

    // create our block
    let block = document.createElement("div");
    block.classList.add("call-to-action");

    // add our image
    block.appendChild(createImage(blockData));
    block.appendChild(createButtonLink(blockData));

    // add our breake
    block.appendChild(document.createElement("br"));
    // add our call to action button


    // add our block to main
    container.appendChild(block);
}