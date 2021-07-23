class Digitize {
    
    digitize(inputValue) {
        var intArr = [];
        var inputString = inputValue.toString();
        for (let i=inputString.length;i>0;i--) {
           intArr.push(parseInt(inputString.substring(i-1, i)));
        }
        console.log(intArr[0]);
        return (intArr);
    }
}
  
module.exports = {
    Digitize,
};