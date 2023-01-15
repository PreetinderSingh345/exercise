function endsWithScript(str) {
    return str.endsWith("Script");
}

const endsWithScriptArrow =()=> str.endsWith('Script');

console.log(endsWithScript('Script'));
console.log(endsWithScript('doesnotendwithcapitalscript'))