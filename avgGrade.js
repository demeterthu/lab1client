var student = [56, 80, 60, 46, 69];
var avg = 0;


for (var i = 0; i < student.length; i++) {

  avg += parseInt(student[i]);
}

avg /= student.length;

console.log("Your Average are " + avg.toString());

if (avg < 50) {
  console.log("Grade : E");
} else if (avg >= 50 && avg <= 59) {
  console.log("Grade : D");
} else if (avg >= 60 && avg <= 69) {
  console.log("Grade : C");
} else if (avg >= 70 && avg <= 79) {
  console.log("Grade : B");
} else if (avg >= 80 && avg <= 100) {
  console.log("Grade : A");
}
else {
  console.log("Error");
}