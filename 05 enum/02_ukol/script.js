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
var House_condition;
(function (House_condition) {
    House_condition[House_condition["HABITABLE"] = 0] = "HABITABLE";
    House_condition[House_condition["NORMAL"] = 1] = "NORMAL";
    House_condition[House_condition["UNINHABITABLE"] = 2] = "UNINHABITABLE";
})(House_condition || (House_condition = {}));
;
var house = {
    windows: 4,
    condition: House_condition.UNINHABITABLE,
};
console.log(house.condition);
