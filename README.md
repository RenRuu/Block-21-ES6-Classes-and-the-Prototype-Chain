DOM Review;
    - Grabbing elements from the dom
        single node - getElementById, querySelector
        multiple nodes - getElementByClassName, querySelectorAll

    - Adding elements to the dom
        -createElement, append, appendChild

        document.createElement - to create un-ordered list

      const currentUser = users[i];
      listElement.innerHTML = 'Name: ${currentName.name}, Age: ${currentUser.age}, Occupation: ${currentUser.occupation}  
      - how to access an object in the array

    - Changing text
        - innerText, innerHTML
    

Object Review;
    Definition 
    attributes
    methods / functions
    "this" keyword

    ex)
            const exampleObject = {
                    exampleKey: "exampleValue"
            } 

            const user = {
                name_first: "Rin",
                name_last: "Rust,
                age: 27,
                friends: [{}, {}, {}],
                last_logged_in: "2023/....",
                online: true,
                logFullName() {
      method >    console.log(user.name_first + " " + user.name_last)
                }
            } 

            user.logFullName()


Object Prototype Chain;
    An object prototype chain is a way for objects to inherit properties and methods from other objects.
        In JS, every object has a prototype property that refers to another object.
    Each object has a private property which holds a link to another object called its prototype.
        That prototype object has a prototype of its own, and so on until an object reached with null as its prototype.
        (JavaScript only has one construct with inheritance - objects)

        Example: - is more beneficial through the console on a browser than in VSCode 
        const user = {
            name_first : "Jackie"
        }

        const proto = user.__proto__;
        console.log("proto: ", proto);


*arrays are special types of objects*
        const arr = [];

        console.log(arr.__proto__);



    Classes = special types of functions 
        enables the prototype-based inheritance that has been part of JS from the start.
        provide a more familiar and easier to use syntax for defining and working with objects and their prototypes.

        Cast: Dog shaped 
        Final product (object) Ziggy the dog


    Keywords - Extends
        used in class declarations or class expressions.
            creates a class that is a child og another class.

            Person Class
                Properties ) personName, personAge, gender
                Methods ) get personalinfo

            Student Class
                Properties ) personName, person.Age, gender, standard, collegeName, grade
                Methods ) get personinfo, get studentinfo, get grade 

    Keywords - Super
        Used to
            access properties on an object literal or classes [[Prototype]]
            invoke a superclass's constructor

    
