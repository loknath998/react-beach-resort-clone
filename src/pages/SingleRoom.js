import React,{ useContext } from 'react';
// import deafaultImg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link, useParams } from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

// export default class SingleRoom extends Component {
//     constructor(props){
//         super(props);
//         console.log(this.props);
//     }
        // this.state ={
        //     room_name=this.props.match.params.room_name,
        //     deafaultImg
        // }
        // static contextType = RoomContext;
//     render(){
        // const {getRoom} = this.context;
        // const room = getRoom(this.state.slug);
        // console.log(room);
//         return <div>Hello from SingleRoom</div>;
//     }
// }
export default function SingleRoom(){
    let value = useParams();
    const {getRoom} = useContext(RoomContext);
    const room = getRoom(value.room_name);
    // const data = useContext(RoomContext);
        // console.log("params:",value);
        // console.log("rooms:",rooms);
        // console.log('required room',room.name);
    if(!room )
    {
        return (<div className="error">
            <h3>no such room could be found...</h3>
            <Link to="/rooms" className="btn-primary" >Back to Rooms</Link>
        </div>);
    } 
    const {name,description, capacity, size, price, extras,breakfast,pets,images} = room;
    const [main_img, ...default_images] = images;
    return (<>
        <StyledHero img={main_img}>
            <Banner  title={`${name} room`}>
                <Link to="/rooms" className="btn-primary" >
                    back to rooms
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {default_images.map((image,index)=>{
                    return <img key={index} src={image} alt={name } />
                })}
            </div>
            <div className="single-room-info" >
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size}sqft</h6>
                    <h6>max capacity : {capacity > 1 ?  `${capacity} people`:`${capacity} person`}</h6>
                    <h6>{pets ? "pets allowed":"no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((item,index)=>{
                    return <li key={index} >-{item}</li>
                })}
            </ul>
        </section>
    </>);
}