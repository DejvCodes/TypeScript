/* Realitní kancelář a stav domu
 
Máte následující objekt:
 
const house = {
    windows: 4
}
 
Mimo objekt vytvoříte enum s názvem House_condition (stav domu) a naplníte ho třemi hodnotami:
habitable (obyvatelný),
normal (normální),
uninhabitable (neobyvatelný).
 
Do objektu house přidáte vlastnost condition a přiřadíte z enum, že je neobyvatelný.
 
Vypíšte tuto vlastnost do konzole pomocí console.log - do konzole se vypíše jen číslo
 
*/
enum House_condition {HABITABLE, NORMAL, UNINHABITABLE};

const house = {
    windows: 4,
    condition: House_condition.UNINHABITABLE,
}
console.log(house.condition);