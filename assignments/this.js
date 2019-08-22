/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The implicit this refers to anything left of the dot. 
* 2. The explicit this refers to explicitly calling this outside the object in a function of its own. 
* 3. The bind rule binds the this inside the object to a new function titled 'new' and whatever the name of the new function is.
* 4. Window binding is the default binding of this in global scope. 
*
* write out a code example of each explanation above
*/

// Principle 1

function cat(){
  console.log(this.meow);
}
cat();
const meow = "Thunderclan";

// code example for Window Binding

// Principle 2

// let forestCat = {
//   name: 'Fire',
//   clan: 'Thunderclan',
//   type:  function(){
//     console.log('My clan is ' + this.clan);
//   }
// }

// forestCat.type();

// code example for Implicit Binding

// Principle 3

let forestCat = function(name, clan, type) {
  this.name = name;
  this.clan = clan;
  this.type= type;
};

let Sandstorm = new forestCat('Sandstorm', 'Thunderclan', 'Warrior');
console.log(Sandstorm);

// code example for New Binding

// Principle 4

// var type = function(lead1, lead2, lead3){
//   console.log('My clan is ' + this.clan + ' and I know ' + lead1 + ' , ' + lead2 +  ', and ' + lead3);
// };
// let forestCat = {
//   name: 'Fire',
//   clan: 'Thunderclan',
// };
// var leader = ['Windclan', 'Riverclan', 'Shadowclan']
// type.call(forestCat, leader[0], leader[1], leader[2]);
//type.apply(forestCat, leader)

// code example for Explicit Binding