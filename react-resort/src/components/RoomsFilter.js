import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


export default function RoomsFilter({rooms}) {

    const context = useContext(RoomContext)
    const {
        handleChange, price, minPrice, maxPrice, type, capacity, minSize, maxSize, breakfast, pets
    } = context;

    // get unique types
    let types = getUnique(rooms, 'type')
    let capacities = getUnique(rooms, 'capacity')
    //add 'all' type
    types = ['all', ...types]
    //map to jsx
    types = types.map((item, index) => <option key={index} value={item}>{item}</option>)
    capacities = capacities.map((item, index) => <option key={index} value={item}>{item}</option>)


    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form action="" className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select className="form-control" 
                            name="type" 
                            id="type"
                            value={type}
                            onChange={handleChange}
                            >
                                {types}
                            </select>
                </div>
                {/* end of select type */}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select className="form-control" 
                            name="capacity" 
                            id="capacity"
                            value={capacity}
                            onChange={handleChange}
                            >
                                {capacities}
                            </select>
                </div>
                {/* end of guests */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" 
                            name="price"
                            min={minPrice} 
                            max={maxPrice} 
                            id="price" 
                            value={price} 
                            className="form-control" 
                            onChange={handleChange} />
                </div>
                {/* end of room price */}
                {/* room size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input  type="number" 
                                className="size-input"
                                name="minSize" 
                                id="size"
                                value={minSize}
                                onChange={handleChange}/>
                        <input  type="number" 
                                className="size-input"
                                name="maxSize" 
                                id="size"
                                value={maxSize}
                                onChange={handleChange}/>
                    </div>
                </div>
                {/* end of room size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input  type="checkbox" name="breakfast"
                                id="breakfast" checked={breakfast}
                                onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input  type="checkbox" name="pets"
                                id="pets" checked={pets}
                                onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}
