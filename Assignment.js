//kilometerToMeter Code
function kilometerToMeter(kilometer){
    var Meter =kilometer*100;
    if(kilometer<=-1){
       return "Error! Please inter valid number"
    }
    return Meter;
}
var meter = kilometerToMeter(100);
console.log(meter);


//budgetCalculator
function budgetCalculator(watch,phone,laptop){
    var Unit_watch=50;
    var watchTotal=Unit_watch*watch;
     var Unit_phone=100;
     var phoneTotal=Unit_phone*phone;
     var Unit_laptop=500;
     var laptopTotal=Unit_laptop*laptop;
     var total=watchTotal+phoneTotal+laptopTotal;
     return total;
 
 }
 var totalPrice=budgetCalculator(3,2,2);
 console.log(totalPrice);
 

// hotelCost
 function hotelCost(stayDay) {
    var Allday =0;
    if (stayDay <= 10) {
        Allday = stayDay * 100;
    
    } else if (stayDay <= 20) {
        var First10day = 10 * 100;
        var Now = stayDay - 10;
        var Secend10day = Now * 80;
        Allday = First10day + Secend10day;
    } else {
        var First10day = 10 * 100;
        var Secend10day = 10 * 80;
        var Now = stayDay - 20;
        var ThardDay = Now * 50;
        Allday = First10day + Secend10day + ThardDay;
    }
    return Allday;
    }
    var result = hotelCost(22);
    console.log(result);


    //megaFriend

    function megaFriend(array) {
        var longestWord = "";
        array.forEach(function (word) {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });
        return longestWord;
    }
    var bigfnd = megaFriend(['onik','sujon','onim','azazali']);
    console.log(bigfnd);