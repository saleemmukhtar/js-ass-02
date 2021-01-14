///2nd Assignment of Js//

// CHANGING CASE//

// Answer 1//

// var user = prompt ("Write something here in small case")

// var b = user.toUpperCase ()

// alert (b)

//Answer 2//

//  var user = prompt ("Write something here in small case!")
//  var a = user.charAt (0)
//  var b = a.toUpperCase ()
//  var c = user.slice (1)
//  alert (b+c)

//Strings: measuring length and extracting parts//

//Answer 1//

// var user = prompt ("Enter your favourite mobile model")
// var b = user.length

//Answer 2//

// var user = prompt ("Enter your name here!")
// var b = user.charAt(user.length-1)
// alert (b)


//Strings: finding segments///


//Answer 1//

// var a = "Pakistani"
// var b = a.indexOf ("n")
// alert (b)


//Answer 2/
 
// var user=prompt("Enter your Input: ");

// if(user.match(/[\@\.\,\!]/)===null){
//     alert("Valid Username");
    
// }
// else{
// alert("Your name is Invalid");

// }



//Answer 3 //

// var a = "The quick brown fox jumps over the lazy dog"
// var b = (a.match(/the/g)) .length
// alert (b)


// Strings: finding a character at a location//

//ANSWER 1 //

// var a = "Pakistani"
// var b = a.charAt(3)
// alert (b);

//Answer 2//

// var a = "Hyderabad"
// var b = a.replace ("Hyder","Islam")
// alert (b)


//Answer 3//

// var message = "Ali and Sami are best friends. They play cricket and football together."
// var  b = message.replace (/and/g,"&")
// alert (b)

///Rounding numbers////

//Answer 1//

// var num = +prompt ("Enter the value in number    for example (3.45344)")
// var round = Math.round(num)
//alert (round)

// var floor = Math.floor (num)
// var ceil = Math.ceil  (num)
// alert (floor)
//alert (ceil)

//Answer 2//

// var user = +prompt ("Enter the value   for example (-2.678)")
// var round = Math.round(user)
// alert (round)

// var floor = Math.floor (user)
// var ceil = Math.ceil  (user)
// alert (floor)
// alert (ceil)

//Generating random numbers//


/// Answer 1 //

//  var a = Math.random ()*6
// var b = Math.ceil(a)
// document.write (Math.ceil (b))

//Answer 2//

// var a = Math.random ()*2
//  var b = Math.ceil(a)
//  document.write (Math.ceil (b))

//  if (b==1){
//      document.write (" = Tail")
//  }
//  else{
//     document.write (" = Head")

//  }


//Answer 3//

// var user = +prompt ("Enter the secret number from 1 to 10")
// var random = Math.random ()*10
// var a = Math.ceil (random)
// alert (a)

// if (user==a){
//          document.write ("<h1> Congratulations </h1>")
//      }
//      else{
//         document.write ("<h1> Better luck next time </h1>")
    
//      }

//Converting strings to integers and decimals//

//Answer 1//
 
// var user = prompt ("Enter your weight here")
// var b = parseInt (user)
// alert (b)

// Converting strings to numbers, numbers to strings//


//Answer 1//

// var a = "479"
// var b = parseInt(a)
// var c = typeof(b)
// alert (b)
// alert (c)

//Answer 2//

// var a = 35.36
// var b = a.toString()
// var c = b.replace (".","")
// alert (c)

///Controlling the length of decimals//

//Answer 1//
 
// var per = 30/45*100
//  var a = per.toFixed(2)
//  alert (a)

//end 2nd Assignment//
