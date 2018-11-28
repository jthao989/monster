class Human {
    //when an instance is called, the constructor method is run
    constructor(name, strength){
            //class properties
            this._name = name;
            this._strength = strength;

    }
    get name() {
        return this._name;
        
    }
    get strength(){
        return this._strength;
    }

    powerUp() {
        this._strength += 2;
        console.log('powered up by 2!');
    }
}
let human1 = new Human("Ben", 10);
human1.powerUp();
let human2 = new Human("Ken", 15);
human2.powerUp();
console.log(human1.name);
console.log(human2.name);



class Athlete extends Human{
    constructor(name, strength, ability){
        super(name, strength);
        //human properties already in this class(thanks to super)
        this._ability=ability;

    }
    get ability() {
        return this._ability;
    
    }
}

let player1 = new Athlete("Bob", 25, "Giant Spatula");
let player2 = new Athlete("Patrick", 23, "Giant Club");

console.log(player1.name);
player2.ability;
player2.powerUp();

class Monster {
    //when an instance is called, the constructor method is run
    constructor(name, strength, specialAttack){
            //class properties
            this._name = name;
            this._strength = strength;
            this._specialAttack = specialAttack;
            // this._speed = speed;
            // this._weapon = weapon;
    }
    get name() {
        return this._name;
        
    }
    get stats(){
        return this._strength;
    }
//     get speed(){
//         return this._speed;
//     }
//     get weapon(){
// return this._weapon;

//     }
}
    let goblin1 = new Monster("Goblin", 4, "Goblin Punch", 5, "knife");
console.log(goblin1.name);
console.log(goblin1._strength);
console.log(goblin1._specialAttack);
// console.log(goblin1._speed);
// console.log(goblin1._weapon);

class EvolvedMonster extends Monster{
    constructor(name, strength, ability){
        super(name, strength);
        //human properties already in this class(thanks to super)
        this._ability=ability;

    }
    get ability() {
        return this._ability;
    }
    // get weapon(){
    //     return this.
    // }

}

let enemy1 = new EvolvedMonster("HobGoblin", 15, "Super Goblin Punch", 10, "club");
let enemy2 = new EvolvedMonster("Shaman-Goblin", 11, "Summon Goblin", 8, "staff");

console.log(enemy1.name);
console.log(enemy1.stats);
console.log(enemy1.ability);
console.log(enemy2.name);
console.log(enemy2.stats);
console.log(enemy2.ability);

