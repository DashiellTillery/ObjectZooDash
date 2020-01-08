/*var favoriteFood = "bacon";
function sleep(name){
    console.log(name + " sleeps for 8 Hours")
}
function run(){
    eat("tiger","meat");
   sleep("tiger");
    eat("tiger","bacon");
    var t1 = new Tiger("tigger");
    t1.eat("meat");
    t1.eat("kibble");
    t1.sleep();
    var t2 = new Tiger;
}
function eat(name,food){
    console.log(name + " eats " + food);
    if(food ==favoriteFood){
        //console.log("YUM!!! "+ name + " wants more " + food);

    }
}

class Tiger {
    constructor(name) {
        this.name = name;
        this.favoriteFood = "meat";
    }

    function #1
    eat(food){
        console.log(this.name + " eats " + food);
       if(food == "meat"){
            console.log("YUM!!! "+ this.name + " wants more " + food);

        }else{
            this.sleep()
        }
    }
    sleep(){
        console.log(this.name + " sleeps for 8 Hours")
    }

}
class Bear{
    constructor(name) {
        this.name = name;
        this.favoriteFood = "fish";
    }

    function #1
    eat(food){
        console.log(this.name + " eats " + food);
        if(food == "fish"){
            console.log("YUM!!! "+ this.name + " wants more " + food);

       }else{
            this.sleep()
        }
    }
    sleep(){
        console.log(this.name + " sleeps for 4 months")
    }
}*/

class Animal{
    constructor(name,food) {
        this.name = name;
        this.favoriteFood = food;
        AnimalPopulation++
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(this.favoriteFood == food){
            console.log("YUM!!! "+ this.name + " wants more " + this.favoriteFood);

        }else{
            this.sleep()
        }
    }
    sleep(){
        console.log(this.name + " sleeps for 8 Hours")
    }
    static getpopulation(){
        console.log("The animal population is" + AnimalPopulation)
}
}
class Tiger extends Animal{
    constructor(name){
    super(name,"meat")
    }
}
class Bear extends Animal{
    constructor(name) {
        super(name,"fish")
    }
    sleep(){
        console.log(this.name + " sleeps for 4 months")
    }
}
class Unicorns extends Animal{
    constructor(name){
        super(name,"marshmellows")
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud")
    }
}
class Giraffes extends Animal{
    constructor(name){
        super(name,"leaves")
    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(this.favoriteFood == food){
            console.log("YUM!!! "+ this.name + " wants more " + food);
            this.sleep()
        }else{
            console.log("Yuck!"+ this.name +" will not eat "+ food )

        }
    }
}
class Bees extends Animal{
    constructor(name){
        super(name,"pollen")

    }
    eat(food){
        console.log(this.name + " eats " + food);
        if(this.favoriteFood == food){
            console.log("YUM!!! "+ this.name + " wants more " + food);
            this.sleep()
        }else{
            console.log("Yuck!"+ this.name +" will not eat "+ food )

        }
    }
    sleep(){
        console.log(this.name + " never sleeps")
    }
}
class Zookeeper{
    constructor(name){
        this.name = name
    }
    feedanimals(arr,food){
        console.log(this.name + " is feeding " + food + " to " + arr.length + " animals out of " + AnimalPopulation + " Total animals"  )
        for(var i = 0; i < arr.length;i++){
            arr[i].eat(food)
        }

    }


}
AnimalPopulation = 0;
var tigger = new Tiger("Tigger");
var rarity = new Unicorns("Rarity");
var pooh = new Bear("Pooh");
var gemma = new Giraffes("gemma");
var stinger = new Bees("stinger");
var zoebot = new Zookeeper("Zoebot");
var arr = [tigger,stinger,rarity,gemma,pooh];
function run(){
    zoebot.feedanimals(arr,"Meat");

}

/*class Shape {

    constructor(name) {
        this.name = name;
        this.special = true;
    }

    sayName() {
       console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log("Shapes have a wonderful history.");
    }
}


class Polygon extends Shape {

    constructor(height, width) {
        super('Polygon');
        this.height = height;
        this.width = width;
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}*/



