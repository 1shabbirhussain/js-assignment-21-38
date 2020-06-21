//              ***************Chapter 21 - 25****************
//                       Task # 1
// var firstName = prompt('Fisrt Name')
// var lastName = prompt('Last Name')

// var fullName = firstName + ' ' + lastName;
// alert(fullName)


//                       Task # 2
// let mobileName = prompt('Enter your mobile name');

// let length = mobileName.length
// alert(mobileName + '\n' + 'string length:' + length)


//                       Task # 3
// let word = 'pakistani'

// for (i=0; i<= word.length-1; i++){
//     if(word[i] == 'n'){
//         document.write('pakistani' +"<br>"+ 'index of n is ' + i)
//         break
//     }
// }

// document.write(word.indexOf('n'));


//                       Task # 4
// let word = 'Hello World'

// document.write(word.lastIndexOf('l'))


//                       Task # 5
// let word = 'pakistani';

// document.write("String: "+ word +"<br>"+"character at index 3 : "+ word[3])


//                       Task # 6
// var firstName = prompt('Fisrt Name')
// var lastName = prompt('Last Name')

// var fullName = firstName.concat(" "+lastName)
// alert(fullName)


//                       Task # 7
// var city = 'hyderabad'
// var replaced = city.replace('hyder','islama')
// alert(replaced)


//                       Task # 8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var newMessage = message.replace(/and/g, '&')
// document.write('Before:' + message + '<br>' + 'Now:' + newMessage)



//                       Task # 9
// var Num = '472'
// var newNum = parseInt(Num)

// document.write(
//     'Value:' + Num + '<br>' + 
//     'Type:' + typeof(Num) + '<br>' +
//     'Valuee:' + Num + '<br>' + 
//     'Type:' + typeof(newNum)

// )


//                       Task # 10
// var input = prompt('Enter Something')
// var newInput =  input.toUpperCase()
// alert(newInput)


//                       Task # 11
// var input = prompt('Enter Something')
// var newInput =  input[0].toUpperCase() + input.slice(1)
// alert(newInput)


//                       Task # 12
// var num = 35.36
// var noNum = num.toString()

// document.write(noNum.replace('.',''))



//                       Task # 13
// var name = prompt('Enter Your Name');

//  if(/^[a-zA-Z]*$/.test(name) == false){
//     alert('please enter a valid name')
// }else{
//     alert(name)
// }


//                       Task # 14
// var items = ['cake', 'apple pie', 'chips' , 'cookies' , 'patties']

// var search = prompt('enter what you want')

//  search = search.toLowerCase();

// for(i=0; i<items.length;i++){
//     if(items[i] !== search ){
//         alert('not available');
//         break;
//     }else{
//         alert('available')
//     }
// }


//                       Task # 15
// var pass = prompt('Enter Password')

// if (pass.match(/[a-z]/g) && pass.match( 
//     /[A-Z]/g) && pass.match( 
//     /[0-9]/g) && pass.match( 
//     /[^a-zA-Z\d]/g) && pass.length >= 6) {
//         alert('Great')
//     }else{
//         alert('please enter a valid password')
//     }
    

//                       Task # 16
// var university = 'University of Karachi';

// for(i=0;i<university.length;i++){
     
//      document.write(university[i].split() + '<br>')
// }

//                       Task # 17
// var input = prompt('Enter Something')
// var len = input.length - 1;
// alert(input[len])



//                       Task # 18
// var para = 'The quick brown fox jumps over the lazy dog'

// var count = para.match(/the/ig)

// alert ('the appeared ' + count.length + ' times')






//               **************Chapter 26 - 30*****************

//                       Task # 1
// var uservalue = prompt ("Enter Your Number") 
// document.write("Number:"+" "+uservalue +"<br>") 
// var round = Math.round(uservalue)
// document.write("roundoff:"+" "+ round+ "<br>" )
// var floor = Math.floor(uservalue)
// document.write("Floor value:"+" "+ floor + "<br>" )
// var ceil = Math.ceil(uservalue)
// document.write("Ceil value:"+" "+ ceil + "<br>" )


