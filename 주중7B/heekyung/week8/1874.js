let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const testCase = input.shift()

let stack = []
let result = ''
let count = 1
for(i=0; i<input.length; i++){
    
//    for(j=count; j<=input.length; j++){
//     if(stack[stack.length-1] === input[i]){
//         stack.pop()
//         result.push('-')
//         count--
//         break;
//     } else {
//         stack.push(j)
//         result.push('+')
//         count++
//     }
//  ㅇ이렇게 하면 8부터 출력ㅇ이 안됨 length에 가로막힘 while 문 사용해야함
    while(count  <= input[i]){
        stack.push(count)
        count++
        result+='+'
    }
    const popNum = stack.pop()
    if(popNum !== input[i]){
    	result = 'NO'
    } else {
    	result += '-'
    }

    
}
   console.log(result !== 'NO'? result.split('').join('\n'):'NO')
//맞는데 왜틀렸지..