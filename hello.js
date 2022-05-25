// ======================================
// =================Problem- 1==============
// Prime number
function n(name){
    let val = name.split('');
    let aVal = val;
    let count = [];
    let cCount = {};
    for(let i = 0; i <= val.length; i++){
        count = i;
        // console.log(count)
    }
    for(let i = 0; i <= aVal.length; i++){
       if(cCount[aVal[i]]){
            // cCount[aVal[i]] += 1;
            count = count - 1;
       }else{
           cCount[aVal[i]] = 1;
       }
    }
    // main
    if(count % 2 == 0){
        console.log('Congratulations! The prime number is Even')
    }else{
        console.log('Owwwww!!! The Prime number is Odd')
    }
}
n('emieeeizzs')
// ===================================================
// =================Problem- 2==============
// ODD EVEN ODD EVEN
// function counter(number){
//     let result = [];
//     for(i = 1; i <= number; i++){
//         console.log(i)
//         if(i % 2 == 0){
//             result += ' even';
//         }else{
//             result += ' Odd'
//         }
//     }
//     console.log(result)
// }
// counter(6)
// ==================================================
// 
// =================Problem- 4==============
// let Name = 'sadia islam islam islam';
// let result = Name.split(' ');
// let finalResult = result.shift();
// console.log(finalResult)

// =================================================
// =================Problem- 5==============
// Enter the numbers, to find their value.......
// function calculator(num1 , num2, oparator){
//     if(oparator == 'plus'){
//         console.log(num1 + num2);
//     }else if(oparator == 'minus'){
//         console.log(num1 - num2);
//     }else if(oparator == 'multiply'){
//         console.log(num1 * num2)
//     }else if(oparator == 'division'){
//         console.log(num1 / num2)
//     }
// }
// calculator(2, 3, 'division')

// =================================================
// =================Problem- 6==============
// Guess the number...
// function number(input){
//     let random = Math.ceil(Math.random() * 10);
//     while(input !== random){
//         number(Number(prompt('Guess the number between 1 to 10..')))
//     }
//     if(random == input){
//         alert('Congratulations ! it matched with your input..')
//     }
// }
// number(Number(prompt('Guess the number between 1 to 10..')))
// =================Problem- 3==============
//  It is not the complete solution....***********
// function expo(number){
//     let serial = [];
//     for(let i = 1; i <= number; i++){
//         serial[i] = i;
//     }
//     for(let i = 1; i <= number; i += 4){
//         serial[i] += '**'
//     }
//     console.log(serial)
// }
// expo(10)
// =================================================