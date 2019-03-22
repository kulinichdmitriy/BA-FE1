const list = document.getElementById("people");
const ITEMS_PER_PAGE = 10;

let curPage = document.getElementById("cur-page");

function appendItem(data) {
    console.log(data);
    const listItem = document.createElement("li");

    const isActive = document.createElement("div");
    isActive.classList.add("is-active");
    isActive.innerHTML = data['isActive'];
    listItem.append(isActive);

    const balance = document.createElement("div");
    balance.classList.add("balance");
    balance.innerHTML = data['balance'];
    listItem.append(balance);

    const picture = document.createElement("div");
    picture.classList.add("picture");
    const image = document.createElement("img");
    image.src = data["picture"];

    picture.append(image);
    listItem.append(picture);

    list.append(listItem);
}

function showPage() {
    const pageNumber = curPage.value;
    list.innerHTML = "";
    const items = data.slice((pageNumber - 1) * ITEMS_PER_PAGE, (pageNumber) * ITEMS_PER_PAGE);
    items.forEach(function (item) {
        appendItem(item);
    });
}

showPage();