let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input.shift()
let count = 0
let result =[]
for(i=0; i<input.length; i++){
    for(j=0; j<input[i].length; j++){
        if( input[i][j] === '('){
            count++
        } if (input[i][j] === ')'){
            count--
        }
        if(count=== -1){
            break;
        }
    }
    if(count === 0) {
        result.push('YES')
    } else {
        result.push('NO')
    }
    count = 0
}
console.log(result.join('\n'))