// Spread Operator
// Spread operátor umožňuje rozepsat (rozbalit) pole nebo objekt do jednotlivých prvků.

const hobbies: string[] = ["programming", "cars", "3D print"]
const activeHobbies: string[] = ["fitness", "swimming", "running"]

// activeHobbies.push(hobbies)
// activeHobbies.push(hobbies[0], hobbies[1], hobbies[2])
activeHobbies.push(...hobbies)

console.log(activeHobbies)