import React,{useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

function getUnique(items,value)
{
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}){

    // console.log('rrrrooms',rooms);
    const context = useContext(RoomContext);
    // console.log(context);
    const {handleChange,type,capacity,price,maxPrice,minPrice,minSize,maxSize,breakfast,pets} = context;
    //geting unique room types
    let types = getUnique(rooms,'type');
    // adding 'all' to room types
    types= ['all',...types];
    // map to jsx
    // console.log('types',types);
    types = types.map((item,index)=>{
        return <option value={item} key={index} >{item}</option>
    });
    // getting unique capacity
    let capacities = getUnique(rooms,'capacity');
    capacities = capacities.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    });

    return <section className="filter-container">
                <Title title="Search Rooms" />
                <form className="filter-form">
                    {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type" >
                            room type
                        </label>
                        <select name="type" id="type" value={type}
                        className="form-control"
                        onChange={handleChange}
                         >
                         {types}
                         </select>
                    </div>
                    {/* end of select type */ }
                    {/* select capacity */}
                    <div className="form-group">
                        <label htmlFor="capacity">
                            Guests
                        </label>
                        <select name="capacity" id="capacity" value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                            {capacities}
                        </select>
                    </div>
                    {/* end of capacity */}
                    {/* room price */}
                    <div className="form-group">
                        <label htmlFor="price">
                            Room Price ${price}
                        </label>
                        <input type="range" name="price" id="price" 
                        value={price} min={minPrice} max={maxPrice} 
                        className="form-control"
                        onChange={handleChange}
                        />
                    </div>
                    {/* end of room price */}
                    {/* size */}
                    <div className="form-group">
                        <label htmlFor="size"> Room Size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="size"
                                value={minSize} onChange={handleChange}
                                className="size-input" />
                            <input type="number" name="maxSize" id="size"
                                value={maxSize} onChange={handleChange}
                                className="size-input" />
                        </div>
                    </div>
                    {/* end of size */}

                    {/* extras */}
                    <div className="form-control">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast"
                                id="breakfast" checked={breakfast}
                                onChange={handleChange}
                            />
                            <label htmlFor="breakfast">
                                breakfast
                            </label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets"
                                id="pets" checked={pets} 
                                onChange={handleChange}
                            />
                            <label htmlFor="pets">
                                pets
                            </label>
                        </div>
                    </div>
                    {/* end of extras */}
                </form>
    </section>
}