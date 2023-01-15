const isEven =(num)=> (num%2==0);

function getBiggestEvenNumInArr(arr) {
    let maxEvenValue=-1;

    arr.forEach(value => {
        maxEvenValue=((maxEvenValue==-1)? (isEven(value)? value: -1): (isEven(value)? ((value>maxEvenValue)? value: maxEvenValue): maxEvenValue));
    });

    return maxEvenValue;
}

const getBiggestEvenNumInArrArrow=(arr)=> {
    let maxEvenValue=-1;

    arr.forEach(value => {
        maxEvenValue=((maxEvenValue==-1)? (isEven(value)? value: -1): (isEven(value)? ((value>maxEvenValue)? value: maxEvenValue): maxEvenValue));
    });

    return maxEvenValue;
}

module.exports = {
    getBiggestEvenNumInArr,
    getBiggestEvenNumInArrArrow
}