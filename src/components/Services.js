import React, {Component} from 'react';
import Title from './Title';
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component{

    state={
        services:[{
            icon:<FaCocktail />,
            title:"free cocktails",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },{
            icon:<FaHiking />,
            title:"Unlimited Hiking",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },{
            icon:<FaShuttleVan />,
            title:"free Shuttle",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },{
            icon:<FaBeer />,
            title:"Strongest Beer",
            info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }

        ]
    }


    render(){
        return (
            <section className="services">
                <Title title="services" />

                <div className="services-center" >
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service" >
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
            )
    }
}