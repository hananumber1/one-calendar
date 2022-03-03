import React from "react";
import CampTitle from "../molecules/CampTitle";
import CampCard from "../molecules/CampCard";

const campLists=[{ label:'test', title:'title', caption:'caption'

}]
function CampSection(){
    return(
        <section>
            <CampTitle title="인기직무"/>
            <CampCard card={campLists}/>
        </section>
    )
}

export default CampSection
