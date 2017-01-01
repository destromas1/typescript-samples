// TypeScript's typed Argument
function typedFunction(name : string) {
    return "Hello, " + name;
}

const user = "Shahjada Talukdar";

var result:any = typedFunction(user);
console.log(result);


function add(num1:number,num2:number): number {
    return num1 + num2;
}

result = add(5, 3);

console.log(result);