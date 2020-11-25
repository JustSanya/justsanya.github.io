import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'


export default class SingleRoom extends Component {
    static contextType = RoomContext;

    constructor(props) {
        super(props)
        this.state ={
            slug: this.props.match.params.slug,
            defaultBcg,
        }
    }

    render() {
        const {getRoom} = this.context;
        const {slug} = this.state;
        const room = getRoom(slug);
        console.log(room);

        if (!room) {
            return (
                <div className="error">
                    <h3>No such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">back to rooms</Link>
                </div>
            )
        }

        const {name, description, price, capacity, size, extras, breakfast, pets, images} = room;
        const [mainImg, ...restImages] = images;
        
        return (
            <>
                <StyledHero img={mainImg} className="roomsHero">
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {restImages.map((item,index) => {
                           return <img src={item} key={index} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>
                                max capacity: {
                                    capacity > 1 ? `${capacity} people` : `1 person`
                                } 
                            </h6>
                            <h6>{pets ? 'pest allowed' : 'no pets allowed'}</h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                            {extras.map((item, index) => <li key={index}>- {item}</li>)}
                    </ul>
                </section>
            </>
        )
    }
}
