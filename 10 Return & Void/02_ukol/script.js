/*
Vezměte si následující objekt, který jsme již dříve vytvořili:

const house = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50
}

Vaším úkolem je sestrojit funkci, do které když pošlu tento objekt, tak se vypíše věta:
"Tento dům má 4 okna. Počet dveří je 1. Barva domu je bílá. Výška domu je 50 metrů."

Napovím, že obecný předpis funkce bude mít jeden parametr, který si jakýmkoliv způsobem pojmenujete.
Až budete funkci volat, tak tam jen za tento parametr dosadíte objekt house.

Pro vypsání věty můžeme z předchozího videa použít buď znaménko plus (+) nebo
tzv. template string ${něco}. Výběr je na vás.

*/
var house = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50
};
var house2 = {
    windows: 3,
    doors: 2,
    color: "červená",
    height: 60
};
function houseDescription(myObject) {
    console.log("Tento d\u016Fm m\u00E1 ".concat(myObject.windows, " okna. Po\u010Det dve\u0159\u00ED je ").concat(myObject.doors, ". Barva domu je ").concat(myObject.color, ". V\u00FD\u0161ka domu je ").concat(myObject.height, " metr\u016F."));
}
houseDescription(house);
houseDescription(house2);
