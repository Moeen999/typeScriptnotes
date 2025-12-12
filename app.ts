


// ! Tuples

// let arr: [number, string] = [1, "John Doe"];
// console.log(arr);

// ! enums
// enum UserRoles{
//     ADMIN = 'ADMIN',
//     USER = 'USER',
//     GUEST = 'GUEST'
// }
// UserRoles.ADMIN

// ! Any,unknown,void,Null,Undefined,Never
// let a:any; //? any keyword chahay likho ya na likho wo any hi hai, abhi ye any hai aur isliye hum isme kuch bhi assign kar sakte hai (is sy muraad hai k TS ka control off ho jata hai)
// a = 10;
// a = "Hello";
// a = true;

//! let b:unknown;
//? unknown ka matlab hai k hume nahi pata k isme kya aa sakta hai, isliye hum isme kuch bhi assign kar sakte hai lekin jab hum isko use karenge to hume type assertion karni padegi
// b = 20;
// b = "World";
// b = false;
// b.toUpperCase(); //? ye error dega kyu k hume nahi pata k b me kya hai isliye hume type assertion karni padegi
// if(typeof b === "string"){
// console.log(b.toUpperCase()); //? ab ye chalega kyu k humne check kar liya k b me string hai (ismain pehly type check karna "zaroori" hai phir ussi k according ham koi bhi method use kar sakte hain)
// }

//! function greet():void{
//? void ka matlab hai k ye function kuch return nahi karega
// console.log("Hello, World!");
// ?more similar to C/C++ 'void' keyword used in the main function if we does not want to return anything then we use the main function as "void".
// return 1; //? ye error dega kyu k void function kuch return nahi kar sakta
// }

//! let c:null = null;
//? null ka matlab hai k isme kuch bhi nahi hai lekin isko aik au traha sy bhi use kr sakty hain jisy "UNION"khty hain jesy
// let c: string | null; //? ab hum isme string bhi assign kar sakte hain ya null bhi rakh sakty hain
// c = "moeen";
// c = null;

//! let d:undefined = undefined;
//? undefined ka matlab hai k isme kuch bhi define nahi hai lekin isko bhi hum union k through use kar sakty hain jesy
// let d: undefined | number; //? ab hum isme number bhi assign kar sakte hain ya undefined bhi rakh sakty hain
// d = undefined;
// d = 100;

//! function infiniteFun(): never {
//? never ka matlab hai k ye function kabhi return nahi karega, ye function hamesha error throw karega ya infinite loop me chala jayega
//   while (true) {}
// }
// infiniteFun();
// console.log("main nahi chal paonga");

//! Type Inference
// let a = 20; //? iska matlab hota hai k jab ham variable ko na batain k uski type kia hai aur variable khud apni type pata kr lyta hai to ise type inference khty hain
// a = "Hello"; //? ye error dega kyu k a ki type ab number ho chuki hai aur hum isme string assign nahi kar sakte hain
// console.log(a);

//! Type Annotation
// let b: number | boolean | string; //? jab ham variable ko declare karte hain aur uski type bhi batate hain to ise type annotation khty hain
// b = 30;
// b = true;
// b = "TypeScript";
// console.log(b);
// * kissa mukhtasar colon(:) laga k aagay types chahay wo variable hon ya functions hon ya funcs k params hon wo sab type annotation khlatay hain
// function add(a: number, b: number): number {
//     return a + b;
// }

// ! Interfaces & Types
// ? interface object ki aik shakal hoti hai jisme hum properties aur unki types define kar sakte hain jab k type bhi same kaam karta hai lekin interface zyada flexible hota hai aur hum isko extend bhi kar sakty hain
// interface User{
//     name: string;
//     email: string;
//     password: string;
// gender?: string; //? ye property optional hai matlab agr user na bhi dy to error nahi ayga
// }
// function getUsreData(obj: User) {
//   console.log(`Name: ${obj.name}, Email: ${obj.email}`);
// }
// getUsreData({ name: "Moeen", email: "moeenmalikgmail.com", password: "12345" });

