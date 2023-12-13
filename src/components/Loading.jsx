import react from "react";


function Loading() {
    return (
        <div  style={{
            display:"grid", justifyContent:"center"
          }}>
                    

                      <div style={{
                        display:"flex", justifyContent:"center"
                      }} >
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      
                   
                      </div>
                    </div>
    )
}

export default Loading