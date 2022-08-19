var rowss = document.querySelectorAll("#row"),
arrowLeft = document.querySelector(".arrowLeft")
arrowRight = document.querySelector(".arrowRight"), current = 0;
console.log(row.length);


function clear(){
    for (var i = 0; i < row.length; i++){
        row[i].style.display = "none";
    }
}
// unang slide lang ipapakita
function startSlide(){
    clear();
    row[0].style.display = "flex";
}

function leftButton(){
    clear();
    row[current - 1].style.display = "flex";
    current --;
}

function rightButton(){
    clear();
    row[current + 1].style.display = "flex";
    current++
}

arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = row.length - 1;

    }
    leftButton();
});
arrowRight.addEventListener('click', function(){
    if(current === row.length - 1){
        current = -1;
    }
    rightButton();
})

startSlide();