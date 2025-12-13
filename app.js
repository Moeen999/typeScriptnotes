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
// ! Getter & Setter
// class User {
//     constructor(public _name: string, public age: number) { }
//     get name() {
//         return this._name;
//     }
//     set name(value: string) {
//         this._name = value
//     }
// }
// let u1 = new User("Moeen", 21);
// ! Static  Members :-  those properties or methods which we want that either we create an insteance of particular class or not should be accesible for this we apply static keyword infront of a variable
// class Static {
//    static testScore = 1;
//    static getRandomScore(){
//         return Math.floor(Math.random()*1000);
//     }
// }
//     Static.getRandomScore();
//     Static.testScore
// ! Abstract classes and methods :- Hiding un-necessary details
// ! Functions in TS + Functions Types
// function test(name: string, age: number, cbFunc: (value: string) => void) { } //* That's all about a function along with its types and callback inside it in the "TS".
// test("Moeen", 21, (value) => {
//     console.log(value);
// })
// ! Optional and default params already discussed above in the classes constructors.
//! Rest Params:- ismian basically ham spread operator ka use krty hain like buhut saray arguents ko jo aik function main use ho rahay hon unko aik "array" main return karta hai.
// function sum(...val: number[]): void {
//     console.log(val);
// }
// sum(1, 2, 3, 5, 56, 7, 8, 85, 4, 3)
// ! Generics in TS
// ? In Funcs
// ? In Interfaces
// ? In classes
//! 1.
// function test<T>(value: T) { //todo: generic basically function ko use krty waqt define krny ka naam hai k ham apnay variables ko kia data type assign krna chahtay hain
//     console.log(value);
// }
// test(1); //? aur call krty waqt agr ham na bhi chahain to fragment laganay ki zaroorat nahi hai k ham yahan batain k kia type hai q k TypeScript khud bakhud infer kr leti hai k kis kis type ki value enter ki hai.
//! 2.
// interface Box<T> { //todo: generics basically interface ko use krty waqt batanay ka tareeqa hai
// value: T;      //todo: k ham is property ka type kia rakhna chahtay hain (baad mein decide hota hai)
// }
// const numBox: Box<number> = { value: 10 };
//? yahan ham ny interface ko call krty waqt type bataya k value number hogi
// const strBox: Box<string> = { value: "Hello" };
//? aur yahan ham ny string type dia so ab value string hi hogi
//! 3.
// class Container<T> { //todo: generic class ka matlab hai k class ko banaty waqt type fix nahi hota
// item: T;         //todo: type baad mein pass hota hai jab class ka object banta hai
// constructor(item: T) {
// this.item = item; //todo: constructor bhi wahi type accept karega jo object banate waqt diya hoga
// }
// show() {
// console.log(this.item); //? TypeScript khud infer kr leta hai k is item ka type kia hai
// }
// }
// const c1 = new Container<number>(100);
//? yahan class ko use krty waqt type number diya to ab item sirf number hoga
// const c2 = new Container<string>("SphereTalk");
//? yahan type string diya to item string hi rahega
// ! Type Assertion
//? Type Casting:- It could be Implicit or explicit no need of example here as it is very minor and basic thing
//? Non-Null Typer Assertion:- applying not operator to make sure that the particular variable is not of type null or undefined 
// let a: null | undefined | number;
// a! =    12;
//! Type Guards
// ? ye neechay dia gaya function type narrowing ka example hai type guards main
// function testing(arg: string | number) {
// if (typeof arg === "string") {
// arg.//? yahan pe TS ko pata chal gaya k arg string hai isliye ab hum string ki methods use kar sakty hain
// }else if (typeof arg === "number") {
// arg.//? yahan pe TS ko pata chal gaya k arg number hai isliye ab hum number ki methods use kar sakty hain
//     }
//     else {throw new Error("pagal ho gaya hai kia");}
// }
// testing("Moeen");
// testing(21);
//! The End <3 😊