//                        Task # 2
// var uservalue = prompt ("Enter Your Number") 
// document.write("Number:"+" "+uservalue +"<br>") 
// var round = Math.round(uservalue)
// document.write("roundoff:"+" "+ round+ "<br>" )
// var floor = Math.floor(uservalue)
// document.write("Floor value:"+" "+ floor + "<br>" )
// var ceil = Math.ceil(uservalue)
// document.write("Ceil value:"+" "+ ceil + "<br>" )


//                        Task # 3
// var uservalue = prompt("Enter your value")
// var absolute = Math.abs(uservalue)
// document.write( "The absolute value of"+ " "+ uservalue +" "+ "is"+" " + absolute)


//                        Task # 4
// var random = Math.random()*6
// var ceil = Math.ceil(random)
// document.write("Random dice value: "+ ceil)


//                         Task # 5
// var random = Math.random()*2
// var ceil = Math.ceil(random)
// if (ceil === 1){
//     document.write( "Random coin value: Heads")
// }
// else {
//     document.write("Random coin value: Tails")
// }


//                        Task # 6
// var random = Math.random()*100
// var ceil = Math.ceil(random)
// document.write ("Random Number between 1 and 100 is: " + ceil)

//                         Task # 7
// var weight = prompt('Enter Your weight')
// document.write("Weight of user is: " + weight)



//                        Task # 8
// var random = Math.random()*10
// var ceil = Math.ceil(random)
// var uservalue = prompt("Enter a number between 1 - 10")
// if (uservalue > 10 || uservalue < 1){
//     alert("You enter a wrong number")
// }
// else if (uservalue == ceil){
//     alert("You Win")
// }
// else {
//     alert(" You Lose")
// }



//                 ************Chapter 31 - 34**************

//                       Task # 1
// var date = new Date()
// document.write(date)


//                         Task # 2

// var months = ["january", "february", "March", "April", "May", "june", "July","August","September","october","November","December"]
// var today = new Date()
// var month = today.getMonth()
// document.write("Current month is: "+ months[month])


//                         Task # 3
// var Days = ["Sunday", "Monday", "tuesday", "Wednesday", "thursday", "friday", "Saturday"]
// var today = new Date()
// var Day = today.getDay()
// document.write("Current Day is: "+ Days[Day])


//                         Task # 4
// var newdate = new Date()
// var day = newdate.getDay()
// if(day === 0 || day===6){
//     document.write("It's Fun Day!")
// }
// else{
//     document.write("It's normal day!")
//  }


//                          Task # 5
// var newdate =  new Date()
// var date = newdate.getDate()
// if(date <= 15){
//     document.write("First fifteen days of month")
// }
// else{
//     document.write("Last days of month")
// }


//                          Task # 6
// var newdate =  new Date()
// var millisec = newdate.getTime()
// var min = millisec/(1000*60)
// document.write("Curent Date:  ") 
// document.write(newdate + "<br>") 
// document.write(" Elapsed milliseconds since 1 jan, 1970:   ") 
// document.write(millisec + "<br>")
// document.write(" Elapsed minutes since 1 jan, 1970:   ") 
// document.write(min + "<br>")  


//                           Task # 7
// var newdate =  new Date()
// var hours = newdate.getHours()
// if(hours <= 11){
//     document.write("It's AM")
// }
// else {
//     document.write("It's PM")
// }


//                             Task # 8
// var newdate =  new Date()
// newdate.setMonth(11)
// newdate.setDate(31)
// document.write ("Later date:" + newdate)



//                             Task # 9 
// var ramadan= new Date ('june 18, 2015')
// var rammilli = ramadan.getTime()
// var today = new Date()
// var todaymilli = today.getTime()
// var diff = todaymilli-rammilli
// var days = Math.floor(diff/(1000*60*60*24))
// document.write(days + " days have paseed since 1st Ramadan 2015")


