import React from "react";
function CampCard(props){
    const card = props.campLists.map((card)=>
        <div className="camp-card-content" key={card.label}>
            <span className="camp-card-content-label">{props.label}</span>
            <p className="camp-card-content-title">{props.title}</p>
            <span className="camp-card-content-caption">{props.caption}</span>
        </div>
    )
    return(
        <div className="camp-card">
            {/*<img src="" alt=""/>*/}
            {card}
        </div>
    )
}

export default CampCard
