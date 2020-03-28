const onClickCard = document.querySelector(".card-body"),
      onClickCloseCard = document.querySelector(".clicked-card-body"),
      createBtn = document.querySelector(".card-create-button"),
      cardGroup1 = document.querySelector(".card-group-1");
      cardClass = document.querySelector(".new-card"),
      modal_element = document.querySelector(".on-card-click-modal");

    
    function closeCardHandler(e) {
        const el = event.target.className;

        if(el != "clicked-card-body") {
            modal_element.style.display = "none";
        }

    }

    function clickHandler(e) {
        modal_element.style.display = "flex";
    }
    

    
    function createHandler(e) {
        
        const li = document.createElement("li");
        const card_body = document.createElement("div"),
        card_title_wrapper = document.createElement("div"),
        card_title = document.createElement("div"),
        card_tag_body = document.createElement("div"),
        card_tag_wrapper = document.createElement("div"),
        card_tag_wrapper_2 = document.createElement("div"),
        card_tag = document.createElement("div"),
        card_contents_body = document.createElement("div"),
        card_contents_wrapper = document.createElement("div"),
        card_contents = document.createElement("div");

        card_body.classList.add('card-body');
        card_title_wrapper.classList.add('card-title-wrapper');
        card_title.classList.add('card-title');
        card_tag_body.classList.add('card-tag-body');
        card_tag_wrapper.classList.add('card-tag-wrapper');
        card_tag_wrapper_2.classList.add('card-tag-wrapper-2');
        card_tag.classList.add('card-tag');
        card_contents_body.classList.add('card-contents-body');
        card_contents_wrapper.classList.add('card-contents-wrapper');
        card_contents.classList.add('card-contents');

        card_title_wrapper.appendChild(card_title);
        card_tag_wrapper_2.appendChild(card_tag);
        card_tag_wrapper.appendChild(card_tag_wrapper_2);
        card_tag_body.appendChild(card_tag_wrapper);
        card_contents_wrapper.appendChild(card_contents);
        card_contents_body.appendChild(card_contents_wrapper);
        card_body.appendChild(card_title_wrapper);
        card_body.appendChild(card_tag_body);
        card_body.appendChild(card_contents_body);
        li.appendChild(card_body);

        cardGroup1.appendChild(li);
        console.log("created");
         
        
    }
  

    function paintCard(e){}

function init() {
    onClickCard.addEventListener('click', clickHandler);
    createBtn.addEventListener('click', createHandler);
    onClickCloseCard.addEventListener('click', closeCardHandler);
}