//                              Task # 10
// var begin= new Date ('jan 1, 2015')
// var beginmilli = begin.getTime()
// var today = new Date()
// var todaymilli = today.getTime()
// var diff = todaymilli-beginmilli
// var secs = Math.floor(diff/(1000))
// document.write("on reference date "+ today +","+ "<br>"+ secs + " seconds have passed since the beginning of 2015")

//                         Task # 11
//                         Task # 12
//                         Task # 13
// var age = prompt("Enter your Age")
// var today = new Date()
// var todaymilli= today.getTime()
// var todayyear= todaymilli/(1000*60*60*24*30*12)
// console.log(todayyear)

//  Nahi ho rha aye 


//                         Task # 14

// var name = prompt('Name')
// var currentUnits = +prompt('Current Units')
// var date = new Date()
// var month = date.getMonth()
// var unitPrice = 16;
// var lateCharges =350;
// var bill = currentUnits * unitPrice;
// var lateBill = bill + lateCharges
// var months = new Array();
// var months = ["january", "february", "March", "April", "May", "june", "July","August","September","october","November","December"]
// document.write('Name: ' + name + '<br>');
// document.write('Month: ' +months[month] + '<br>')
// document.write('Number of units: ' +currentUnits+ '<br>')
// document.write('Chare per unit: ' + unitPrice + '<br>');
// document.write('Net Amount payable (within due date): ' + bill + '<br>');
// document.write('Late Payment charges: ' + lateCharges + '<br>');
// document.write('Gross Amount payable (after due date): ' + lateBill + '<br>');




//        ***************Chapter 35 - 38****************

//                         task # 1
// function time(){
//     var today = new Date();
//     return(
//         today
//     )
// }

// alert(time())


//                         task # 2
// function fullName(fname,lname){
//     var name = fname + " " + lname;
//     alert(name)
// }

// var fName = prompt('First Name')
// var lName = prompt('Last Name')

// fullName(fName,lName)


//                         task # 3
// function sum(num1,num2){
//     alert(num1+num2)
// }

// var num1 = +prompt('num1')
// var num2 = +prompt('num2')
// sum(num1,num2)


//                         task # 4
// function calc(num1,num2,sign){
//     var ans
//     if (sign === '+' ){
//         alert(num1+num2)
//     }else if (sign === '-' ){
//         alert(num1-num2)
//     }else if (sign === '*'){
//         alert(num1*num2)
//     }else if (sign === '/'){
//         alert(num1/num2)
//     }else{
//         alert('Enter correct Operation')
//     }
// }
// var num1 = +prompt('num1')
// var num2 = +prompt('num2')
// var sign = prompt('sign')

// calc(num1,num2,sign)


//                         task # 5
// function sqr(num){ 
//     alert(num*num);
// }

// var num = +prompt('Number');

// sqr(num)


//                         task # 6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = +prompt('number');
//   answer = factorial(n)
//  alert("The factorial of " + n + " is " + answer);


//                         task # 7
// function count (start,stop){
//     for(i=start; i<=stop; i++){
//         document.write(i + '<br>')
//     }
// }

// var num1 = +prompt('Num 1')
// var num2 = +prompt('Num 2')

// count(num1,num2)


//                         task # 8
// function Hypotenus(base,perp) {
//     return Math.sqrt(base*base  + perp*perp) ;
// }

// var base = +prompt('base')
// var perp = +prompt('perpendicular')

// alert(Hypotenus(base,perp))


//                         task # 9
// function area(height,width){
//     var ans = height*width;
//     return(
//         alert(ans)
//     )
//  }

//  var a= +prompt('Height');
//  var b = +prompt('Width');
//  area(a,b)
//  area(4,4)


//                         task # 10
// function palindrome(word) {
//     return word == word.split("").reverse().join("");
// }

// var word = prompt('enter a palindrome word')

// alert(palindrome(word))


//                         task # 12
// function extract(str){
//     var loc = str.indexOf('Development');
//    return str.slice(loc,15)
//  }
//  var str = 'Web Development Tutorial' 
//  alert(extract(str))


//                         task # 13
// agey ka nahi ho raha 