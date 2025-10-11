function convertCase(string, targetCase) {
    switch (targetCase.toLowerCase()) {
        case 'camel':
            return camelCase(string);
        case 'kebab':
            return kebab(string);
        case 'snake':
            return snake(string);
        default:
            return string; 
    }
}

function camelCase(string){
    string = string.split(/[-_]/);
    string = string.map(x  => x[0].toUpperCase() + x.slice(1).toLowerCase()).join('');
    return string[0].toLowerCase() + string.slice(1);
}

function kebab(string){
    if(string.includes('_')){
        return string.split('_').join('-');
    } else{
        return string
            .split('').map(char => (char === char.toUpperCase() ? '-' + char.toLowerCase() : char)).join('');
    }
}

function snake(string){
    if(string.includes('-')){
        return string.split('-').join('_');
    } else{
        return string
            .split('').map(char => (char === char.toUpperCase() ? '_' + char.toLowerCase() : char)).join('');
    }
}

// Test cases
console.log(convertCase('some-lisp-name', 'camel'));
console.log(convertCase('some_lisp_name', 'camel')); 
console.log(convertCase('someLispName', 'snake'));  
console.log(convertCase('someLispName', 'kebab'));  
console.log(convertCase('some_lisp_name', 'kebab')); 
console.log(convertCase('some-lisp-name', 'snake')); 