function addToDo(){
   // var text = document.getAnimations("task-txt").values; //JS
   var text=$('#task-txt').val();
    console.log(text);
   // var li="<li>"+text+"</li>"; old way
   var li = `<li> ${text} <button>Delete </button></li>`;

   //display the element under the ul
   $('#pending-list'.append(li));


}


//execute this fn

function init(){

    console.log("Init the to do App");

}

// when the browser finish rendering the HTML, execute init

window.onload=init;