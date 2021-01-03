import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBackGroundAction, changeBotClothesAction, changeHairStyleAction, changeHandBagsAction, changeNeckLacesAction, changeShoesAction, changeTopClothesAction } from '../redux/actions/dessingRoomActions';
import { useSpring, animated, useSprings } from 'react-spring'
import '../style.css'
import TopClothes from './ItemDetail.js/TopClothes';
import BotClothes from './ItemDetail.js/BotClothes';
import Shoes from './ItemDetail.js/Shoes';
import HandBags from './ItemDetail.js/HandBags';
import NeckLace from './ItemDetail.js/NeckLace';
import HairStyle from './ItemDetail.js/HairStyle';
import Background from './ItemDetail.js/Background';

const arrayNavPills = [
    { "tabName": "#tabTopClothes", "showName": "Áo", "type": "topclothes" },
    { "tabName": "#tabBotClothes", "showName": "Quần", "type": "botclothes" },
    { "tabName": "#tabShoes", "showName": "Giày dép", "type": "shoes" },
    { "tabName": "#tabHandBags", "showName": "Túi xách", "type": "handbags" },
    {
      "tabName": "#tabNecklaces",
      "showName": "Dây chuyền",
      "type": "necklaces"
    },
    { "tabName": "#tabHairStyle", "showName": "Kiểu tóc", "type": "hairstyle" },
    { "tabName": "#tabBackground", "showName": "Nền", "type": "background" }
]


const topClothes = [
    {
      "id": "topcloth_1",
      "category": "topclothes",
      "name": "Top Cloth 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "../images/clothes/topcloth1_show.jpg",
      "imgSrc_png": 'url("../images/clothes/topcloth1.png")'
    },
    {
      "id": "topcloth_2",
      "category": "topclothes",
      "name": "Top Cloth 2",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/topcloth2_show.jpg",
      "imgSrc_png": 'url("../images/clothes/topcloth2.png")'
    },
    {
      "id": "topcloth_3",
      "category": "topclothes",
      "name": "Top Cloth 3",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/topcloth3_show.jpg",
      "imgSrc_png": 'url("../images/clothes/topcloth3.png")'
    },
    {
      "id": "topcloth_4",
      "category": "topclothes",
      "name": "Top Cloth 4",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/topcloth4_show.jpg",
      "imgSrc_png": 'url("../images/clothes/topcloth4.png")'
    },
    {
      "id": "topcloth_5",
      "category": "topclothes",
      "name": "Top Cloth 5",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/topcloth5_show.jpg",
      "imgSrc_png": 'url("../images/clothes/topcloth5.png")'
    },
    {
      "id": "topcloth_6",
      "category": "topclothes",
      "name": "Top Cloth ",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/topcloth6_show.jpg",
      "imgSrc_png": 'url("../images/clothes/topcloth6.png")'
    },
];


const botClothes= [
    {
      "id": "botcloth_1",
      "category": "botclothes",
      "name": "Bot Cloth 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/botcloth1_show.jpg",
      "imgSrc_png": "url(./images/clothes/botcloth1.png)"
    },
    {
      "id": "botcloth_2",
      "category": "botclothes",
      "name": "Bot Cloth 2",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/botcloth2_show.jpg",
      "imgSrc_png": "url(./images/clothes/botcloth2.png)"
    },
    {
      "id": "botcloth_3",
      "category": "botclothes",
      "name": "Bot Cloth 3",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/botcloth3_show.jpg",
      "imgSrc_png": "url(./images/clothes/botcloth3.png)"
    },
    {
      "id": "botcloth_4",
      "category": "botclothes",
      "name": "Bot Cloth 4",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/botcloth4_show.jpg",
      "imgSrc_png": "url(./images/clothes/botcloth4.png)"
    },
    {
      "id": "botcloth_5",
      "category": "botclothes",
      "name": "Bot Cloth 5",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/clothes/botcloth5_show.jpg",
      "imgSrc_png": "url(./images/clothes/botcloth5.png)"
    },
];

const shoes = [

    {
      "id": "shoes_1",
      "category": "shoes",
      "name": "Shoes 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/shoes/shoes1_show.jpg",
      "imgSrc_png": "url(./images/shoes/shoes1.png)"
    },
    {
      "id": "shoes_2",
      "category": "shoes",
      "name": "Shoes 2",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/shoes/shoes2_show.jpg",
      "imgSrc_png": "url(./images/shoes/shoes2.png)"
    },
    {
      "id": "shoes_3",
      "category": "shoes",
      "name": "Shoes 3",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/shoes/shoes3_show.jpg",
      "imgSrc_png": "url(./images/shoes/shoes3.png)"
    },
    {
      "id": "shoes_4",
      "category": "shoes",
      "name": "Shoes 4",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/shoes/shoes4_show.jpg",
      "imgSrc_png": "url(./images/shoes/shoes4.png)"
    },
    {
      "id": "shoes_5",
      "category": "shoes",
      "name": "Shoes 5",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/shoes/shoes5_show.jpg",
      "imgSrc_png": "url(./images/shoes/shoes5.png)"
    },
];

const  handBags=[
    {
      "id": "handbag_1",
      "category": "handbags",
      "name": "Handbag 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/handbags/handbag1_show.jpg",
      "imgSrc_png": "url(./images/handbags/handbag1.png)"
    },
    {
      "id": "handbag_2",
      "category": "handbags",
      "name": "Handbag 2",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/handbags/handbag2_show.jpg",
      "imgSrc_png": "url(./images/handbags/handbag2.png)"
    },
    {
      "id": "handbag_3",
      "category": "handbags",
      "name": "Handbag 3",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/handbags/handbag3_show.jpg",
      "imgSrc_png": "url(./images/handbags/handbag3.png)"
    },
];

