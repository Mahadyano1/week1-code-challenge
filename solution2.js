function speedDetector(speed){
if(speed<70){
   return "Ok"
}
else{
    const demeritPoints=(speed-70)/5;
    if(demeritPoints>12){
        return "licence suspended"
    }
else{
    return `points: ${demeritPoints}`
}
}

}
console.log(speedDetector(110))