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

const house = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50
}

const house2 = {
    windows: 3,
    doors: 2,
    color: "červená",
    height: 60
}

function houseDescription(myObject) {
    console.log(`Tento dům má ${myObject.windows} okna. Počet dveří je ${myObject.doors}. Barva domu je ${myObject.color}. Výška domu je ${myObject.height} metrů.`);
}
houseDescription(house);
houseDescription(house2);