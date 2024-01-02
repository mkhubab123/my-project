let darkmodeEnabled = false;

const darkmodeButton = document.getElementById("darkmodeButton");
darkmodeButton.addEventListener("click",()=>{
   darkmodeEnabled = !darkmodeEnabled;
   if(darkmodeEnabled){
      enableDarkMode();
   }
   else{
      disableDarkMode();
   }
});
const enableDarkMode = () =>{
   document.body.classList.add("dark-mode");
}

const disableDarkMode = () =>{
   document.body.classList.remove("dark-mode");
}
