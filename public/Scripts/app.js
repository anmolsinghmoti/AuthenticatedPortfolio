/* FileName :app.js */
/* StudentName :Anmol Singh */
/* Student Id :301145362 */
/* Date : 10/22/2021 */
(function(){


    function Start(){
        console.log("App Started.....");

       let deleteButtons = document.querySelectorAll('.btn-danger')

       for(button of deleteButtons){
           button.addEventListener('click',(event) =>{

            if(!confirm("Are you sure ?"))
            {
                event.preventDefault();
                window.location.assign('/contacts-list');
            }

           });
       }
    }

    window.addEventListener("load",Start);

})();