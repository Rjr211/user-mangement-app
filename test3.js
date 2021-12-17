
/* Create variables size and result  */
/* Result is an empty string to dynamically plug in data */
let size = 8;
let result = '';


for(let row = 1; row <= size; row++ ){


    for(let column = 1; column <= size; column++){

        if ((row + column) % 2 === 0) {

            result += " ";

        } else {

            result += "#";

        }
        

    }

    
    result += '\n';  

}

console.log(result)
