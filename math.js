var user=prompt("enter the 3 numeber sep by ,").split(",");
var sum=0;
var mult=1;
var div =parseFloat(user[0]);
for(var i =0;i<user.length;i++) {
   
    sum+=parseInt(user[i]);}
    document.write('<span style="color: red ">sum of the 3 values= '+'<span style="color: black;">' +sum + ' <span><br>');
for(var i =0;i<user.length;i++) {
   
     mult *= parseInt(user[i]);}
     document.write('<span style="color: red ">multiplication of the 3 values= '+'<span style="color: black;">' +mult + ' <span><br>');
for(var i =1;i<user.length;i++) {
   
            div /= parseFloat(user[i]);}
        document.write('<span style="color: red ">multiplication of the 3 values= '+'<span style="color: black;">' +div + ' <span><br>');
            



