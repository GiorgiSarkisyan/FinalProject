const teamCards = document.querySelector(".aboutus-team-cards");
const wrappers = [
{
    id: 0,
    name: "Sergo Maisuradze",
    teamPosition: "Owner",
    img: "AboutUsPageImages/UnknownMan.jpg",
    alt: "Owner"
},
{
    id: 1,
    name: "Nino Maisuradze",
    teamPosition: "Co-Owner - PPF Wrapper",
    img: "AboutUsPageImages/UnknownMan.jpg",
    alt: "Wrapper",
},
{
    id: 2,
    name: "Bacho Kvelashvili",
    teamPosition: "Wrapper",
    img: "AboutUsPageImages/UnknownMan.jpg",
    alt: "Wrapper",
},
{
    id: 3,
    name: "Gocha Kolotauri",
    teamPosition: "Polisher",
    img: "AboutUsPageImages/UnknownMan.jpg",
    alt: "Polisher",
}
];
for (let i = 0; i < wrappers.length; i++) {
    teamCards.insertAdjacentHTML("beforeend", 
    ` 
    <div class="team-card">
        <div class="team-card-img">
            <img src="${wrappers[i].img}" alt="${wrappers[i].img}">
        </div>
        <div class="team-card-title">
            <h3>
            ${wrappers[i].name}
            </h3>
        </div>
        <div class="team-card-teamposition">
            <h4>
            ${wrappers[i].teamPosition}
            </h4>
        </div>
    </div>`)
}
