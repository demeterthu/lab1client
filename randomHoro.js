//Horoscope
const rand=Math.floor(Math.random()*5+1)

//console.log(rand);
console.log('Your Horoscope today is ');
if(rand == 5) console.log('LUCKY!!!');
else if(rand ==4 ) console.log('Not Bad');
else if(rand ==3 ) console.log('Good');
else if(rand ==2 ) console.log('Bad');
else console.log('Fine');   
