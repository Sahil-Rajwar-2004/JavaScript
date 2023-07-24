let x = true;
let y = false;

const AND = (x,y) =>{
    return x && y;
}

const OR = (x,y) =>{
    return x || y;
}

const NAND = (x,y) =>{
    return !(x && y);
}

const NOR = (x,y) =>{
    return !(x || y);
}

const XNOR = (x,y) =>{
    return OR(AND(x,y),NOR(x,y));
}

const XOR = (x,y) =>{
    return AND(OR(x,y),NAND(x,y));
}

console.log(AND(x,y));
console.log(OR(x,y));
console.log(NAND(x,y));
console.log(NOR(x,y));
console.log(XNOR(x,y));
console.log(XOR(x,x));
