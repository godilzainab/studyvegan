let buttons = document.querySelectorAll("button");
let food = document.querySelector("#img");

let images = ["https://www.indianvegankitchen.co/public/images/dishes/spinach_mushrooms.jpeg","https://www.indianvegankitchen.co/public/images/dishes/butter_chicken.jpeg","	https://www.indianvegankitchen.co/public/images/dishes/veggie_kofta.jpeg",];
let ix = 0;
food.setAttribute('src', images[ix]);

buttons[1].addEventListener("click", function () {
   if(ix < images.length - 1){
    ix++;
    food.setAttribute('src', images[ix]);
   }
   else{
    ix = 0;
    food.setAttribute('src', images[ix]);
   }
    
});

buttons[0].addEventListener("click",function()
   {
      if(ix!=0)
      {
         ix--;
         food.setAttribute('src', images[ix]);
      }
      else{
         ix = images.length-1;
         food.setAttribute('src', images[ix]);
      }
   }
)




