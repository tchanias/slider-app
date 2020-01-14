import React, { useState, useEffect } from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import axios from 'axios';
import {BaseUrl} from '../../Const';


export default function Home() {
    const [content, setContent] = useState([]);
    const [active, setActive] = useState('section1') 


    useEffect(() => {
        axios({
            method: 'get',
            url: BaseUrl + '/home',
        })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data)
                    setContent(response.data);
                }
            }).catch(function (error) {
                console.log(error)
            });
    }, [])
    let images = '';
    let services = '';
    if (content){
        if (content.length > 0 ){
            images = content[0].sections[0].images
            services = content[0].sections[1]
        } 
    }
    const HandleActive = (section) =>{
        setActive(section)
    }
    //const homeMenu = content[0].sections.map(section=><li>{section.title}</li>)
    return (
        <>
            
            <div className="main-container">
                <div className="main-title home-page">Our Sections</div>
                <nav className="home-nav">
                    <ul>
                        <li className={active==='section1'?'active':''} onClick={()=>HandleActive('section1')}>Section 1</li>
                        <li className={active==='section2'?'active':''} onClick={()=>HandleActive('section2')}>Section 2</li>
                    </ul>
                </nav>
                {active === 'section1' ? <Gallery className="gallery" images = {images}></Gallery> : <Services services={services}></Services>}
            </div>
        </>
    )
}
