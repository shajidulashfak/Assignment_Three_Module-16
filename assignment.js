
// No:1.Kilometer To Meter Convert ;

function kilometerToMeter(kilometer){
        var meter = kilometer * 1000;
        return meter;
}


// var watchPrice = 50;
// var phonePrice = 100;
// var laptopPrice = 500;
         

//  function budgetCalculator(watch, phone, laptop){
//         var watchTotal = watch * 50;
//         var phoneTotal = phone * 100;
//         var laptopTotal = laptop * 500;
        
//         return watchTotal + phoneTotal + laptopTotal;     
        
        
//  }
 

// No:3. Hotel Cost ;

function hotelCost(stayNight){
       var taka = 0;
       if(stayNight <= 10){
              taka = stayNight * 100;
       }
       else if (stayNight <= 20){
              var firstDays = 10 * 100;
              var remaining = stayNight - 10;
              var secondDays = remaining * 80;
              taka = firstDays + secondDays;
       }
       else{
              var firstDays = 10 * 100;
              var secondDays = 10 * 80;
              var remaining = stayNight - 20;
              var thirdDays = remaining * 50;
              taka = firstDays + secondDays + thirdDays;
       }
       return taka;
}

// No:4.Maga Friend ;

function magaFriend(bigerName){
       var name = "";
       for (var i = 0; i < bigerName.length; i++){
              if (bigerName[i] > name ){
                     name = bigerName[i];
              }
       }
       return name;
}
