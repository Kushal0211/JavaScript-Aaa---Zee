const user = {}

// console.log(user);
user.name = "Kushal"
user.age = 19
user.isLoggedIn = true
user.marks = [9,9,8,9,7,9,10,10]
user.sign = Symbol("Kush")

/*

console.log(user);

console.log(typeof user.sign);
ans -> Symbol

console.log(typeof user);
ans -> object

console.log(typeof user.sign); 
Ans - ---> symbol

*/


/* seems Object Nesting is going on*/

const family = {
    head : {

        husband : "ABC",
        wife : "DEF",
      
        child1 : {
            husband : "GHE",
            wife : "IJK",
           
           
            child1 : {
                husband : "LMN",
                wife : "OPQ",
                child1 : "RST"
            }
        }
    }
}

/*

console.log(family.head.child1.child1.child1);
ans -> RST 



console.log(family.head.child1.child1.wife);
ans -> OPQ 



Object concatination

const obj1 = {1:"a", 2:"b"}
const obj2 = {2 : "c", 3 : "d"}
const obj3 = {4 : "d", 5: "e"}


console.log({obj1,obj2,obj3});
ans -> 

{
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '2': 'c', '3': 'd' },
    obj3: { '4': 'd', '5': 'e' }
}

console.log("-------------------------------------------------");

console.log(Object.assign({}, obj1,obj2,obj3));
ans -> { '1': 'a', '2': 'c', '3': 'd', '4': 'd', '5': 'e' }



console.log("-------------------------------------------------");

console.log({...obj1,...obj2,...obj3});
ans -> { '1': 'a', '2': 'c', '3': 'd', '4': 'd', '5': 'e' }



Sumamry : TO NEST MULTIPLE OBJ OR TO MERGE 
1. ... SPREAD OPERATOR
2. Object.assign(OBJ1, OBJ2, OBJ3)
3. {OBJ1,OBJ2,OBJ3}


console.log(Object.keys(family));
ans -> [ 'head' ] 
bcz head is the only Object in family
if you noticed keys are in the arrays so obviosly its data type is gonna be array(object)



console.log("-------------------------------------------------");

console.log(Object.values(family));
ans -> 
[
  {
    husband: 'ABC',
    wife: 'DEF',
    child1: { husband: 'GHE', wife: 'IJK', child1: [Object] }
  }
]

console.log("--------------------------------------------------");
console.log(Object.entries(family)); 

*/