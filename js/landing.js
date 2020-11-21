function slideShow(number){
    var name = document.getElementById("name");
    var country = document.getElementById("country");
    var explanation = document.getElementById("explanation");
    var image = document.getElementById("body");

    // document.getElementById("description").style.transition = ".5s";

    if(number == 1){
        name.innerHTML = "handara bali gate";
        country.innerHTML = "bali now";
        explanation.innerHTML = "Handara Gate is actually the entrance to a golf resort. The traditional Hindu gate symbolises the entrance from the outer world to the temple, or in this case, golf course, and plays an important role in Indonesian culture, particularly in Bali."
        image.style.backgroundImage = "url('../media/images/bali3.jpg')";
    }

    if(number == 2){
        name.innerHTML = "mecca";
        country.innerHTML = "saudi arabia now";
        explanation.innerHTML = "Makkah, officially Makkah al-Mukarramah and commonly shortened to Mecca, is the holiest city in Islam and the capital of the Makkah Province of Saudi Arabia. The city is 70 km (43 mi) inland from Jeddah on the Red Sea, in a narrow valley 277 m (909 ft) above sea level. Its last recorded population was 1,578,722 in 2015."
        image.style.backgroundImage = "url('../media/images/saudi.jpg')";
    }

    if(number == 3){
        name.innerHTML = "honshu";
        country.innerHTML = "japan now";
        explanation.innerHTML = "Honshū (本州) is the largest island of Japan, housing the great majority of its population and hosting most of the visitors as well. Due to its size, it is commonly subdivided into smaller regions. "
        image.style.backgroundImage = "url('../media/images/japan.jpg')";
    }
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();