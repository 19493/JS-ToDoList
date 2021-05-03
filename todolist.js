const input = document.querySelector('#task');
const btn = document.querySelector('#liveToastBtn');
const myList = document.getElementsByTagName('li');
const close = document.getElementsByClassName("close");



//Yeni liste elemanı ekleme işlemi
btn.addEventListener('click', () => {
  let txt = input.value;
  if (txt === "") {
    $('.error').toast("show")
  } else {
    $(".success").toast("show");
    let li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[""]);
    input.value = '';
  }
  //Yeni liste elemanını silme işlemi
  for (i = 0; i < myList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }

  let getLocalStorage = localStorage.getItem("ToDoList");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push(txt);
  localStorage.setItem("ToDoList", JSON.stringify(listArr));


})



//Önceden yazılı liste elemanları için kapatma butonu ve kapatma fonksiyonu
for (i = 0; i < myList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}



//check işlemi
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  })




