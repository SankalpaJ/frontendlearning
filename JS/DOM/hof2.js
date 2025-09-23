function waiter(orderCallbacks) {
    console.log("Welcome");
    console.log("taking your order to place");
    orderCallbacks.array.array.forEach(order => {
        order();
    });
    console.log("Waiter: order is being processed & served!");
}

function orderPizza() {
    
}
