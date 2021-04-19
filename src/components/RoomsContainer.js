import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import {useContext } from 'react';
import {RoomContext} from '../context';


export default function RoomsContainer(){

    const {rooms, sortedRooms,loading} = useContext(RoomContext);
    if(loading)
    {
        return <Loading />;
    }
    // console.log('rum'+rooms);
    return <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
    </>;
}