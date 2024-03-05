function updateSkill(skillElement, valuePrompt) { //funkce updateSkill ve které jsou uloženy promenné skillElement (HTML prvek pro pruh pokroku dovednosti) a valuePrompt (hodnota, která aktualizuje hodnoty prvků dovednosti = je to zadané od uživatele)
  const progressBar = skillElement.querySelector(".skill__progress"); //proměnná (const) progressBar, je vytvořena pro uložení hodnoty na HTML prvek skill__progress a je obsažen uvnitř prvku, který je uložen v proměnné skillElement
  const skillValue = skillElement.querySelector(".skill__value"); //proměnná (const) skillValue, je vytvořena pro uložení hodnoty na HTML prvek skill__value a je obsažen uvnitř prvku, který je uložen v proměnné skillElement

  skillValue.textContent = `${valuePrompt} / 100`; // proměnná skillValue bude viditelná na stránce jako hodnota, kterou zadal uživatel do prompt / 100
  progressBar.style.width = valuePrompt + "%"; //proměná progressBar se styluje díky .style.width = prompt a % nastavuje šířku pruhu v CSS
}

const htmlSkill = document.querySelector("#skill1"); //proměnná, která vybírá prvky z HTML podle id
const cssSkill = document.querySelector("#skill2");
const jsSkill = document.querySelector("#skill3");


const html = Number(prompt("Zadej svou úroveň v HTML")); //uživatel zadá úroveň
if (html >= 0 && html <= 100) { //pokud je číslo větší než 0 a zároveň větší než 100, 
  updateSkill(htmlSkill, html); // aktualizují se pruhy
} else {                        // pokud tomu tak není
  alert("Neplatná hodnota - zadej číslo 0 - 100"); //vypíše se, že hodnota je neplatná
}

const css = Number(prompt("Zadej svou úroveň v CSS"));
if (css >= 0 && css <= 100) {
  updateSkill(cssSkill, css);
} else {
  alert("Neplatná hodnota - zadej číslo 0 - 100");
}

const javaScript = Number(prompt("Zadej svou úroveň v JavaScriptu"));
if (javaScript >= 0 && javaScript <= 100) {
  updateSkill(jsSkill, javaScript);
} else {
  alert("Neplatná hodnota - zadej číslo 0 - 100");
}