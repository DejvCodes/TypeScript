/*
Realitní kancelář a pole klientů
Do následujícího objektu:
const house = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true
}

máte za úkol přidat dvě pole.

První bude mít název vipClients a zde budou uloženy firmy, které mají o dům zájem. 
Firmy budou Build-store, Damage-do, Bum-bum-company.

Druhé pole budou zájemci z řad běžných lidí. Zájemci jsou Daniel Stavitel, Petr Oknorad a Dana
Parketová.

Dále máte do konzole vypsat vždy prvního a posledního z obou dvou polí.

*/

const house = {
    windows: 4,
    doors: 1,
    color: "bílá",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-do", "Bum-bum-company"],
    clients: ["Daniel Stavitel", "Petr Oknorad", "Dana Parketová"],
}

console.log(house.vipClients[0]);
console.log(house.vipClients[2]);

console.log(house.clients[0]);
console.log(house.clients[2]);