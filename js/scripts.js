var moveToArrayFunc  = function(usersNumber){
  var arrayOfUserNum=[];
  var usersnumchange = usersNumber;
  for(i=1; i <= usersNumber; i++){
    arrayOfUserNum.push(usersnumchange);
    usersnumchange -= 1;
  }
  for (i = 0; i < arrayOfUserNum.length; i ++){
    if(arrayOfUserNum[i].toString().includes(3))
    {
      arrayOfUserNum[i]  = ('Im sorry I can not do that');
    } else if (arrayOfUserNum[i].toString().includes(2))
    {
      arrayOfUserNum[i]  = ('boop');
    } else if (arrayOfUserNum[i].toString().includes(1))
    {
      arrayOfUserNum[i]  = ('beep');
    } else{
     arrayOfUserNum[i] = (arrayOfUserNum[i]);
    }
    return arrayOfUserNum;
  }
}
$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    $("#userNumForm").hide();
    var usersNumber = parseInt($("input#userinputtedNumber").val());
    var arrayforresult = moveToArrayFunc(usersNumber).toString();
    $(".result-area").text(arrayforresult)
    $(".result").show();
  });
});
