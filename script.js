function addItem() {
    var ul = document.getElementById("myList");
    var li = document.createElement("li");
    var items = document.querySelectorAll('#myList li').length;
    li.appendChild(document.createTextNode("Item " + (items + 1)));
    ul.appendChild(li);
}

function removeItem() {
    var ul = document.getElementById("myList");
    var lastLi = ul.lastElementChild;
    if (lastLi) {
        ul.removeChild(lastLi);
    }
}