


const book = {
title : "" ,
author : "" ,
isbn : "" ,
isCheckOut : true,
toggleCheckOutStatus: function (isCheckOut){

} 

}




const shoppingCart = {
    item : [
        {
            name : null,
            price :null,
            quantity : null ,
            
        } 
     ],
     AddItems : function (){

         const existingItem = this.items.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ name, price, quantity });
    }
  },

     }
        }
        
        
     removeItem(name) {
    // Find the index of the item with the given name
    const index = this.items.findIndex(item => item.name === name);

    if (index !== -1) {
      // If the item exists, remove it from the cart
      this.items.splice(index, 1);
    }
  },

  calculateTotal() {
    let total = 0;

    // Loop through each item in the cart and calculate the subtotal
    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  },
};
