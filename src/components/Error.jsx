import react from "react";

function Error(message) {
  
  
   return ( <div class="card-body">

    <div class="alert alert-danger" role="alert">
     {
      message
     }
    </div>


  </div>
   )
}

export default Error