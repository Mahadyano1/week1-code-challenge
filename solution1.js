function gradeCalculator(marks){
if(marks<0 || marks >100)
    return "Not valid"
else if(marks>79)
     return"A"
else if(marks>=60 && marks <=79)
    return "B"
else if(marks>=49 && marks<=59)
    return "C"
else if(marks>=40 && marks<=49)
    return "D"
else if(marks<40)
    return "E"

}
  console.log(gradeCalculator(101))
