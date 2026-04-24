<button onclick="view(${i})">Ver más</button>
let currentImages = [];
let currentIndex = 0;

function view(i){
    currentImages = products[i].images;
    currentIndex = 0;
    document.getElementById("modal").classList.add("active");
    showImage();
}

function showImage(){
    document.getElementById("modalImg").src = currentImages[currentIndex];
}

function next(){
    currentIndex = (currentIndex + 1) % currentImages.length;
    showImage();
}

function prev(){
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    showImage();
}

function closeModal(){
    document.getElementById("modal").classList.remove("active");
}
img:"https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400"