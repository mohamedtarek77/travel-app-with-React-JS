import React from "react"

export default function Card (props){
    return (
        
        
     <div className ="card"> 
         <img  src = {props.item.imageUrl} />
        <div className = "content">
           <div>
          <i className="fas fa-map-marker-alt"></i>
           <span > {props.item.location} </span>
           <a href={props.item.googleMapsUrl}>View on Google Mapst</a>
           </div>

           <h1> {props.item.title}</h1>
           
           <div className= "data"> <strong>{props.item.startDate} </strong> - <strong>{props.item.endDate} </strong> </div>
           <p> {props.item.description} </p>
           
        </div>
    </div>
    )
             

    
}



        
