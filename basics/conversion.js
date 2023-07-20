let a = 1;
let b = "2";
let c = "3a";
let d = "Hello";
let e = true;
let f = false;
let g = null;
let h = undefined;
let i = NaN;
let j = Infinity;

console.table(
    [
        Number(a),
        Number(b),
        Number(c),
        Number(d),
        Number(e),
        Number(f),
        Number(g),
        Number(h),
        Number(i),
        Number(j)
    ]
)

console.table(
    [
        String(a),
        String(b),
        String(c),
        String(d),
        String(e),
        String(f),
        String(g),
        String(h),
        String(i),
        String(j)
    ]
)

console.table(
    [
        Boolean(a),
        Boolean(b),
        Boolean(c),
        Boolean(d),
        Boolean(e),
        Boolean(f),
        Boolean(g),
        Boolean(h),
        Boolean(i),
        Boolean(j),
        Boolean(-1),
        Boolean(0),
        Boolean(1)
    ]
)
