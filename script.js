// for (let i=0;i<= 10;i++){
//     console.log("Number "+i);
// }

for(let i=0; i<= 10;i++){
    if(i === 7){
        console.log(`${i} is my lucky number`);
    }else{
        console.log(i);
    }
}
//nested loop
for(let i=1;i<=10;i++){
    console.log('Number '+i);
    for(let j=1;j<=5;j++){
        console.log(`${i}*${j}= ${i*j}`);
    }
}