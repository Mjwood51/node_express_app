//document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad(){
    let theButton = document.getElementById("myLink");
    theButton.addEventListener("click", afterClick);

    theButton.addEventListener("MY_CUSTOM_EVENT", onCustom);

    let theContainer = document.getElementById("container");
    theContainer.addEventListener("click", containerClick, true); 

    document.addEventListener("click", documentClicked);
    window.addEventListener("click", windowClicked, true);

    
    //let myForm = document.querySelector("form");
    //myForm.addEventListener("submit", onSubmit);
}

function containerClick(evt){
    console.log("container clicked!");
    //evt.stopPropagation();
}

function documentClicked(){
    console.log("document clicked!");
}

function windowClicked(){
    console.log("window clicked!");
}

function afterClick(evt){
    evt.preventDefault();

    let custEvent = new CustomEvent("MY_CUSTOM_EVENT", {
        detail: { message: "And I feel fine."}
    });
    
    //console.log(evt);
    //console.log(evt.target);
    console.log("link clicked!");

    let myButton = document.getElementById("myLink");
    myButton.dispatchEvent(custEvent);
}

function onCustom(evt){
    console.log(evt);
    console.log(evt.type);
    console.log(evt.detail);
}

function onSubmit(evt){
    console.log("Form submitted");
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log(formData.get('inputText'));
}

