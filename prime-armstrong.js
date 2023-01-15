const checkArmstrong = (num) =>{
    let copy=num

    let digitCount=0

    while(copy!=0) {
        digitCount++

        copy=parseInt(copy/10)
    }

    copy =num

    let digitSum=0

    while(copy!=0) {
        let digit=copy%10

        digitSum+=Math.pow(digit, digitCount)

        copy=parseInt(copy/10)
    }

    let isArmstrong=(num==digitSum)

    return isArmstrong
}

const checkPrime= (num) => {
    let isPrime=true

    for(let div=2; div<num; div++) {
        if((num%div)==0) {
            isPrime=false;

            break
        }
    }

    return isPrime
}

console.log(checkArmstrong(153))
console.log(checkPrime(13))