/* FileName :app.js */
/* StudentName :Anureet Kaur */
/* Student Id :301174444 */
/* Date : 4/06/2021 */
(function(){


    function Start(){
        console.log("App Started.....");

       let deleteButtons = document.querySelectorAll('.btn-danger')

       for(button of deleteButtons){
           button.addEventListener('click',(event) =>{

            if(!confirm("Are you sure ?")){
                event.prevent
            }

           });
       }
    }

    window.addEventListener("load",Start);

})();