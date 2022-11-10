// Create a "close" button and append it to each list item

var li = document.getElementsByTagName("li");
var liLength = li.length;
for (var i = 0; i < liLength; i++) {
  var closeContainer = document.createElement("span");
  closeContainer.className = "close";
  var closeText = document.createTextNode("\u00D7");
  closeContainer.appendChild(closeText);
  li[i].appendChild(closeContainer);
}

// Click on a close button to hide the current list item
var closeBtn = document.querySelectorAll(".close");
for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener(
    "click",
    function () {
      this.parentNode.style.display = "none";
    },
    false
  );
}
// Add a "checked" symbol when clicking on a list item
for (var i = 0; i < liLength; i++) {
  li[i].addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("checked")) {
        e.target.classList.remove("checked");
      } else {
        e.target.classList.add("checked");
      }
    },
    false
  );
}
// Create a new list item when clicking on the "Add" button
var myInput = document.getElementById("myInput");
var btn = document.getElementsByClassName("addBtn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener(
    "click",
    function () {
      if (myInput.value === "") {
        alert("Please, set your task befor submiting");
      } else {
        var newLi = document.createElement("li");
        var myUl = document.getElementById("myUL");
        myUL.appendChild(newLi);
        var content = myInput.value;
        var text = document.createTextNode(content);
        newLi.appendChild(text);
        var span = document.createElement("span");
        var close = document.createTextNode("\u00D7");
        span.appendChild(close);
        span.className = "close";
        newLi.appendChild(span);
        span.addEventListener(
          "click",
          function () {
            this.parentNode.style.display = "none";
          },
          false
        );
        newLi.addEventListener(
          "click",
          function (e) {
            newLi.classList.toggle("checked");
          },
          false
        );
        myInput.value = "";
      }
    },
    false
  );
}
