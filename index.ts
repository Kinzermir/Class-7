//UNITON LITTERALS : WE GIVE MULTIPLE DATA TYPES TO AVOID DYNAIMC CODING 
// ALSO CALLOED NARROWING:

// UNION LITTERALS CODE IS AVAILABLE ON PANAVERSE (LERAN TYPESCRIPT (STEP 04  union litterals))


// let myName : string | null | boolean;
// myName = null;
// console.log(myName)
// myName = "ALI";
// console.log(myName)
// myName = true;
// console.log(myName)
// // myName = 34; it will give error cuz we haven't inffered type (number)
// // console.log(myName)


// let myName : string| null;
// myName = "ALI";           // it won't change into small letters you must declare a variable to lowercase
// myName =myName.toLocaleLowerCase()
// console.log(myName);





// DYNAIMC CODING : But we don't do dynamic coding we infere data type specifically
    // let myName : any;
    //  myName = "hadi"
    //  console.log(myName);
    //   myName = 3;
    //   console.log(myName);
    //   myName = true;
    //   console.log(myName);
  
// simpale way to write:

// let myname : string | number;
// myname = 21;             
// console.log(myname.toString());      common to both types

// myname = "Hello";
// console.log(myname.toLocaleUpperCase()); can be called on string cuz of narrowing (narrowing means above given types me se aik choose krlaina) 

//                  OR

// let myName : string | null;
// myName = "hadi";
// myName = myName.toLocaleUpperCase() for changing in variable you rewrite myname and change in myName what you want (don't write let aain just change them)
// console.log(myName.toUpperCase);


// TERNARAY OPERATOR: Is worked like if else statment. (mtlb condition hote hai)

// let a = 50;
// let result = a<=50? "pass":"fail"; // (here we appleid a condition)
// console.log(result);
// // console.log(Math.random()); //  consist of 0 to 1


// let myAge : number | string;
//  myAge = 16;
// myAge.toFixed
// console.log(myAge);
//                              both won't work
// myAge = "Hello";
// myAge.toLocaleLowerCase()
// console.log(myAge);

// WRONG PRACTICE

// let newAge = Math.random() >0.6 ? "khan": "60"; // Here we have two types (string and number).

// if (newAge==="khan"){           
//     newAge.toLowerCase()       // here it's giving both data types(strign & number) when we give  newAge.
// }else{
//     newAge.                 // here it's giving both data types(strign & number) when we give  newAge.
// }


// FOR ASSIIGNING DATA TYPE WE USE TYPEOF
// Here we use typeOF in if else statement 

// let newAge = Math.random () >0.6 ? "khan":60;
// if (typeof newAge === "string"){
//     newAge.toLocaleLowerCase()  // here it just giving string types when we write newAge.
// }else{
//     newAge.toFixed()   // here it assumes the remaing type which is number
// }
//                          OR

// Here we use typeOf in Ternary Operator

// let newAge = Math.random() > 0.6? "khan":60;
// typeof newAge === "string"
// ? newAge.toLocaleString()   // it will show you string methods
// : newAge.toFixed();       // it will show you automatically number methods


// STRING LITTERALS : WRITE STRINGS IN LITTERALS

// let age : number | "died" | "unkown";
// age = 98;   // OKAY
// age = "died"; // OKAY  
// age = "unkown"; // OKAY 
// age = living;  // ERROR cuz itsn't mentioned above.

// let zia : "zia";
// zia = "zia";//OKAY
// zia = "khan";   //ERROR cuz itsn't mentioned above.



// const b = 10;
// b = 10; it gives error means we cann't assign a value to b 

// TRUTHNESS NARROWING

// let yourname = Math.random()> 0.6 ? "Hadi Mir": undefined;
// if (yourname){                  // value undefined na ho tu value string he ho gi
//     yourname.toLocaleLowerCase();
// }     

// OPTIONAL CONDITIONING:

// let yourname = Math.random()< 0.6 ? "HELLO" : undefined;
// if (yourname){  
//     yourname?.toLocaleLowerCase()      // If result is HELLO then apply tolowercase if it isn't then don't apply cuz it's optional
// }


// TYPE ALLIAS: Using multiple using multiple literalls for different variable 

// it always start from (type) give a name to these union litterals and store a name in a vairable such as:
//  RE-USIBILITY

// type rawData = string | number | boolean | null | undefined;

// // type assigning to a variable which is denote by data
// let data : rawData 

// data = 2333;
// console.log(data);

// // assigning to another variable denote by val
// let val : rawData;

// val = "Hello"
// console.log(val);


// type id = number | string 
// type idmaybe = id | undefined | null    // adding more types in id

// let a : idmaybe
// a = 98;
// console.log(a);

