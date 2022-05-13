// 1. English Section:
$(".english-button").click(function() {
    let englishInput = $(".english").val();
    if (englishInput === "Mon" || englishInput === "mon") {
     
    $(".english-message").text("Correct!");
        $(".english").css("color", "green");
       } else {
   
    $(".english-message").text("Wrong! Try again."); 
             $(".english").css("color", "red");
       }
    
    
                           
    
});


// 2. Social Studies section
$(".ss-button").click(function(){
    let ssInput = $(".social-studies").val();
if (ssInput === "Albany") {
    
      $(".ss-message").text("Correct!");
     $(".social-studies").css("color", "green");
       } else {
   
    $(".ss-message").text("Wrong! Try again."); 
            $(".social-studies").css("color", "red");
       }
          
  
    
});


// 3. Math section
$(".math-button").click(function(){
    let mathInput = Number($(".math").val());
    if (mathInput === 30) {
    
      $(".math-message").text("Correct!");
         $(".math").css("color", "green");
       } else {
   
    $(".math-message").text("Wrong! Try again."); 
             $(".math").css("color", "red");
       }



});


// 4. Science section
$(".science-button").click(function(){
     let ScienceInput = ($(".science").val());
    if (ScienceInput === "solid") {
    
      $(".science-message").text("Correct!");
         $(".science").css("color", "green");
      
       } else {
   
    $(".science-message").text("Wrong! Try again."); 
            $(".science").css("color", "red");
       }
     
    });



