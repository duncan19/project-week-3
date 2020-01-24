
var arrayOfUserNUm=[];

$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    $("#userNumForm").hide();
    var usersNumber = parseInt($("input#userinputtedNumber").val());
})
});
