// https://github.com/MohtasimShariar/Assignment-Javascript


//kilometerToMeter Code: A javascript code to Convert kilometer to meter
function kilometerToMeter(kilometer){
    var Meter = kilometer*1000;    //1000 meter = 1 kilometer
    if(kilometer<=-1){
       return "Error! Please enter a valid number"
    }
    return Meter;
}
//If you want to see the output:
//var meter = kilometerToMeter(100);
//console.log(meter);


//budgetCalculator: 
function budgetCalculator(watch,phone,laptop){
    var unit_watch_price=50;
    var watchTotal=unit_watch_price*watch;

     var unit_phone_price=100;
     var phoneTotal=unit_phone_price*phone;

     var unit_laptop_price=500;
     var laptopTotal=unit_laptop_price*laptop;
     
    //Calculating total price
     var total=watchTotal+phoneTotal+laptopTotal;

     return total;
 
 }
 //If you want to see the output:
 //var totalPrice=budgetCalculator(3,2,2);
 //console.log(totalPrice);
 

// hotelCost: Hotel cost calculation javascript code
 function hotelCost(stayDay) {
    var TotalDayCost =0;             //for 1 to 10 days
    if (stayDay <= 10) {
        TotalDayCost = stayDay * 100;
    
    } else if (stayDay <= 20) {
        var First10day = 10 * 100;
        var Now = stayDay - 10;      //for 11 to 20 days
        var Secend10day = Now * 80;
        TotalDayCost = First10day + Secend10day;
    } else {
        var First10day = 10 * 100;
        var Secend10day = 10 * 80;    //for 21 to above days
        var Now = stayDay - 20;
        var ThirdDay = Now * 50;
        TotalDayCost = First10day + Secend10day + ThirdDay;
    }
    return TotalDayCost;
    }
    //If you want to see the output:
    //var result = hotelCost(22);
    //console.log(result);


    //megaFriend code 

    function megaFriend(AllFriend) {
        var largestName = "";
        AllFriend.forEach(function (NameWord) {
            if (NameWord.length > largestName.length) {
                largestName = NameWord;
            }
        });
        return largestName;
    }
    //If you want to see the output:
   // var largestFriend = megaFriend(['onik','sujon','onim','azazali']);
    //console.log(largestFriend);