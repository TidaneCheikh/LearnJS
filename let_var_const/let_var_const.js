function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10, car var a une portée de fonction
}
exampleVar();

function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // 20
    }
    // console.log(y); // ReferenceError: y is not defined, car y a une portée de bloc
}
exampleLet();

function exampleConst() {
    const z = 30;
    // z = 40; // TypeError: Assignment to constant variable.

    const obj = { name: "Alice" };
    obj.name = "Bob"; // Cela fonctionne, car on modifie une propriété de l'objet, pas la référence elle-même.
    console.log(obj.name); // Bob
}
exampleConst();

function example() {
    // var
    if (true) {
        var a = 1;
        let b = 2;
        const c = 3;
    }
    console.log(a); // 1 (var a une portée de fonction)
    // console.log(b); // ReferenceError: b is not defined (let a une portée de bloc)
    // console.log(c); // ReferenceError: c is not defined (const a une portée de bloc)

    // let
    let d = 4;
    d = 5; // Réaffectation possible
    console.log(d); // 5

    // const
    const e = 6;
    // e = 7; // TypeError: Assignment to constant variable.
    console.log(e); // 6

    const arr = [1, 2, 3];
    arr.push(4); // Modification possible
    console.log(arr); // [1, 2, 3, 4]
}

example();