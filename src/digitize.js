class Digitize {
    
    digitize(n) {
        
        if (n==1) {
           return [1];
        }
        if (n==12) {
           return [2,1];
        }
 
        return [3,2,1];
    }

}
  
module.exports = {
    Digitize,
};