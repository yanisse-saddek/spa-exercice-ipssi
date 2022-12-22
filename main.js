import './style.css'
import TabManager from "./src/utils/TabManager";
import searchCharacters from './src/pages/searchCharacters';
import getCharacter from './src/pages/getCharacter';
import searchPage from './src/pages/searchPage';

const rootElement = document.querySelector("#app");


export const tabManager = new TabManager(rootElement, {
    home: {
        component:searchCharacters,
        params:[1],
    },
    character:{
        component:getCharacter,
    },
    search:{
        component:searchPage,   
        params:[1]
    }
})

tabManager.openTabsById("home");




setTimeout(()=>{
    document.querySelectorAll('[data-tabId]').forEach(tab => {
        tab.addEventListener("click", (evt) => {
            tabManager.openTabsById(evt.target.dataset.tabid);
        })
    });
},1000)

