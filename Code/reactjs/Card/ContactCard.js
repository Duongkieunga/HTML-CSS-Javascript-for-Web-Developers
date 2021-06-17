import React from "react"

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            {/* <h3 style={{display: props.contact.name ? "block" : "none"}}>{props.contact.name}</h3> */}
            <h3 style={{display: !props.contact.name && "none"}}>{props.contact.name}</h3>
            <h3 style={{color: !props.contact.name && "#8888888"}}>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
        
        // <div className="contact-card">
        //     <img src={props.imgUrl}/>
        //     <h3>{props.name}</h3>
        //     <p>Phone: {props.phone}</p>
        //     <p>Email: {props.email}</p> 
        // </div>
    )
}

export default ContactCard