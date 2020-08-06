const firstStar = document.querySelector('.first_star');
const secondStar = document.querySelector('.second_star');
const thirdStar = document.querySelector('.third_star');
const fourthStar = document.querySelector('.fourth_star');
const fifthStar = document.querySelector('.fifth_star');

document.querySelector('.starRating').addEventListener('click',(e)=>{
    if(e.target.classList.contains('star')){
        switch(e.target.classList[1]){
            case "first_star":    
                firstStar.src = "fullStar.jpg";
                secondStar.src = "emptyStar.jpg";
                thirdStar.src = "emptyStar.jpg";
                fourthStar.src = "emptyStar.jpg";
                fifthStar.src = "emptyStar.jpg";
                break; 
            
            case "second_star":
                firstStar.src = "fullStar.jpg";
                secondStar.src = "fullStar.jpg";
                thirdStar.src = "emptyStar.jpg";
                fourthStar.src = "emptyStar.jpg";
                fifthStar.src = "emptyStar.jpg";
                break;
            
            case "third_star":   
                firstStar.src = "fullStar.jpg";
                secondStar.src = "fullStar.jpg";
                thirdStar.src = "fullStar.jpg";
                fourthStar.src = "emptyStar.jpg";
                fifthStar.src = "emptyStar.jpg";
                break;
            
            case "fourth_star":          
                firstStar.src = "fullStar.jpg";
                secondStar.src = "fullStar.jpg";
                thirdStar.src = "fullStar.jpg";
                fourthStar.src = "fullStar.jpg";
                fifthStar.src = "emptyStar.jpg";
                break;
            
            case "fifth_star":
                firstStar.src = "fullStar.jpg";
                secondStar.src = "fullStar.jpg";
                thirdStar.src = "fullStar.jpg";
                fourthStar.src = "fullStar.jpg";
                fifthStar.src = "fullStar.jpg";
                break;                                         
        }
    }
})