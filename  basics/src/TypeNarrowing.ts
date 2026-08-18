// Union Type + Type Narrowing
function getProduct(product: string | number) {
    if (typeof product === "string") {
        return `The product is :${product}`
    }
    return `Product id : ${product}`
}

console.log(getProduct("Laptop"));
console.log(getProduct(43));



// Optional Parameter
function showMessage(msg?: string) {
    if (msg) {
        return `your message is: ${msg}`;
    }

    return "No message provided"
}
// Displaying the message
console.log(showMessage("Order placed successfully"));
console.log(showMessage());


// Function with default parameter
function customButtonSize(size: "small" | "medium" | "large" | "default" = "default") {
    if (size === "small") {
        return `Size is: ${size}`;
    }

    if (size === "medium") {
        return `Size is: ${size}`;
    }

    if (size === "large") {
        return `Size is: ${size}`;
    }

    return `Size is: ${size}`;
}

// Displaying the button size
console.log(customButtonSize("small"));
console.log(customButtonSize("medium"));
console.log(customButtonSize("large"));

console.log(customButtonSize());




// Classes
class Car {
    drive() {
        return "Driving a car";
    }
}

class Bike {
    drive() {
        return "Driving a bike";
    }
}

// Type Narrowing with instanceof

function startVehicle(vehicle: Car | Bike) {

    if (vehicle instanceof Car) {
        return vehicle.drive();
    }

    if (vehicle instanceof Bike) {
        return vehicle.drive();
    }
}

console.log(startVehicle(new Car()));
console.log(startVehicle(new Bike()));