// ! Interface Extension

// interface Person {
//   name: string;
//   email: string;
//   age: number;
//   isEducated: boolean;
// }

// interface Employee extends Person {
//   empId: number;
//   position: string;
// }

// function getData(obj: Employee) {
// obj.isEducated = true; //? is sy ye zaahir hota hai k hum interface extension k through parent interface ki properties ko child interface me use kar sakty hain
//   console.log(
//     `Name: ${obj.name}, Email: ${obj.email}, Age: ${obj.age}, EmpID: ${obj.empId}, Position: ${obj.position}`
//   );
//   console.log(obj.isEducated);
// }

//! Type Aliases
// type chacha = null | string | number;;
// let a: chacha; //? aliases ka matlab sirf itna hai k ham aik type ko aik naam de detay hain jisy hum bar bar use kar sakty hain

// type User = {
//   name: string;
//   email: string;
// };

// type Admin = User & {
//   getUserInfo(user: string): void;
// };

// function getAdminData(val: Admin) {
//   let values = val.name + " " + val.email + " " + val.getUserInfo("NIGGA");
// }
// getAdminData({
//   name: "Moeen",
//   email: "moeen@gmail.com",
//   getUserInfo(user: string) {},
// });



//! OOP in TS
//   class Car{
//     model="Grande";
//     color="green";
//     price="4M"
//   }
//   let car1 = new Car();


// ! constructor
// class Car {
//     constructor(public name: string, public model: number) { }
// }

// let car1 = new Car("civic", 2017)



//! this keyword understanding in TS

// class BootleMaker {
//     constructor(public brand: string, public price: number, public isFree: boolean) {}
//     //! ye
// }
// let b1 = new BootleMaker("coca cola", 60, false);


//! Access modifiers Public, Private and Protected 

// class BottleMaker {
//     private halwa: string = "halwa";
//     constructor(private  name: string) {
//         this.name = name;
//     }
// }

// class ChildBottle extends BottleMaker {
//     constructor(name: string) {
//         super(name);
//     }
//     getBottleName() {
//         console.log(this.name)
//         console.log(this.halwa); //? chahay ye variable private bhi tha aur error bhi aa raha hai lekin TS isko compile kr k hamain output bhi sahi didkhayga
//     }
// }

// let pb1 = new ChildBottle("coke");
// pb1.name="main bhi tabdeel ho gaya hon";
// pb1.getBottleName()


//! Protected Access Modifier

// class BottleMaker {
//     protected halwa: string = "makhboot";
//     constructor(protected name: string) {
//         this.name = name;
//     }
// }
// class ChildBottle extends BottleMaker {
//     constructor(name: string) {
//         super(name);
//     }
//     getBottleName() {
//         console.log(this.name)
//         console.log(this.halwa); //? chahay ye variable protected bhi tha lekin ab ye error nahi de raha kyu k protected variables ko "parent aur uski child" classes me access kiya ja sakta hai
//     }
// }

// let pb1 = new ChildBottle("alhawaaas");
// pb1.getBottleName();
// pb1.name="main error dnga"; //! ye error dega q k name variable protected hai aur hum isko parent aur child class sy bhi bahar access nahi kar sakty hain


//! ReadOnly Properties :👇
//?Poora code is liay nahi likha q k ismian bas itni si baat hai k agr ham chahtay hain k hamaray poory code ya class main koi aik esa variable ho jiski value kabhi change na ho to tab ham us variably k access modifier chahay wo public,private ya proteted ho to usmain hamain us variable k saath "readonly" likhna parta hai


//! Optional Parameters main just jo field like kuch users agr na dena chahatay hon to ham usmain : sy phely ? mark laga dety hain kuch is tarah  
//?public gender ?: string 


//! Paramter Properties :- sy muraad hai k class main alag sy variales declare krny ki bajay aur unhain phir constructor main "this." laga k value assign krnyki bajaye direct acces modifier k saath constructor main hi initialize kra dena. jo k ooper bhi kafi baar ho chuka hai.







