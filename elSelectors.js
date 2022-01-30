// all element selector
function elSelector() {
  const nav = document.querySelector("nav");
  const add_todo_section = document.querySelector("section:nth-child(2)");
  const list_todo_section = document.querySelector("section:nth-child(3)");
  const add_new_item = document.getElementById("add_new_item");
  const view_list = document.getElementById("view_list");
  const clearData = document.getElementById("clearData");
  const section_selector = document.querySelectorAll("section");
  const nav_show = document.getElementById("nav-show");
  const humberger_menu = document.getElementById("humberger_menu");
  // element selector for add new items page
  // form element selectors
  // form element selectors
  const pre_list = document.getElementById('pre_list')
  const add_to_prelist = document.getElementById("add_to_prelist");
  const save_items_btn = document.getElementById("save_items_btn");
  return {
    // element selector for nav bar and ui
    // element selector for nav bar and ui
    section_selector,
    nav,
    add_new_item,
    view_list,
    clearData,
    add_todo_section,
    list_todo_section,
    nav_show,
    humberger_menu,
    // element selector for add  items page
    // form element selectors
    pre_list,
    add_to_prelist,
    save_items_btn,
  };
}
