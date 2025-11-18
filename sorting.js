var user=prompt("enter the 5 numeber sep by ,").split(",");
document.write('<span style="color: red ">u ve the values of { '+'<span style="color: black;">' +user.join(", ") + ' } <br>');
function sorting (user){
  var x=user.sort();
  document.write('<span style="color: red ">ur value after being sorted descending {'+'<span style="color: black;">' +x.join(", ") + '} <span><br>');
  var y= x.reverse();
  document.write('<span style="color: red  ">ur value after being sorted ascendind {'+'<span style="color: black;">' +y.join(", ") + '}<br>');;}
sorting(user);