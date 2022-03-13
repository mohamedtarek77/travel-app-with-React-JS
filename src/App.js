import React from "react"
import Card from "./components/Card"
import data from "./data"
export default function App (){
    return(
        <div>
        <header>
         <i className="far fa-globe-americas"></i>
         <h2> my travel journal.</h2>
        </header>
        
        { data.map((item)=>{
            return (
                <div key= {item.id}>
                 <Card item = {item}/>
                 <hr/>
            </div>

            )
        })
    }
   

    
     </div>   
    )
}