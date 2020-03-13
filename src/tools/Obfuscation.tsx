const ENCODING_KEY = "8ad2fb20-d35f-4336-9c4f-2455b85b0b05"

function getHash(properties: {[id: string]: string}): string {
    var hash = ENCODING_KEY.split("");

    for (let propertyKey in properties) {
        var stringArray = `${propertyKey}+${properties[propertyKey]}`.split("")
        hash = xorArrays(hash, stringArray)
    }

    return `#${btoa(hash.join(""))}`
}

function xorArrays(array1: string[], array2: string[]): string[] {
    for (let index = 0; index < array1.length; index++) {
        for (let index2 = 0; index2 < array2.length; index2++) {
            array1[index] = String.fromCharCode(array1[index].charCodeAt(0) ^ array2[index2].charCodeAt(0))
        }
        
    }

    return array1;
}

export {getHash}