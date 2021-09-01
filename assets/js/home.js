//when an element will be marked for deletion, it will have a line through all the text
document.getElementById("database-container").addEventListener("click", function(){

    var checkboxes = document.getElementsByName('mark-for-delete'); //getting all the checkboxes
    var selected = [];  //array for all the checkboxes which are marked
    var unselected = [];    //array for all the checkboxes which are unmarked

    //putting marked checkboxes in selected[] and unmarked checkboxes in unmarked[]
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(checkboxes[i].value);
        }else{
            unselected.push(checkboxes[i].value);
        }
    }

    //adding a line and grey color to all marked elements
    for(let id of selected){
        let ele = document.getElementsByClassName(id);
        ele[0].style.textDecoration = "line-through";
        ele[0].style.color = "lightgrey";
        ele[1].style.textDecoration = "line-through";
    }

    //adding default text and default black color to all unmarked elements
    for(let id of unselected){
        let ele = document.getElementsByClassName(id);
        ele[0].style.textDecoration = "none";
        ele[0].style.color = "black";
        ele[1].style.textDecoration = "none";
    }
});