const neckLace=[

    {
      "id": "necklace_1",
      "category": "necklaces",
      "name": "Necklace 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/necklaces/necklace1_show.jpg",
      "imgSrc_png": "url(./images/necklaces/necklace1.png)"
    },
    {
      "id": "necklace_2",
      "category": "necklaces",
      "name": "Necklace 2",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/necklaces/necklace2_show.jpg",
      "imgSrc_png": "url(./images/necklaces/necklace2.png)"
    },
    {
      "id": "necklace_3",
      "category": "necklaces",
      "name": "Necklace 3",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/necklaces/necklace3_show.jpg",
      "imgSrc_png": "url(./images/necklaces/necklace3.png)"
    },
];

const hairStyle= [
    {
      "id": "hairstyle_1",
      "category": "hairstyle",
      "name": "Hairstyle 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/hairstyle/hairstyle1_show.jpg",
      "imgSrc_png": "url(./images/hairstyle/hairstyle1.png)"
    },
    {
      "id": "hairstyle_2",
      "category": "hairstyle",
      "name": "Hairstyle 2",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/hairstyle/hairstyle2_show.jpg",
      "imgSrc_png": "url(./images/hairstyle/hairstyle2.png)"
    },
    {
      "id": "hairstyle_3",
      "category": "hairstyle",
      "name": "Hairstyle 3",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/hairstyle/hairstyle3_show.jpg",
      "imgSrc_png": "url(./images/hairstyle/hairstyle3.png)"
    },

];

const  backGround = [
    {
      "id": "background_1",
      "category": "background",
      "name": "Background 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/background/background1_show.jpg",
      "imgSrc_png": "url(./images/background/background1.jpg)"
    },
    {
      "id": "background_2",
      "category": "background",
      "name": "Background 2",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/background/background2_show.jpg",
      "imgSrc_png": "url(./images/background/background2.jpg)"
    },
    {
      "id": "background_3",
      "category": "background",
      "name": "Background 3",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/background/background3_show.jpg",
      "imgSrc_png": "url(./images/background/background3.jpg)"
    },
    {
      "id": "background_4",
      "category": "background",
      "name": "Background 4",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      "imgSrc_jpg": "./images/background/background4_show.jpg",
      "imgSrc_png": "url(./images/background/background4.jpg)"
    },
    {
        "id": "background_5",
        "category": "background",
        "name": "Background 5",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "./images/background/background5_show.jpg",
        "imgSrc_png": "url(./images/background/background5.jpg)"
      },
      {
        "id": "background_6",
        "category": "background",
        "name": "Background 6",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "./images/background/background6_show.jpg",
        "imgSrc_png": "url(./images/background/background6.jpg)"
      },
      {
        "id": "background_7",
        "category": "background",
        "name": "Background 7",
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
        "imgSrc_jpg": "./images/background/background7_show.jpg",
        "imgSrc_png": "url(./images/background/background7.jpg)"
      },
];

export default function DanhSachSanPham(props) {


    const dispatch = useDispatch()


    const renderNavPills = () => {
        return arrayNavPills.map((item, index) => {
            return <li key={index} className="nav-item">
                <a className="nav-link btn-default" data-toggle="pill" href={item.tabName}>{item.showName}</a>
            </li>
        })
    }

    const renderTopClothes = () => {
        return topClothes.map((item, index) => {
            return <div key={index} className="col-md-3">
                <TopClothes topClothesItem = {item}/>
            </div>
        })
    }


    const renderBotClothes = () => {
        return botClothes.map((item, index) => {
            return <div key={index} className="col-md-3">
                    <BotClothes botClothesItem = {item}/>
                </div>
          
        })
    }


    const renderShoes = () => {
        return shoes.map((item, index) => {
            return <div key={index} className="col-md-3">
                <Shoes shoesItem={item}/>
            </div>
        })
    }


    const renderHandBags = () => {
        return handBags.map((item, index) => {
            return <div key={index} className="col-md-3">
                  <HandBags handBagsItem={item}/>
            </div>
        })
    }


    const renderNeckLace = () => {
        return neckLace.map((item, index) => {
            return <div key={index} className="col-md-3">
              <NeckLace neckLaceItem={item}/>
            </div>
        })
    }


    const renderHairStyle = () => {
        return hairStyle.map((item, index) => {
            return <div key={index} className="col-md-3">
                <HairStyle hairStyleItem= {item}/>
            </div>
        })
    }


    const renderBackGround = () => {
        return backGround.map((item, index) => {
            return <div key={index} className="col-md-3">
               <Background backgroundItem ={item}/>
            </div>
        })
    }

    return (
        <div>
            <ul className="nav nav-pills">
                {renderNavPills()}
            </ul>

            <div className="well">
                {/* Tab panes */}
                <div className="tab-content">
                    <div className="tab-pane container active" id="tabTopClothes">
                        <div className="container">
                            <div className="row" style={{position:'relative'}}>
                                {renderTopClothes()}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBotClothes">
                        <div className="container">
                            <div className="row" style={{position:'relative'}}>
                                {renderBotClothes()}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabShoes">
                        <div className="container">
                            <div className="row">
                                {renderShoes()}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabHandBags">
                        <div className="container">
                            <div className="row">
                                {renderHandBags()}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabNecklaces">
                        <div className="container">
                            <div className="row">
                                {renderNeckLace()}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabHairStyle">
                        <div className="container">
                            <div className="row">
                                {renderHairStyle()}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="tabBackground">
                        <div className="container">
                            <div className="row">
                                {renderBackGround()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
