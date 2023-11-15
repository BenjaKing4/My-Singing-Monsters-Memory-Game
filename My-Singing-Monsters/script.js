const imageFilenames = [
    "Bowgart.png", "Clamble.png", "Do.png", "Drumpler.png", "E_Bowgart.png",
    "E_Clamble.png", "E_Drumpler.png", "E_Entbrat.png",
    "E_Furcorn.png", "E_Fwog.png", "E_Ghazt.png", "E_Mammott.png", "E_Maw.png",
    "E_Noggin.png", "E_Oaktopus.png", "E_Potbelly.png", "E_Pummel.png",
    "E_Punkleton.png", "E_Shrubb.png", "E_T-Rox.png", "E_Toe Jammer.png",
    "E_Wubbox.png", "Entbrat.png", "Fa.png", "Furcorn.png", "Fwog.png",
    "G'joob.png", "Ghazt.png", "La.png", "Mammott.webp", "Maw.png", "Mi.png",
    "Noggin.png", "Oaktopus.png", "Parlsona.png", "Potbelly.png", "Pummel.png",
    "Punkleton.png", "R_Bowgart.png", "R_Clamble.png", "R_Drumpler.png",
    "R_Entbrat.png", "R_Furcorn.png", "R_Fwog.png", "R_G'joob_.png", "R_Ghazt.png",
    "R_Mammott.png", "R_Maw.png", "R_Noggin.png", "R_Oaktopus.png", "R_Potbelly.png",
    "R_Pummel.png", "R_Punkleton.png", "R_Shrubb.png", "R_T-rox.png", "R_Toe Jammer.png",
    "R_Wubbox.png", "Re.png", "Shrubb.png", "Shugabush.png", "Sol.png", "T-Rox.png",
    "Tawkerr.png", "Ti.png", "Toe Jammer.png", "Wubbox.png", "Shards.webp",
    "Food.png", "XP.png", "Blank.png", "Coin.png", "Key.png"
];

const menuContainer = document.getElementById("menu");
const imageGrid = document.getElementById("image-grid");
const searchBar = document.getElementById("search-bar");
const templatesDropdown = document.getElementById("templates-dropdown");
let selectedImage = null;

const blankImage = '<div class="grid-cell"><div class="image" draggable="true" style="position: absolute; width: 100px; height: 100px;"><img src="img/Blank.png" alt="Blank" class="image"></div></div>';
const gridCell = '<div class="grid-cell"></div>';


const templates = {
    "empty": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell

    ],
    "1/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, blankImage, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, blankImage, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "2/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "3/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "4/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, gridCell, gridCell, blankImage, blankImage, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, blankImage, gridCell, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "5/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "6/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, blankImage, gridCell, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, blankImage, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, blankImage, gridCell, gridCell,
        gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell,
        gridCell, blankImage, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell, gridCell, blankImage, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "7/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell,
        gridCell, gridCell, gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "8/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell,
        gridCell, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, blankImage, gridCell,
        gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, gridCell,
        gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, gridCell,
        gridCell, blankImage, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, blankImage, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ],

    "9/9": [
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, blankImage, blankImage, gridCell, blankImage, blankImage, gridCell, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, blankImage, gridCell, blankImage, blankImage, gridCell, blankImage, gridCell, gridCell,
        gridCell, gridCell, blankImage, blankImage, gridCell, blankImage, blankImage, gridCell, blankImage, blankImage, gridCell, gridCell,
        gridCell, gridCell, blankImage, gridCell, blankImage, blankImage, gridCell, blankImage, blankImage, blankImage, gridCell, gridCell,
        gridCell, gridCell, gridCell, blankImage, blankImage, gridCell, blankImage, blankImage, blankImage, blankImage, gridCell, gridCell,
        gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell, gridCell
    ]
};


templatesDropdown.addEventListener("change", handleTemplateChange);

function handleTemplateChange() {
    const selectedTemplate = templatesDropdown.value;
    renderTemplate(templates[selectedTemplate]);
}

function renderTemplate(template) {
    imageGrid.innerHTML = template.join('');
    setupImageGridEventListeners();
}

function setupImageGridEventListeners() {
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.addEventListener("click", handleImageGridClick);
    });
}

imageFilenames.forEach(filename => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.innerHTML = `<img src="img/${filename}" alt="${filename.split('.')[0]}">`;
    menuItem.addEventListener("click", () => handleImageClick(filename));
    menuContainer.appendChild(menuItem);
});

searchBar.addEventListener("input", handleSearch);

function handleImageClick(filename) {
    selectedImage = filename;
    document.querySelectorAll(".menu-item").forEach(item => {
        item.style.border = "none";
    });

    const selectedMenuItem = document.querySelector(`.menu-item img[alt="${filename.split('.')[0]}"]`);
    selectedMenuItem.parentElement.style.border = "2px solid #3498db";
}

function handleImageGridClick() {
    if (selectedImage) {
        const newItem = document.createElement("div");
        newItem.className = "image";
        newItem.style.position = "absolute";
        newItem.style.width = "100px";
        newItem.style.height = "100px";
        newItem.draggable = true;

        newItem.innerHTML = `<img src="img/${selectedImage}" alt="${selectedImage.split('.')[0]}" class="image">`;

        newItem.addEventListener("click", () => handleImageClick(selectedImage));
        this.appendChild(newItem);
        saveCoordinates(newItem);
        selectedImage = null;
        document.querySelectorAll(".menu-item").forEach(item => {
            item.style.border = "none";
        });
    }
}

function saveCoordinates(element) {
    console.log(`Saved coordinates: X=${element.style.left}, Y=${element.style.top}`);
}

function handleSearch() {
    const searchTerm = searchBar.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const imageName = item.querySelector('img').alt.toLowerCase();
        if (imageName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}