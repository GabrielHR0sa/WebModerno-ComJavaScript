const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let x in nums){
   if(x == 5){ 
        break;// interrompe, desvia o bloco for, não age sobre o if
    }
   console.log(x, nums[x]);
}

for(let y in nums){
    if(y == 5){ 
         continue;// interrompe a repetição e continua a próxima
     }
    console.log(y, nums[y]);
 }