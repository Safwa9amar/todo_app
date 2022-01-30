const data = JSON.parse(window.localStorage.getItem("todoData"));
const tagsDataPast = document.getElementById("tagsDataPast");
const todoTagOption = document.getElementById("Tags");
const tagColor = document.getElementById("tagColor");

const ids = [];
let Tags = data !== null && data.map((el) => el.Tag);
let filtered =
  data !== null &&
  data.filter(({ Tag }, index) => !Tags.includes(Tag, index + 1));

document.addEventListener("DOMContentLoaded", () => {
  updateTags(tagsDataPast);
});

function updateTags(targ) {
  if (data == null) {
    targ.innerHTML = `No Tags been added yet`;
  }
  data !== null &&
    filtered.forEach((element) => {
      if (element == false) {
        return;
      } else {
        let option = document.createElement("option");
        option.value = element.Tag;
        option.textContent = element.Tag;
        todoTagOption.appendChild(option);
        let html = `
                  <div class="tag_name" >${element.Tag}</div>
                  <div class="tag_length">${
                    Tags.filter((el) => el === element.Tag).length
                  }</div>
                  `;
        let div = document.createElement("div");
        div.className = "tag-color";
        div.style.border = `1.5px solid ${element.color}`;
        div.innerHTML = html;
        div.addEventListener("click", () => {
          let selectedTag = document.querySelectorAll(`#${element.Tag}`);
          selectedTag.forEach((el) => {
            el.style.color = element.color;
          });
        });
        targ.appendChild(div);
      }
    });
}

function todo_list(data, filtered) {
  let todo_list = document.getElementById("todo_list");
  if (data == null) {
    todo_list.innerHTML = `No Task have been added yet`;
  }
  data !== null &&
    data
      .filter((el) => (filtered == "All" ? el.Tag : el.Tag == filtered))
      .forEach((el) => {
        let html = `
        <label  for='${el.id}' id='${el.Tag}'>${el.Todo} ${el.date}  ${el.time}</label>
        <input  type="checkbox" id="${el.id}" />
        `;
        let li = document.createElement("li");
        li.className = "form-group";
        li.innerHTML = html;

        el !== false && todo_list.appendChild(li);
      });
}

todo_list(data, `All`);

function checkItem(data) {
  let checkbox = document.querySelectorAll("input[type = checkbox]");
  checkbox.forEach((el) => {
    let id = parseInt(el.id);
    let localIds = localStorage.getItem("ids");
    localIds !== null &&
      localIds.split(",").forEach((el_id) => {
        if (el_id == id) {
          el.setAttribute("checked", true);
          el.previousElementSibling.style.textDecoration = "line-through";
        }
      });
    el.addEventListener("change", () => {
      if (el.checked == true) {
        el.previousElementSibling.style.textDecoration = "line-through";
        let jobDone = document.getElementById("jobDone");
        jobDone.classList.add("active");
        setTimeout(() => {
          jobDone.classList.remove("active");
        }, 1000);

        ids.push(id);
        localStorage.setItem(
          "ids",
          Array.prototype.concat(localStorage.ids, ids)
        );
      } else {
        el.previousElementSibling.style.textDecoration = "none";
        let arr = localStorage.ids.split(",").filter((el) => el != id);
        localStorage.setItem("ids", arr);
      }
    });
  });
}
checkItem(data);
