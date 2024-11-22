let array = [6, 11, 15,2, 7];
let target = 8;

let number_1 = [];


for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
      
      if (array[i] + array[j] === target && array[i] !== array[j] && i !== j){
          number_1[0].push(i);
          number_1[1].push(j);
          
          break;
        }
        
    }
}

console.log(`[${number_1[0]} , ${number_1[1]}]`);
