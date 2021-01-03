import { changeBackGround, changeBotClothes, changeHairStyle, changeHandBags, changeItem, changeNeckLaces, changeShoes, changeTopClothes, selectItem } from "../types/dressingRoomTypes";


export const changeTopClothesAction = (item) => ({
    type:changeTopClothes,
    item
})

export const changeBotClothesAction = (item) => ({
    type:changeBotClothes,
    item
})

export const changeHairStyleAction = (item) => ({
    type:changeHairStyle,
    item
})

export const changeNeckLacesAction = (item) => ({
    type:changeNeckLaces,
    item
})

export const changeHandBagsAction = (item) => ({
    type:changeHandBags,
    item
})

export const changeShoesAction = (item) => ({
    type:changeShoes,
    item
})

export const changeBackGroundAction = (item) => ({
    type:changeBackGround,
    item
})


export const selectItemAction = (item) =>({
    type: selectItem,
    item
})
