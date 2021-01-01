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

exec ("git add .", cb_add);

function cb_add(err, stdout, stdin) { 
  if(err) { 
    console.log(err)
    return
  }
  exec (`git commit -m "${str}"`, cb_commit);
  //it worked!
}
function cb_commit(err, stdout, stdin) { 
  if(err) { 
    console.log(err)
    return
  }
  console.log("done!")
}