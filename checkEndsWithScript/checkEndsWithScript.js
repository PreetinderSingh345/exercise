function endsWithScript(str) {
    return str.endsWith("Script");
}

const endsWithScriptArrow =(str)=> str.endsWith('Script');

console.log(endsWithScript('Script'));
console.log(endsWithScript('doesnotendwithcapitalscript'))

module.exports = {
    endsWithScript,
    endsWithScriptArrow
}