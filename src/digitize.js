class Digitize {
    
    digitize(inputValue) {
        return (inputValue + '').split('').map(Number).reverse();
    }
}
  
module.exports = {
    Digitize,
};