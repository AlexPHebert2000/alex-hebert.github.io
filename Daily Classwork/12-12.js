function getGrade(score){
    //if score is 100 - 90 then return A
    if(score >= 90){
        return 'A';
    }
    //if score is 89 - 80 then return B
    else if(score >= 80){
        return 'B';
    }
    //if score is 79 - 70 then return C
    else if(score >= 70){
        return 'C';
    }
    //otherwise return 'You must retake the assessment'
    else{
        return 'You must retake the assessment';
    }
}
