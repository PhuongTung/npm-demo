/**
 * script to use in package.json
 * args: node update-messages.js real update messages
*/

const { exec } = require('child_process');
let args = process.argv;
args.splice(0, 2);
let str = args.join(" ");

console.log(str);
console.log("Updated!");