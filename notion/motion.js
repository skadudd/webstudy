const onClickCard = document.querySelector(".card-body");
const onClickCloseCard = document.querySelector(".clicked-card-body");
const createBtn = document.querySelector(".card-create-button");
const cardGroup1 = document.querySelector(".card-group-1");
const cardClass = document.querySelector(".new-card");
const modal_element = document.querySelector(".on-card-click-modal");
let cardData = [];
const cardElements = {
    cardBody : 'card-elements-container',
    titleWrapper : 'card-title-body',
    titleSpan : 'card-title-span',
    tagBody : 'card-tag-body',
    tagWrapper : 'card-tag-wrapper',
    tagUnderWrapper : 'card-tag-box',
    tagSpan : 'card-tag-span',
    contentsBody : 'card-contents-body',
    contentsWrapper : 'card-contents-wrapper',
    contentSpan : 'card-content-span'
 }

    function closeCardHandler(e) {
        const el = event.target.className;

        if(el != "clicked-card-body") {
            modal_element.style.display = "none";
        }

    }

    function clickHandler(e) {

        console.log("d")
        modal_element.style.display = "flex";
    }

    function createElements() {

        //객체에 저장한 key의 갯수 만큼 div를 생성합니다
        //객체에 저장한 클래스 명을 삽입합니다
        for(key in cardElements) {
            
            const ele = document.createElement("div");
            ele.className = cardElements[key];
            cardData.push(ele);
        }

        //div 객체는 상 -> 하 로 기재해 놓았기 때문에 역순으로 삽입합니다.
        cardData.reverse();
        const parentArrNum = cardData.length - 1;

        //클래스명에 나름대로 규칙을 정하고 클래스명에 따라 부모와 자식간의 관계를 생성합니다.
        for(i=0; i<cardData.length; i++) {

            const j = i + 1;

            if(cardData[i].className.indexOf("span") != -1){
                
                cardData[j].appendChild(cardData[i]);
                // cardData.splice(i,1)
                //console.log(cardData[j])
            } else if(cardData[i].className.indexOf("box") != -1) {

                cardData[j].appendChild(cardData[i]);
                // cardData.splice(i,1)
                //console.log(cardData[j])
            } else if(cardData[i].className.indexOf("wrapper") != -1) {
                cardData[j].appendChild(cardData[i]);
                // cardData.splice(i,1)
                //console.log(cardData[j])
            } else if(cardData[i].className.indexOf("body") != -1) {
                cardData[parentArrNum].appendChild(cardData[i]);
            }
        }
        
        const div = cardData[parentArrNum];
        const li = document.createElement("li");

        li.appendChild(div)
        cardGroup1.appendChild(li)
        
        cardData = [];

    }
    
    function createHandler(e) {
        
        createElements();

    }
  


function init() {
    onClickCard.addEventListener('click', clickHandler);
    createBtn.addEventListener('click', createHandler);
    onClickCloseCard.addEventListener('click', closeCardHandler);
}
