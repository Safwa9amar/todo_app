const { delItem, add_to_prelist, save_items_btn, pre_list } = elSelector();
save_items_btn.style.display = "none";
const finalData = [];

add_to_prelist.addEventListener("click", (evt) => {
  evt.preventDefault();
  const todoText = document.getElementById("todo");
  const todoTag = document.getElementById("todoTag");
  const tagColor = document.getElementById("tagColor");
  const todoDate = document.getElementById("todoDate");
  const todoTime = document.getElementById("todoTime");
  if (todoText.value === "" || todoTag.value === "") {
    alert("please fill the required inputs");
  } else {
    const formData = {
      id: Math.floor(Math.random(10) * 1000),
      Todo: todoText.value,
      Tag: todoTag.value,
      color: tagColor.value,
      date: todoDate.value,
      time: todoTime.value,
      isChecked: false,
    };
    submitData(formData);
    evt.target.form.reset();
    save_items_btn.style.display = "block";
  }
});
save_items_btn.addEventListener("click", (evt) => {
  saveDate(finalData);
  pre_list.innerHTML = "<p>memo list saved successfully<br>Reloading...</p>";
  setTimeout(() => {
    window.location.reload();
  }, 2000);
});
let submitData = (data) => {
  finalData.push(data);
  createEl(data, pre_list);
  const delItem = document.querySelectorAll(".delItem");
  delItem.forEach((element) => {
    element.addEventListener("click", (e) => {
      let id = parseFloat(e.target.parentElement.id);
      let index = finalData.findIndex((x) => x.id === id);
      if (index > -1) {
        finalData.splice(index, 1);
        e.target.parentElement.remove();
      }
    });
  });
  console.log(finalData);
};
let saveDate = (data) => {
  console.log(finalData);
  let storageD = window.localStorage.getItem("todoData") || false;
  let todoData = JSON.stringify(
    Array.prototype.concat(JSON.parse(storageD), finalData)
  );
  console.log(todoData);
  window.localStorage.setItem(`todoData`, todoData);
};

const createEl = (el, pre_list) => {
  let html = `
        ${el.Todo} <span class='tagColor' style='color : ${el.color} !important;'>${el.Tag}</span> ${el.date} ${el.time} <span class='delItem' id='delItem'>❌</span>
    `;
  let p = document.createElement("p");
  p.id = el.id;
  p.innerHTML = html;
  pre_list.appendChild(p);
};
