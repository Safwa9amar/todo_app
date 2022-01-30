const {
  section_selector,
  nav,
  add_new_item,
  view_list,
  add_todo_section,
  list_todo_section,
  nav_show,
  humberger_menu,
  clearData,
} = elSelector();

// aside nav bar operations

clearData.addEventListener("click", (e) => {
  e.preventDefault();
  let confirmation = confirm("are you sur 🧐 to erase all saved data ?");
  confirmation === true ? eraseData() : false;
  function eraseData() {
    localStorage.clear();
    setInterval(() => {window.location.reload()}, 2000);
  }
});

section_selector.forEach((el) =>
  el.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    nav_show.classList.remove("nav-hide");
    humberger_menu.classList.remove("active");
  })
);
humberger_menu.addEventListener("click", (evt) => {
  displayNav(nav);
  evt.target.classList.toggle("active");
});
nav_show.addEventListener("click", (e) => {
  e.target.classList.toggle("nav-hide");
  add_todo_section.classList.toggle("toggle_todo_section");
});

function toggleNavEl(e) {
  let el = document.querySelectorAll(".nav-el-active");
  el.forEach((el) => {
    el.classList.remove("nav-el-active");
  });
  e.target.className = "nav-el-active";
}
document.querySelectorAll("a").forEach((el) =>
  el.addEventListener("click", (e) => {
    toggleNavEl(e);
  })
);

add_new_item.addEventListener("click", (e) => {
  e.preventDefault();
  toggleSections(e.target);
});

view_list.addEventListener("click", (e) => {
  e.preventDefault();
  toggleSections(e.target);
});

function toggleSections(el) {
  if (el === add_new_item) {
    add_todo_section.classList.add("toggle_todo_section");
    list_todo_section.classList.remove("toggle_todo_section");
  } else if (el === view_list) {
    list_todo_section.classList.add("toggle_todo_section");
    add_todo_section.classList.remove("toggle_todo_section");
  }
}

function displayNav(el) {
  el.classList.toggle("nav-active");
}
