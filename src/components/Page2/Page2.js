import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from '../../Const';

import Icon1 from '../../assets/Icon1.jpg';

export default function Page() {
    const [content, setContent] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: BaseUrl + '/page',
        })
            .then(function (response) {
                if (response.status === 200) {
                    setContent(response.data[0]);
                }
            }).catch(function (error) {
                console.log(error)
            });
    }, [])


    let cards ='';
    if (content){
            if (content.tiles){
                cards = content.tiles.map((card,index)=>{
                    return (
                        <div className="card" key={index}>
                            <div className={'card-icon'}><img src={card.icon==='icon1'?Icon1:card.icon==='icon2'?Icon1:Icon1}/></div>
                            <div className="card-title">{card.title}</div>
                            <div className="card-desc">{card.description}</div>
                            <div className="card-link">{card.link} ></div>
                        </div>
                    )
                })

        }
    }
    return (
        <>
        <div className="main-container">
            <div className="short-description section-title">{content.description}</div>
            <div className="card-wrapper">
                {cards}
            </div>
        </div>
    </>
    )
}
