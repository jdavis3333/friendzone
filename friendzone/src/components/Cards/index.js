import React from "react";
import "./style.css";

const Cards = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img alt={props.name} src={props.image}/>
            </div>
            <div ClassName="card-body">
                <h4 className="card-title">{props.name}</h4>
                <h6 className="card-text text-secondary">
                    Mutual Hobbies: {props.mutualhobbies}
                </h6>
                <a href="#" className="btn btn-outline-success">Add to FriendZone</a>
            </div>
        </div>
    );
}

export default Cards