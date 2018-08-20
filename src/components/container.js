import React,{Component}  from 'react'

import {defaultImageUrl} from "../constants/constants";


export default class Container extends Component{

    render(){
        const {display_name,images, company,id} = this.props.data;
        return(
            <div className="tiles" key={id}>
                        
                <img src={images["100"] ? images["138"] : defaultImageUrl }  alt={"test"} />
                <div className='name'> <span> {display_name}  </span></div>
                
                <p className="description"> {company ?  company : "lorem ipsum"} </p>
               
            </div>
        )
    }
}