const ul = document.querySelector("ul");
const input = document.querySelector("input");
const constNum = document.querySelector(".details span");

let maxTags = 10;
let tags = [];
countTag();

function countTag() {
    input.focus();
    constNum.innerText = maxTags - tags.length;
}

function createTag(tag) {
    const liTag = `<li>${tag}<i class="fa-solid fa-xmark" onclick="remove(this, '${tag}')"></i></li>`;
    ul.insertAdjacentHTML("afterbegin", liTag);
    countTag();
}

function remove(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    countTag();
}

function addTag(e) {
    if (e.key === "Enter") {
        const inputTags = e.target.value.split(',').map(tag => tag.trim());
        inputTags.forEach(tag => {
            if (tag.length > 0 && tag.length <= 10 && tags.length < maxTags && !tags.includes(tag)) {
                tags.push(tag);
                createTag(tag);
            }
        });
        e.target.value = ''; 
    }
}


input.addEventListener("keyup", addTag);

const removebtn = document.querySelector("button");
removebtn.addEventListener("click", () =>{
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTag();

})