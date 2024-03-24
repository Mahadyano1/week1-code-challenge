function taxRate(taxableIncome){

    if(taxableIncome>=0 && taxableIncome<=24000){
        return (0.1*taxableIncome)
    
    }
    else if(taxableIncome >=24001 && taxableIncome <=32333){
        return (0.25*taxableIncome)
    }
    
    else if(taxableIncome>= 32334 && taxableIncome <=500000){
        return (0.3*taxableIncome)
        
    }   
    else if(taxableIncome>=500001 && taxableIncome<=800000){
        return (0.325*taxableIncome)
    }
    else{
        return (0.35*taxableIncome)
    }
    
}   

function nhifRate(grossSalary){
    if(grossSalary>=0 && grossSalary<= 5999){
        return (150)
    }
    else if(grossSalary>=6000 && grossSalary<=7999){
        return (300)
        
    }
    else if(grossSalary>=8000 && grossSalary <=11999){
        return (400)
    }
    else if(grossSalary>=12000 && grossSalary<=14999){
        return(500)
    }
    else if(grossSalary>=15000 && grossSalary <=19999){
        return (600)

    }
    else if(grossSalary>=20000 && grossSalary <=24999){
        return(750)
    }
    else if(grossSalary>=25000 && grossSalary<=29999){
        return(850)
    }
    else if(grossSalary>=30000 && grossSalary<=34999){
        return (900)
    
    }
    else if (grossSalary>=35000 && grossSalary<=39999){
        return (950)
    }
    

}

function calculateNetsalary (basicsalary,benefits){
    const grossSalary=basicsalary+benefits
    const nssfRate=basicsalary*0.06
    const nhif=nhifRate(grossSalary)
    const taxableIncome=basicsalary-nhif-nssfRate
    const PAYE=taxRate(taxableIncome)-2400
    console.log(nhif)
    const totalDeduction=nhif+nssfRate+PAYE
    const netSalary=basicsalary-totalDeduction
    return (netSalary)

}
    console.log(calculateNetsalary(100000,5000))












