const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: {beanRquirement:10, price: 5},
    americano: {beanRquirement:5, price: 2.5},
    doubleShot: {beanRquirement:15, price: 8},
    frenchPress: {beanRquirement:12, price: 6}
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType].beanRquirement>this.beans){
        console.log("Sorry we're all out of beans");
        return true;
    }
    else if (this.drinkRequirements[drinkType] && this.drinkRequirements[drinkType].beanRquirement<=this.beans) {
      this.beans -=this.drinkRequirements[drinkType].beanRquirement;
    }
    else {
      console.log("Sorry we dont make " + drinkType);
      return true;
    }
  },
  money: 100,

  buyBeans: function(numBeans) {
    let price = 0.5 * numBeans;
    if (price > this.money) {
      console.log("You don't have eanogh money");
    }
    else {
      this.money -= price;
      this.beans += numBeans;
    }
  },

  buyDrink: function(drinkType){  
    if (this.makeDrink(drinkType)) {
      return;
    }
    else {
      this.money +=this.drinkRequirements[drinkType].price;
    }
  }
  
}


coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); 
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
coffeeShop.buyBeans(70);
coffeeShop.buyBeans(10);

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("hvfkjcl;a")