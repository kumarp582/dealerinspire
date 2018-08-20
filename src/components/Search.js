import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from './container'
import { searchUserUrl, getAllUsersUrl } from "../constants/constants";
import axios from 'axios';

export default class SearchExampleStandard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            isLoading: true
        }

    }
    componentDidMount() {
        this.fetcUserData();
    };
    componentWillMount() {
        this.resetComponent()
    }


    fetcUserData = (searchQuery) => {
        let url = searchQuery ? searchUserUrl(searchQuery) : getAllUsersUrl();
        axios.get(url).then(result => this.setState({ isLoading: false, results: result.data }));
    }



    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.title });
        this.props.history.push(`/users/${result.id}`);
    };

    list = (props) => {
        return props.map((item) => {
            return (<Link to={'/users/' + item.id} key={item.id} className="image-box" >
                <Container data={item} key={item.id} />
            </Link>
            )
        })
    };

    handleSearchChange = (e) => {
        this.setState({ isLoading: true, value: e.target.value });
        this.fetcUserData(e.target.value);
    };

    render() {
        const { results } = this.state;

        return (
            <div>
                <div className="page">
                    <div className="input-section">
                        <input onChange={this.handleSearchChange} placeholder='Search...' />
                    </div>
                    <div className="tiles-section">
                        {this.list(results)}
                    </div>
                </div>
            </div>
        )
    }
}
