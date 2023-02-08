const WORKS_INFO = [
    {
        name: "Playground2D",
        small_image: "./assets/Playground2D/Playground2D.svg",
        big_image: "./assets/Playground2D/Playground2D_Big.svg",
        short_description: "A Windows OS framework that handles windowing, graphics, and input. Mainly used as a tool for learning visually.",
        long_description: "A Windows OS framework that handles Windowing, Graphics, and Input. The main use of this framework is for learning and implementing algorithms in a visual manner. This framework is not intended for creating a distributable software. This framework is only tested on Windows OS and only works there.",
        technologies: ["C++", "OpenGL", "GLFW"],
        link_1_name: "Github Repository",
        link_1: "https://github.com/mhamedGd/Playground2D",
        link_2_name: "Documentation",
        link_2: "https://mhamedgd.github.io/Pg2dDocs/",
    },
    {
        name: "PONG 2",
        small_image: "./assets/Pong2/Pong2.svg",
        big_image: "./assets/Pong2/PONG2_Big.svg",
        short_description: "If Atari didn't stop at Pong and Created Pong2, A game that combines Pong and Tennis at its own rules.",
        long_description: "If Atari didn't stop at Pong and Created Pong2, A game that combines Pong and Tennis at its own rules. Made for the (GoedWare Gamejam #7) in 7 days. The game mainly focuses on having fewer features to be more defined and scope-focused on the game itself rather than the featues. The game also features single-screen multiplayer.",
        technologies: ["Unity", "Pixelorama", "Audacity"],
        link_1_name: "Demo",
        link_1: "./assets/Pong2/index.html",
        link_2_name: "itch.io Page",
        link_2: "https://mhamedgd.itch.io/pong-2",
    },
    {
        name: "Block|Block",
        small_image: "./assets/BlockBlock/BlockBlock.svg",
        big_image: "./assets/BlockBlock/BlockBlock_Big.svg",
        short_description: "A simple puzzle game to relax and play. Just complete the map you're given.",
        long_description: "A simple puzzle game to relax and play, Just complete the map you're given. Complete the map that you can find with the right mouse button by triggering the empty tiles. After the tiles are matching with the map press 'Check' to progress. If you've made a mistake, you can press 'Reset' to de-trigger the tiles.",
        technologies: ["Unity", "Audacity"],
        link_1_name: "itch.io Page",
        link_1: "https://mhamedgd.itch.io/blockblock",
        link_2_name: "",
        link_2: "",
    },
    {
        name: "CardWars",
        small_image: "./assets/CardWars/Logo_CardWars.png",
        big_image: "./assets/CardWars/Logo_CardWars_Big.svg",
        short_description: "Clash Royale miniature pixel-art version, made for the 2023 GlobalGameJam.",
        long_description: "A tower defense + cards game where you're the owner of a castle competing to destroy your enemy's castle, While he does as well. The game mixes elements of tower defense with the idea of conjuring troops using cards. The game uses simplistic art with a deep extensive skill margin. You can expand your reach and destroy the enemy in their den with towers..",
        technologies: ["Unity", "Gimp", "Pixelorama", "Audacity"],
        link_1_name: "itch.io Page",
        link_1: "https://mhamedgd.itch.io/cardwars",
        link_2_name: "",
        link_2: "",
    },
];

