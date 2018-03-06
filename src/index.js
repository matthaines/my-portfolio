import 'react-dom'

console.log("loaded react-dom ... testing ES6 ...");
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
