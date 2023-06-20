(function() {

  window.addEventListener("load", init);

  function init() {
    let addButton = id("add");
    let removeButton = id("remove");
    let changeColorButton = id("color");
    removeButton.addEventListener("click", removeItem);
    addButton.addEventListener("click", addItem);
    changeColorButton.addEventListener("click", changeColor);
  }

  /**
   *
   * Removes the last item in the To-Do List
   *
   *
   */
  function removeItem() {
    let node = id("list");
    let child = node.lastElementChild;
    child.classList.remove("item");
    child.remove();
  }

  /**
   *
   * Adds an item to the To-Do List
   *
   *
   */
  function addItem() {
    let node = document.createElement("li");
    node.appendChild(document.createTextNode("This is a list item"));
    node.classList.add("item");
    qs('ul').appendChild(node);
  }

  /**
   *
   * Returns the element with the given id
   *
   * @param {string} id – The id we are trying to find
   * @returns {HTMLElement} – The element that has that id
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   *
   * Returns the first element with the given selector
   *
   * @param {string} selector – The selector we are trying to find
   * @returns {HTMLElement} – The first element that has that selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();
