function fToUpperCase(str = 'sample') {
    if(str){
        const strArray = str.split('')
        strArray[0] = strArray[0].toUpperCase()
        return strArray.join('')
    }
   return ''
}
export {fToUpperCase}