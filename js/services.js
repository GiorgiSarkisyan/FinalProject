const services = document.querySelector(".services-option")
const activeServices = [{
    id:0,
    text: "Colored Wrap",
    img: "ServicesPageImages/carWrap.png",
    alt: "ColoredWrap"
},
{
    id:1,
    text:"Paint Protection Film",
    img:"ServicesPageImages/PPF.png",
    alt:"PPFLogo"
},
{
    id:2,
    text:"Polishing",
    img:"ServicesPageImages/polishing.png",
    alt:"polishingLogo"
},
{
    id:3,
    text:"Ceramic",
    img:"ServicesPageImages/ceramic.png",
    alt: "ceramicLogo"
}];
const activeServicesSections = [{
    id: "a",
    title: "Colored Wrap",
    video: "ServicesPageVideos/ColoredWrapVideo",
    info: "Colored car wrapping, also known as vinyl wrapping or vehicle wrapping, is a popular method of transforming the appearance of a car by applying a specialized vinyl film to its exterior. Instead of painting the vehicle, the vinyl wrap allows you to change its color or add various designs and patterns without permanently altering the original paintwork",
    price: "The price of car wrapping can vary based on vehicle size, design complexity, vinyl quality, and installer reputation. Basic wraps usually start around $1,500 to $3,000, but prices can be higher for larger vehicles or intricate designs. Surface preparation and repairs may require additional costs."
}]
for (let i = 0; i < activeServices.length; i++) {
    services.insertAdjacentHTML("beforeend",`<div class="service-individual-option">
    <h2>
        ${activeServices[i].text}
    </h2>
    <div class="service-img">
        <img src="${activeServices[i].img}" alt="${activeServices[i].alt}">
    </div>
</div>`)
}
const coloredWrapServiceSection = document.getElementById("a")
const ppfServiceSection = document.getElementById("b")
const polishingServiceSection = document.getElementById("c")
const ceramicServiceSection = document.getElementById("d")
const serviceOptions = document.querySelectorAll(".service-individual-option");
const sections = [coloredWrapServiceSection, ppfServiceSection, polishingServiceSection, ceramicServiceSection];

serviceOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    sections.forEach((section, sectionIndex) => {
      section.style.display = index === sectionIndex ? "block" : "none";
    });
  });
});
