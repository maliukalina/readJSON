const beers = require("./beers.json")

//for (i=0; i<beers.length; i++) {
  //console.log(beers[i].name)



//enter a number from 0 to 170 var

//output the name,price,the average raiting in ** (Math.round)


//let number = 45

//let beersid = beers[i]

/*function beerParameters(number) {
  for (i=0; i<beers.length; i++) {
    if (number === 1) {
      console.log(beers[i].name)
  }
 
 }
}
beerParameters()*/

/*let number = 3

function searchBeer(beers) { 
  for(i=0; i>beers.length; i++) {
    if ( number === beers[i]) {
      console.log(beers[i].name)
    }
  }

}
searchBeer()

function returnsFullName(person) {
  const fullName = `${person.firstName} ${person.lastName} `
  //const fullName = person.firstName + " " + person.lastName
  console.log(fullName)
}

for(let i=0; i< students.length; i++) {
  returnsFullName(students[i])*/



function returnsBeer () {
  let beerNum = 1
  
  console.log(beers[beerNum].name)
  console.log(beers[beerNum].price)

  let star = Math.round(beers[beerNum].rating.average)
    let str = ""
    for (i=0; i<star; i++) {
      str=str.concat("*")
      
    }
    console.log(str)
}

returnsBeer()
