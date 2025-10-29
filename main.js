// 1
/*
const product = [
    { "id": 1, "nome": "teclado", "preco": 70.0 },
    { "id": 2, "nome": "monitor", "preco": 270.0 },
    { "id": 3, "nome": "mouse", "preco": 30.0 },
    { "id": 4, "nome": "notepad", "preco": 10.0 }
];
console.table(product);
*/
const fs = require("fs");
/*
try {
    const text = fs.readFileSync("products.json", "utf8");
    JSON.parse(text);
    console.log("Json válido");
} catch (error) {
    console.error("Json inválido");
}

//2
const pedidos = [
    { id: 1, cliente: "Marisa", total: 6 },
    { id: 2, cliente: "Katia", total: 2 },
    { id: 3, cliente: "Tereza", total: 9 }

];

try {
    const pedido = JSON.stringify(pedidos, null, 2);
    fs.writeFileSync("pedido.json", pedido);
    const text = fs.readFileSync("pedido.json", "utf-8");
    JSON.parse(text);
    console.log("json válido");
} catch (error) {
    console.error("json inválido");
}

console.table(pedidos, ["id", "cliente"]);

// 7 - Filter
const pedMaior = pedidos.filter(u => u.id < 3);
console.table(pedMaior);

// 8 - Single object file and validate it
const users = { theme: "string", language: "string", notifications: false };

try {
    const user = JSON.stringify(users, null, 2);
    fs.writeFileSync("config.json", user);
    const text = fs.readFileSync("config.json", "utf-8");
    JSON.parse(text);
    console.log("Docomento válido!")
} catch (error) {
    console.error("Documento inválido!");
}

// 9 e 10
const perfil = {
  nome: "string",
  idade: 23,
  cidade: "Goiania",
  habilidades: [
    "string1",
    "string2",
    "string3"
  ]
}
const profile = JSON.stringify(perfil, null , 2);
console.log(profile);

try {
    const text = fs.readFileSync("profile.json", "utf-8");
    const texto = JSON.parse(text);
    console.log("Documento Válido!")
    console.table(texto);
} catch (error) {
    console.error("Documento inválido!");
}

// Excercicio 11 - Criar um JSON com objetos/arrays aninhados
const catalog = {
    store: "TechShop",
    items:[
        {sku: "A123", name: "Laptop", price: 299.0, tags: ["electronics", "portable"]},
        {sku: "B456", name: "Mouse", price: 99.0, tags: ["electronics", "portable"]}
    ]
}
const converter = JSON.stringify(catalog, null, 2);
fs.writeFileSync("catalog.json", converter);
const text = fs.readFileSync("catalog.json", "utf-8");
console.log(text);

// Excercicio 12A - Crie JSON inválido de propósito (vírgula à direita) e valide-o
try {
    const text = fs.readFileSync("exercicio12A.json", "utf8");
    JSON.parse(text);
    console.log("Válido");
} catch (error) {
    console.log("Inválido");
    
}

// Excercicio 12B - Crie JSON inválido de propósito (aspas simples) e valide-o
try {
    const text = fs.readFileSync("exercicio12B.json", "utf8");
    JSON.parse(text);
    console.log("Válido");
} catch (error) {
    console.log("Inválido");
    
}

// Excercicio 12B - Crie JSON inválido de propósito (aspas ausentes) e valide-o
try {
    const text = fs.readFileSync("exercicio12C.json", "utf8");
    JSON.parse(text);
    console.log("Válido");
} catch (error) {
    console.log("Inválido");
    
}

*/

// Excercicio 15 - No console, crie uma matriz de objetos e valide-a
const payment = [
    {paymentId: 1, customer: "String1", value: 100.0 },
    {paymentId: 2, customer: "String2", value: 250.0 },
    {paymentId: 3, customer: "String3", value: 470.0 },
    {paymentId: 4, customer: "String4", value: 420.0 },
    {paymentId: 5, customer: "String5", value: 620.0 },

]
const payJson = JSON.stringify(payment, null, 2);
fs.writeFileSync("payment.json", payJson);
try {
    const paymentTextJson = fs.readFileSync("payment.json", "utf-8");
    const text = JSON.parse(paymentTextJson);
    console.log("Documento Válido");
    console.table(text, ["customer"]);
    const pay = text.filter(id => id.paymentId > 2);
    console.table(pay);
} catch (error) {
    console.error("Documento Inválido")
}
