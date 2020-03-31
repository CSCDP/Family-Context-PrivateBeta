const ENCODING_KEY = "8ad2fb"

function getHash(properties: {[id: string]: string}): string {
    var hash = ENCODING_KEY.split("");

    for (let propertyKey in properties) {
        var stringArray = `${propertyKey}+${properties[propertyKey]}`.split("")
        hash = xorArrays(hash, stringArray)
    }

    return `#${btoa(hash.join(""))}`
}

function xorArrays(array1: string[], array2: string[]): string[] {
    var keyLength = array1.length

    for (let index2 = 0; index2 < array2.length; index2++) {
        for (let base = 0; base < keyLength + 1; base++) {
            var index = (index2 + base*(keyLength - 1)) % keyLength;
            array1[index] = String.fromCharCode(array1[index].charCodeAt(0) ^ array2[index2].charCodeAt(0))
        }
    }

    return array1;
}

export {getHash}