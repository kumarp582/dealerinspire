import React, {Component} from 'react';
import {getUserDetailUrl, defaultImageUrl} from "../constants/constants";

import { Link } from 'react-router-dom';

import Loader from './Loader';
import axios from 'axios';


class UserDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            userDetail:{}
        }
    }


    componentDidMount() {
    const { userId } = this.props.match.params;
    axios.get(getUserDetailUrl(userId))
        .then(response => this.setState({  isLoading: false, userDetail: response.data }))
    }

    render() {
        const { images,display_name,social_links,stats} = this.state.userDetail;
        if(this.state.isLoading === false) {
            return (
                <div className="user-details">
                 <Link to={'/'} > <img className="img-back" src="https://static.thenounproject.com/png/344330-200.png" /> </Link>
                    <div className="image-section">
                        <img src={images["276"] ?images["276"] : defaultImageUrl } alt={display_name} />
                    </div>
                    <div className="details-section">
                        <div className="name"><p>{display_name.toUpperCase()} </p></div>
                        <div className="user-name"><p>@{social_links.map(entry=> entry.service_name === "Twitter" ? entry.value : null)} </p></div>

                        <div className="stats">
                            <div className="col-1"><div className="title">Shots</div> <div className="value">{stats.views} </div> </div>
                            <div className="col-2"><div className="title">Following</div> <div className="value">{stats.following} </div></div>
                            <div className="col-3"><div className="title">Followers</div> <div className="value">{stats.followers} </div></div>
                        </div>
                    </div>
                </div>
            );
        }
        return <Loader />;
           
    }
}

export default UserDetail;
