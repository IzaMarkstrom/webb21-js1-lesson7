const coffees = [
    {name: 'Brygg Kaffe', price: 20},
    {name: 'Cappucino', price: 30},
    {name: 'Latte', price: 40}
  ]

// Counts the total cost for all new transacations together
let total1 = 0

// Counts the total cups for all new transacations together 
let totalCups1 = 0


class Customer {
    constructor() {
        this.transactions = []
    }

    /**
    * Adds the information about transactions 
    *
    * @param {purchase} Contains numbers of coffee, coffee price and coffee type.
    */
     addTransaction(transaction){
        this.transactions.push(transaction)
    }

    /**
    * Calculate total cost of coffees per transaction.
    *
    * @param {coffeePrice} The price of the coffee transaction.
    * @param {numberCoffees} The number of coffees transaction.
    * @return {cost} The total cost of those coffees.
    */
     costPerTransaction(coffeePrice, numberCoffees){
        let cost = 0
        return cost += coffeePrice*numberCoffees
    }

    /**
    * Calculate the total cost of all transactions.
    *
    * @param {total} The total cost per purchase.
    * @return {total1} The total cost for all transactions
    */
     totalCost(total){
        return total1 += total
    }

    /**
    * Calculate the total cups per transaction.
    *
    * @param {cups} The desired diameter of the circle.
    * @return {totalCups1} The new Circle object.
    */
    totalCups(cups){
        return totalCups1 += parseInt(cups)
    }
}

function membership(){
    if(totalCups1 < 10){
        return `Brons`
    } else if(totalCups1 < 30){
        return `Silver`
    } else if(totalCups1 >= 30){
        return `Guld`
    }
}


// Create an instance of class Customer
const customer = new Customer()


function onBuyButtonClick() {
    const coffeeTypeValue = document.getElementById("coffee").value
    const coffeeType = coffees[coffeeTypeValue-1].name
    const coffePrice = coffees[coffeeTypeValue-1].price
    const numberCoffees = document.getElementById("numberOfCoffees").value
    const ErrorRespons = document.getElementById("errorMessage")

    const transaction = {type:coffeeType, price:coffePrice, number:numberCoffees}
    customer.addTransaction(transaction)

    customer.totalCups(numberCoffees)

    const totalCostPerTransaction = customer.costPerTransaction(coffePrice, numberCoffees)
    const totalCost = customer.totalCost(totalCostPerTransaction)

    

    const textContainer = document.getElementById("message")
    const message = document.createTextNode(`Du köpte ${transaction.number} st ${transaction.type} för ${transaction.price} kr styck. Total summa: ${totalCostPerTransaction}`)
    textContainer.appendChild(message);
    const lineBreak = document.createElement('br');
    textContainer.appendChild(lineBreak);

    const totalBought = document.getElementById("bought")
    totalBought.innerHTML = `Du har handlat för ${totalCost} kr`

    const membershipStatus = document.getElementById("membership")
    membershipStatus.innerHTML = `Medlemssatus: ${membership()}`

}

