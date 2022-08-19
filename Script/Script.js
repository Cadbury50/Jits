const scrollEffect = document.getElementById("timeline");

window.addEventListener("scroll", function (){
    let slowEffect = window.pageYOffset;
    // console.log(slowEffect);
    scrollEffect.style.backgroundPositionY = (slowEffect - 180) * 0.5 + "px";
    
})
var paragraph1 = document.getElementById("text");
var paragraph2 = document.getElementById("text2");
var paragraph3 = document.getElementById("text3");

function historyClick(){
    paragraph1.style.display = "block";
    paragraph2.style.display = "none";
    paragraph3.style.display = "none";
    paragraph1.style.animation = "textEntrance 0.5s"
}
function visionClick(){
    paragraph1.style.display = "none";
    paragraph2.style.display = "block";
    paragraph3.style.display = "none";
    paragraph2.style.animation = "textEntrance 0.5s"
    
}
function missionClick(){
    paragraph1.style.display = "none";
    paragraph2.style.display = "none";
    paragraph3.style.display = "block";
    paragraph3.style.animation = "textEntrance 0.5s"
    
 
}

/* var mark = {
    fullName: 'Mark',
    mass: 20,
    height: 2.5,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);

    }
};
var john = {
    fullName: 'John',
    mass: 9999990,
    height: 99,
    calcBMI: function(){        
        this.bmi = this.mass / (this.height * this.height);

    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
if (mark.bmi > john.bmi){
    console.log(mark.fullName + ' has the highest BMI with a score of: ' + mark.bmi );
}
else if (john.bmi > mark.bmi){
    console.log(john.fullName + ' has the highest BMI with a score of: ' + john.bmi);
}
else {
    console.log('they have the same BMI');
} */