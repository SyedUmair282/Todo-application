function add() {
    var list = document.getElementById('list');
    var todo = document.getElementById('todo');

    //list
    var li = document.createElement('li');
    var uli = document.createTextNode(todo.value + " ");
    li.appendChild(uli);
    li.setAttribute('id', 'color');

    todo.value = "";

    //delete
    var deleteItems = document.createElement("button");
    var value = document.createTextNode("delete");
    deleteItems.appendChild(value);
    deleteItems.setAttribute("class", "delbtn");
    deleteItems.setAttribute("onclick", "delbtn(this)");
    li.appendChild(deleteItems);
    //edit
    var edit = document.createElement("button");
    var value = document.createTextNode("edit");
    edit.appendChild(value);
    li.appendChild(edit);
    edit.setAttribute("class", "editbtn");
    edit.setAttribute("onclick", "editbtn(this)");


    list.appendChild(li);

    edit.style.marginLeft = "2px";
}

function deleteall() {
    var list = document.getElementById('list');
    list.innerHTML = "";


}

function delbtn(e) {
    e.parentNode.remove();
}

function editbtn(e) {
    var edit = prompt("Enter a new item", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit + " ";
}