// object:
// console log can with two diff way 
// Here we haven't assigned types

// let teacher = {
//     name : "zeeshan",
//     experience : 12,
// }
// console.log(teacher.name);
// //              OR
// console.log(teacher["name"]);



// OBJECTS WITH DATA TYPES
 // Assigning types 

// let students : {
//     name : string,
//     age : number,
// }={              // or you can write students after = sign it won't give error
//     name : "Hadi",
//     age : 21,
// }
// console.log(students.age);
// console.log(students.name);



// OBJECTS WITH DATA TYPES
 // Assigning types 
// below we assigned a types but these types we cannot reuse 

// let students : {
    // name: string,
    //  age : number
    // }={
//     name : "ali",
//     age : 31,
// }
// console.log(students.name);
// console.log(students.age);


// TYPE ALLIAS (union litterals for diff variable) IN OBJECT 
// we asign type allias to diff object

// type allias = {            
//     name : string,
//     age? : number,        // here we are using age? (optional conditioning) cuz below (students) we don't have age 
// }
// let students : allias = {
//     name : "hadi",
//     age : 21,
    
// }
// console.log(students.name);




// INTERFACE:  there is a lil bit diff bet interface & type allias
// it's strucure is almost like allias 
// here we don't use = sign


// interface ballType {
//     diameter : number,      // assigning type
// }
// interface sphereType {
//     diameter : number
// }

// let ball : ballType = {
//     diameter : 10,
// }
// let sphere : sphereType ={
//     diameter : 20,
// }

// sphere = ball;
// ball = sphere;


// another eg

// interface ballType {
//     diameter : number,
// }
// interface tubeType {
//     diameter : number,
//     length : number,
// }

// let ball : ballType = {
//     diameter : 10
// }
// let tube : tubeType = {
//     diameter : 12,
//     length : 12,
// }

// ball = tube  // okay 
// tube = ball  // error cuz tube requirement isn't avaliable in ball 


// FRESH & STALE:

// // FRESH:  CASE 1
// let mytype : {name : "hadhi",id : 22,}

//   mytype = {id : 23 , name : "ali"}    // we can change id & name vlaues cuz in let it is possible 

//   mytype = {id :23 , yourname : "ali" } // but we cann't write yourname instead of name it's wrong


//  STALE :  reuse krnaa  

// let mytype2 = {id : 31 , name : "James"}
// mytype2 = {id : 21 , name : "Martirn"}

// let mytype3 = {id : 32 , personalname : "Martin"}


// mytype=mytype2     // here mytype2 is stale cuz it is reused

// mytype = mytype3     // missing property    


// // INDEX SIGNATURE 

// // FRESH   CASE 2

// let x : {id : number , [x:string]: any}   // x can have any name we are mentioning types
// x = {id : 1, fullname : "hello", }       
// x = { id : 3 , myName : "hi", address : "gulbahar"}

// // STALE 
// let y : {id : number , [x:string]: any}
// y = {id : 1, fullname : "zia", address : "gulbahar"}

// x=y 

// let mytype4 = {id :2 , name :"tom" , age: 23}

// mytype = mytype4 // mytype only need 2 proprerty which is fullfilled in mytype4
// // In stale exessive property is alowed it won't give error  


// mytype4 = mytype // mytype 4 is stale and thier requirements isn't fullfilled in mytype

// let x = {id : 2 , }
// x = {id : 3 , myname : "kinzer"}

// let y : { id : number , bar?: "hello"}
// y = { id : 23 , myname : "martin"}      //in let we cann't change property name 

// let a : {foo: number}   // number only refer to a type 
// let a1 = {foo:233 , baz :2}
// a = a1

// below fresh is z and stale is z1 

// let z : { foo : number , nar? : "ko"}
// z = {foo : 3 } // nar? is optional above that why we cann't assign a value to thats why nar is reomved
//  let z1 = {foo : 23, baz :23 } in stale we have execive property but it won't give error

//  z = z1  
//  z1 = z


// NESTED OBJECT : its coding is like (allias type) 

// type Authortype= {firstName:string , lastName : number};
//  type Booktype = {author : Authortype, name : "hadi" };   //write name : "sting" instead of "hadi"

// let book : Booktype={
//     author:{
//         firstName:"ali",
//         lastName:32
//     },name : "hadi"
// }

// console.log(book.author.firstName);



// // INTERSECTION

// interface studenttype {
//     studentid : number;
//     name : string
// }
// interface teachertype {
//     teacherid : number;
//     teachername : string;
// }

// type intersection = studenttype & teachertype

// let object : intersection = {
//     studentid : 23,
//     name : " Hadi",
//     teacherid : 34,
//     teachername : "Martin",
// }
// console.log(object.teacherid);