function SetHighlightedWork(info){
    const PROJECT_NAME = document.querySelector('.main-work-header');
    PROJECT_NAME.textContent = info.name;

    const PROJECT_IMAGE = document.querySelector('.main-work-img');
    PROJECT_IMAGE.setAttribute('src', info.big_image);

    const PROJECT_DESCRIPTION = document.querySelector('.main-work-description');
    PROJECT_DESCRIPTION.textContent = info.long_description;

    const PROJECT_TECHNOLOGIES_LIST = document.querySelector('.main-work-list');
    PROJECT_TECHNOLOGIES_LIST.innerHTML = "";

    for(let i = 0; i < info.technologies.length; i++){
        const PROJECT_TECHNOLOGY = document.createElement('li');
        PROJECT_TECHNOLOGY.classList.add('main-work-list');
        PROJECT_TECHNOLOGY.textContent = info.technologies[i];
        PROJECT_TECHNOLOGIES_LIST.appendChild(PROJECT_TECHNOLOGY);
    }

    const LINK1 = document.querySelector('.link-1');
    LINK1.textContent = info.link_1_name;
    LINK1.setAttribute('href', info.link_1);
    if(info.link_1 == ""){
        LINK1.style.display = 'none';
    }

    const LINK2 = document.querySelector('.link-2');
    LINK2.textContent = info.link_2_name;
    LINK2.setAttribute('href', info.link_2);
    if(info.link_2 == ""){
        LINK2.style.display = 'none';
    }
}

function GenerateWorkCard(info) {
    /*
        <div class="work-card">
            <img class="work-card-img" src="./assets/Playground2D/Playground2D.svg" alt="Playground2D Logo">
            <div class="work-card-info">
                <h3>Playground2D</h3>
                <p>A Windows OS framework that handles windowing, graphics, and input. Mainly used as a tool for learning visually.</p>
                <ul>
                    <li class="first-item">C++</li>
                    <li>OpenGL</li>
                    <li>GLFW</li>
                </ul>
                <div class="see-details-container">
                    <a href="#main-work" class="button-link">See Details</a>
                </div>
            </div>
        </div>
    */
   const WORK_CARD_DIV = document.createElement('div');
   WORK_CARD_DIV.classList.add('work-card');
   document.querySelector('.works').appendChild(WORK_CARD_DIV);

   const WORK_CARD_IMG = document.createElement('img');
   WORK_CARD_IMG.setAttribute('src', info.small_image);
   WORK_CARD_IMG.classList.add('work-card-img');
   WORK_CARD_DIV.appendChild(WORK_CARD_IMG);

   const WORK_CARD_INFO_DIV = document.createElement('div');
   WORK_CARD_INFO_DIV.classList.add('work-card-info');
   WORK_CARD_DIV.appendChild(WORK_CARD_INFO_DIV);

   const WORK_CARD_HEADER = document.createElement('h3');
   WORK_CARD_HEADER.textContent = info.name;
   WORK_CARD_INFO_DIV.appendChild(WORK_CARD_HEADER);

   const WORK_CARD_PARAGRAPH = document.createElement('p');
   WORK_CARD_PARAGRAPH.textContent = info.short_description;
   WORK_CARD_INFO_DIV.appendChild(WORK_CARD_PARAGRAPH);

   const WORK_CARD_TECHNOLOGIES_LIST = document.createElement('ul');
   WORK_CARD_INFO_DIV.appendChild(WORK_CARD_TECHNOLOGIES_LIST);

   for(let i = 0; i < info.technologies.length; i++){
    const WORK_CARD_TECHNOLOGY = document.createElement('li');
    WORK_CARD_TECHNOLOGY.textContent = info.technologies[i];
    WORK_CARD_TECHNOLOGIES_LIST.appendChild(WORK_CARD_TECHNOLOGY);
   }

   const WORK_CARD_BUTTON_DIV = document.createElement('div');
   WORK_CARD_BUTTON_DIV.classList.add('see-details-container');
   WORK_CARD_INFO_DIV.appendChild(WORK_CARD_BUTTON_DIV);

   const WORK_CARD_BUTTON = document.createElement('a');
   WORK_CARD_BUTTON.classList.add('button-link');
   WORK_CARD_BUTTON.textContent = 'See Details';
   WORK_CARD_BUTTON.setAttribute('href', '#highlighted-work');
   WORK_CARD_BUTTON.addEventListener('click', () => {
    SetHighlightedWork(info);
   });
   WORK_CARD_BUTTON_DIV.appendChild(WORK_CARD_BUTTON);
}

for(let i = 0; i < WORKS_INFO.length; i++){
    GenerateWorkCard(WORKS_INFO[i]);
}

SetHighlightedWork(WORKS_INFO[0]);
