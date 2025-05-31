
const arrayList = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

myContainer = document.getElementById("image-container");
console.log(myContainer);

arrayList.forEach(createDivElement);

function createDivElement (content) {
    var itemList = [];
    let item = '<div>'+content+'</div>';
    itemList.push(item);
    myContainer.innerHTML += itemList
}

fetch("https://picsum.photos/v2/list?page=2&limit=100")
.then(res => res.json())
.then(r => {
    const images = r;
    images.forEach(i => {
        console.log(i);
        let image_tag = '<img src="'+i.download_url+'" alt="'+i.author+'" width="200px" height="200px">';
        myContainer.innerHTML += image_tag;
    })
})