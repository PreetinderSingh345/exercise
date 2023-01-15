function isLeapYear(year) {
    return (year%4==0 && (year%400==0 || year%100!=0));
}

const isLeapYearArrow =(year)=> (year%4==0 && (year%400==0 || year%100!=0));

console.log(isLeapYear(2000))
console.log(isLeapYearArrow(1992))