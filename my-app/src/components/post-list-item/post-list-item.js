import React, {Component} from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            important: props.important,
            like: false
        };
    }

    toggleImportance = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    toggleLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }


    render() {

        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = "app-list-item d-flex justify-content-between";
        if (important) classNames += " important";
        if (like) classNames += " like";

        return(
            <div className={classNames}>
                <span 
                    className="app-list-item-label"
                    onClick={this.toggleLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        className="btn-star btn-sm"
                        onClick={this.toggleImportance}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
