var arrayOfUserNUm=[];
$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    $("#userNumForm").hide();
    var usersNumber = parseInt($("input#userinputtedNumber").val());
      var moveToArrayFunc  = function(){
      var usersnumchange = usersNumber
      for(i=1; i <= usersNumber; i++){
        arrayOfUserNUm.push(usersnumchange)
        usersnumchange -= 1;
        }
        for (i = 0; i < arrayOfUserNUm.length; i ++){
         if(arrayOfUserNUm[i].toString().includes(3))
         {
                arrayOfUserNUm.push('Im sorry I can not do that')
         }
         else if (arrayOfUserNUm[i].toString().includes(2))
         {
                arrayOfUserNUm.push('boop')
         }
         else if (arrayOfUserNUm[i].toString().includes(1))
         {
           arrayOfUserNUm.push('beep')
         }
         else{
           arrayOfUserNUm.push(arrayOfUserNUm[i])
         }
};

});
});
