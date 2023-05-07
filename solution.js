function findCaterer(budget, people){
  let final = []
  let first = people * 15
  let second = people * 20
  let third = people > 60 ? (people * 30) * 0.80 : people * 30
  if (people === 0) {
    return -1
  } else if (budget > third) {
    final.push(3)
  } else if (budget > second) {
    final.push(2)
  } else if (budget >= first) {
    final.push(1)
  } else {
    return -1
  }
  return +final
}

console.log(findCaterer(940, 70)) // -1
console.log(findCaterer(200, 9)) // 2
console.log(findCaterer(150, 10)) // 1
console.log(findCaterer(300, 9)) // 3
console.log(findCaterer(100, 0)) // -1