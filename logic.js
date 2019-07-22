function sectionClickHandler(){
    var sections = document.getElementsByClassName('title-container');

    for(var i = 0; i < sections.length; i++){
        sections[i].addEventListener('click',function(){
            if(this.className === "title-container"){
                activeSection(this.parentElement);
            }
            else{
                deactiveSection(this.parentElement);
            }
        })
    }
}

function activeSection(sectionElem){
    var symbolElem = sectionElem.getElementsByClassName('plus-minus-btn')[0];
    var titleContainerElem = sectionElem.getElementsByClassName('title-container')[0];
    var captionElem = sectionElem.getElementsByClassName('caption')[0];
    symbolElem.innerHTML = "&minus;";
    titleContainerElem.className += " active";
    console.log(captionElem);
    captionElem.className += " show-caption";  
    captionElem.style.maxHeight = captionElem.scrollHeight + "px";
    captionElem.style.padding = "15px";
}

function deactiveSection(sectionElem){
    var symbolElem = sectionElem.getElementsByClassName('plus-minus-btn')[0];
    var titleContainerElem = sectionElem.getElementsByClassName('title-container')[0];
    var captionElem = sectionElem.getElementsByClassName('caption')[0];

    symbolElem.innerHTML = "+";
    titleContainerElem.className = "title-container";
    captionElem.className = "caption"
    captionElem.style.maxHeight = null;
    captionElem.style.padding = "0px";

}

function rerunAnimation(elem,elemClassName,animationClassName){
    elem.className = elemClassName;
    window.requestAnimationFrame(function(time){
        window.requestAnimationFrame(function(time){
            elem.className = elemClassName + " " + animationClassName;
        })
    })
}

sectionClickHandler();