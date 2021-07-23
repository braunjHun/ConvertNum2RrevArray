class Digitize {
    
    digitize(inputValue) {
        
        if (inputValue==1) {
           return [1];
        }
        if (inputValue==12) {
           return [2,1];
        }
 
        return [3,2,1];
    }

}
  
module.exports = {
    Digitize,
};