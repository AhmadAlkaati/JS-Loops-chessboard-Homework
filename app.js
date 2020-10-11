let letters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H'];

   // chessboard using for and for //
/*for(i = 8 ; i > 0;  i--){
    // to start a new row //
    let row = ''; 
    for(let j = 0; j<8; j++){
        let position = i;
        
        row = row + letters[j] + position ;
    }
    console.log(row);
}*/



         // Chessboard using while and for //
 let i = 8
while (i > 0){ // Outer while loop gets exucted 8 times //
    let row = ''; // row variable makes a new row everytime while loop gets exctued //
    for(h = 0 ; h < 8 ; h++ ){ // Inner for loop gets excuted 64 times in total //
        let position = i; // i is a number that is printed 8 times //
        row = row + letters[h] + position ;
    }
    console.log(row);
    i--
   
} 


         // Chessboard using while and while //
 let b = 8 
while( b > 0){ // Outer loop // 
    let row = '';
    let k = 0;
    while(k < 8){ // Inner loop //
        let position = b;
        row = row + letters[k] + position ;
        
      k++  
    }
    console.log(row);
        b--
    
}

         // Chessboard using do while and while //
let c = 8
do{ // Outer loop
    let row = '';
    let d = 0;
    while(d < 8){ // Inner loop
        let position = c;
        row = row + letters[d] + position ;
        d++
    }
 console.log(row);
    c--;

}

while(c > 0); 