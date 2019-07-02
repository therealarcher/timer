let timeInt = process.argv.slice(2); // array of terminal inputs
let beep = () => {process.stdout.write('beep \n')};


for (let t of timeInt) {
  if (t >= 0) {
    setTimeout(beep, t * 1000)
  }
};


// for (let t of timeInt) {
//   setTimeout(beep, t * 1000)  
// };

// for (let t of timeInt) {
//   if (t !== timeInt.length) {
//     setTimeout(beep, t * 1000);
//   } else {
//     setTimeout(() => {console.log('')}, t * 1005);
//   }
// };
    

