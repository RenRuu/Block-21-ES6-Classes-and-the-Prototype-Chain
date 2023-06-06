
//Capitalizing the function "home" is the creation of an object type
//KeyWords
// this
// new

// const user = {
//     name_first: "Rin"
//     loginFistName() {
//         console.log(this.name_first)
//     }
// }


// function Home(type, rooms) {
//     this.type = type;
//     this.rooms = rooms;
//     this.logRooms = function() {
//         console.log(this.rooms);
//     }
// }

// Home.prototype.logType = function() {
//     console.log(this.type);
// }

// const home1 = new Home("apartment", 2);
// const home2 = new Home("house", 4);
// const home3 = new Home("condo", 1);

// home1.logType(); 
// home2.logType();
// home3.logType();

// home1.logRooms();


class Dog {
    constructor(color, eyeColor, height, length, width) {
        // will take in any arguments that we want to giv it
        this.color = color;
        this.eyeColor = eyeColor;
        this.height = height;
        this.length = length;
        this.width = width;
    }

    sit() {
        console.log("the dog sits")
    }

    layDown() {
        console.log("the dog ;ays down");
    }

    shake() {
        console.log("the dog shakes");
    }

    logColor() { 
        console.log("The dog's color is: ", this.color)
    }

}

const ziggy = new Dog("brown", "blue", "2 ft", "4 ft", "1 ft");
const buster = new Dog("golden", "brown", "2 ft", "4 ft", "1 ft");

ziggy.logColot();
buster.logColor();