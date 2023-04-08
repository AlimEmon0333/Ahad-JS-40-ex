

// --------------- Chap # 21 "Changing Case" --------------------//

// var citytocheck = prompt("Check Your City")
// citytocheck = citytocheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for(i = 0 ; i <= 4 ; i++){
//     if(citytocheck === cleanestCities[i]){
//         alert("Your City is exist")
//     }
// }

// -------------- Chap # 22 "Strings : Measuring lengthand extracting parts" ------------------//

// var str = "ahad"
// var first = str.slice(0,1)
// var other = str.slice(1)
// first = first.toUpperCase()
// other = other.toLowerCase()
// console.log (first + other)

// ------------- Chap # 23 "Strings : Finding Segment" -------------------- //

// text = "corrupti Lorem ipsum corrupti dolor sit amet, consect corrupti adipisicing elit. Nemo laudantium officia corrupti dicta eos vel veniam quidem sed. Dolorum corrupti facilis dolores earum, illo esse minus corrupti iste magnam enim, corrupti molestiae aspernatur corrupti"
// for(i = 0; i < 8; i++){
//     if(text.slice(i,i + 8) === "corrupti"){
//     text = text.slice(0,i) + "My Text" + text.slice(i + 8)
//     }
//     console.log(text)
// }

// var firstChar = text.indexOf("corrupti");
// console.log(firstChar)

// var segIndex = text.lastIndexOf("corrupti");
// console.log(segIndex)



// ------------- Chap # 24 "Strings:Finding a character at a location" ------------------- //

// text = "corrupti Lorem ipsum corrupti dolor sit amet, consect corrupti adipisicing elit. Nemo laudantium officia corrupti dicta eos vel veniam quidem sed. Dolorum corrupti facilis dolores earum, illo esse minus corrupti iste magnam enim, corrupti molestiae aspernatur corrupti"
// var firstChar = text.charAt(30)
// console.log(firstChar)

// ------------- Chap # 25 "Strings:Replacing characters" -------------- //

// text = "corrupti Lorem ipsum corrupti dolor sit amet, consect corrupti adipisicing elit. Nemo laudantium officia corrupti dicta eos vel veniam quidem sed. Dolorum corrupti facilis dolores earum, illo esse minus corrupti iste magnam enim, corrupti molestiae aspernatur corrupti"
// var corrupti = text.replace("corrupti","Adil") 
// console.log(corrupti)
// var newText = text.replace(/corrupti/g, "the Second World War");
// console.log(newText)

// ------------ Chap # 26 "Rounding numbers" ----------- //

// var num = 4.6
// var rounded = Math.round(num)
// console.log(rounded)

// var num = 4.1
// var ceil = Math.ceil(num)
// console.log(ceil)

// var num = 5.8
// var floor = Math.floor(num)
// console.log(floor)


// ------------- Chap # 27 "Random Number" ------------------ //

// var random = Math.random()
// console.log(Math.ceil(random * 5))

// ------------ Chap # 28 "Converting strings to integers and decimals" ------------ //

// var num = "1"
// var num2 = 5
// num = Number(num) 
// console.log(num + num2)

// ----------- Chap # 29 "Converting strings to numbers, numbers to strings" --------- //

// var num = 1
// var num2 = 5
// num = num.toString()
// console.log(num + num2) 

// ------------------ Chap # 30 "Controlling the length of decimals" --------------- //

// var decimal = 2.136216467485
// var fixed = decimal.toFixed(2)
// console.log(fixed)

// ----------------- Chap # 31 "Getting the current date and time" --------------- //

// var now = new Date 
// console.log(now)

// ---------------- Chap # 32 "Extracting parts of the date and time" ----------- //

// var daynames = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
// var day = now.getDay()
// console.log(daynames[day])

// var monnames = ["jan","feb","mar","Apr"]
// var mon = now.getMonth()
// console.log(monnames[mon])


// var date = now.getDate()
// console.log(date)



// var year = now.getFullYear()
// console.log(year)


// var hour = now.getHours()
// console.log(hour)


// var min = now.getMinutes()
// console.log(min)


// var sec = now.getSeconds()
// console.log(sec)


// var millisec = now.getMilliseconds()
// console.log(millisec)


// var time = now.getTime()
// console.log(time)

// ------------- Chap # 33 "Specifying a date and time" --------------- //

// var now = new Date()
// var nowTime = now.getTime()
// console.log(nowTime)

// var nowbirth = new Date("April 30 2006")
// var nowbirthtime = nowbirth.getTime()
// console.log(nowbirthtime)

// var diff = nowTime - nowbirthtime
// console.log(diff)

// var myage = (diff / (1000 * 60 * 60 * 24 * 365 ))
// console.log(Math.floor(myage))



// -------------- chap # 35 "Function" -------------------- //

// function getTime()

// ------------ Chap # 36 "Functions:Passing them data" -------------- //

// function getTime(){
//     var now = new Date()
//     var hrs = now.getHours()
//     var Minute = now.getMinutes()
//     var sec = now.getSeconds()
//     console.log("Now The Time is " + hrs + ":" + Minute + ":" + sec)
// }
// getTime()

// --------------- Chap # 37 "Functions:Passing data back from them" ----------------- //

// var names = prompt("Enter Your Name")
// function getname(greeting,age){
//     alert(greeting,age)
// }
// getname("Welcome"+names)


// function getdata(){
//     var a = 5
//     var b = 10
//     var total = 5 + 10
//     return total   
// }
// var myval = getdata()
// console.log(myval)

// ---------------- Chap # 38 "Local Vs GLobal Variable" -------------------------- //

// Global Variable
// var num = 1

// // Local Variable

// function getglobal(){
//     var num  = 5
// }