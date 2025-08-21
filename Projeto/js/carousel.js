

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, uri) {
        this.image = image;
<<<<<<< HEAD
        this.title = title
        this.uri = uri
=======
        this.title = title;
        this.uri = uri;
>>>>>>> 7a4a5c04fa1d2b2d7297e79943a0ff098c1f6c2a
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._arr = arr;
            Carousel.Next(); //start
            Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);

        } else {
<<<<<<< HEAD
            //"Method Start need a Array Variable.";//
            throw "O método start precisa receber um array válido."
=======
            // throw "Method Start need a Array Variable.";
            throw "O método Start precisa receber um array válido."
>>>>>>> 7a4a5c04fa1d2b2d7297e79943a0ff098c1f6c2a
        }
    }

    static Next() {
        const carrouselElement = document.getElementById("carousel");
        const titleElement = document.getElementById("carousel-title");

<<<<<<< HEAD
        if (!carrouselElement || !titleElement ){
            console.error("elementos do carrossel não encontrados!");
=======
        if (!carrouselElement || !titleElement){
            console.error("Elementos do carrossel não encontrados!");
>>>>>>> 7a4a5c04fa1d2b2d7297e79943a0ff098c1f6c2a
            return;
        }

        const item = Carousel._arr[Carousel._sequence];

        carrouselElement.style.backgroundImage = `url(img/${item.image})`;
        carrouselElement.style.backgroundPosition = "center";
        carrouselElement.style.backgroundSize = "cover";
        carrouselElement.style.transition = "background-image 0.5s ease-in-out";

        titleElement.innerHTML = `<a href= "${item.uri}"> ${item.title}</a>`;
<<<<<<< HEAD

        Carousel._sequence = (Carousel._sequence +1) % Carousel._size;

    
=======
        
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
>>>>>>> 7a4a5c04fa1d2b2d7297e79943a0ff098c1f6c2a
    }
};
