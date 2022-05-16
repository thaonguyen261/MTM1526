// Assign variables 
let a = 3;
let b = 5;
let c; 

// Asign result
let result = 'let a = 3;\n';
result += 'let b = 5;\n';
result += 'let c;\n';
result += '------------\n';
result += `a + b = ${a + b}\n`;
result += `a - b = ${a - b}\n`;
result += `a * b = ${a * b}\n`;
result += `a / b = ${a / b}\n`;
result += `a % b = ${a % b}\n`;
result += `(a += b) = ${a += b}\n`;
result += `(a -= b) = ${a -= b}\n`;
result += `(a *= b) = ${a *= b}\n`;
result += `(a /= b) = ${a /= b}\n`;
result += `(a %= b) = ${a %= b}\n`;
result += `(a == b): ${a == b}\n`;
result += `(a != b): ${a != b}\n`;
result += `(a > b): ${a > b}\n`;
result += `(a != b): ${a != b}\n`;
result += `(a > b): ${a > b}\n`;
result += `(a < b): ${a < b}\n`;
result += `(!a && !c): ${!a && !c}\n`;
result += `(!a || !c): ${!a || !c}\n`;


// Alert value 

alert(result);