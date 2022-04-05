tailwind.config = {
    theme: {
      extend: {
          fontFamily: {
              sans: ['Josefin Slab', 'serif']
          }
      }
    }
}

$(document).ready(function() {
    //preventDefault is a function that prevents the reloading of the page (relaod is the browser defualt action)

    var amount
    var from 
    var to

    $("#form").submit(fucntion(){
        e.preventDefault();

        amount = $("#amount").val();
        
        from = $("#from").val();

        to = $("to").val();
    })

});