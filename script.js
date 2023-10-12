const data_filter_all = document.querySelector("[data_filter_all]")
const data_filter_technology = document.querySelector("[data_filter_technology]")
const data_filter_programing = document.querySelector("[data_filter_programing]")
const data_filter_robotic = document.querySelector("[data_filter_robotic]")
const data_filter_cibersecurity = document.querySelector("[data_filter_cibersecurity]")
const data_filter_games = document.querySelector("[data_filter_games]")

const data_cardpost = document.querySelectorAll("[data_cardpost]")
const data_cardone = document.querySelector("[data_cardone]")
const data_cardtwo = document.querySelector("[data_cardtwo]")
const data_cardtree = document.querySelector("[data_cardtree]")
const data_cardfour = document.querySelector("[data_cardfour]")
const data_cardfive = document.querySelector("[data_cardfive]")
const data_cardsix = document.querySelector("[data_cardsix]")
const data_cardseven = document.querySelector("[data_cardseven]")
const data_cardeight = document.querySelector("[data_cardeight]")
const data_cardnine = document.querySelector("[data_cardnine]")
const data_cardten = document.querySelector("[data_cardten]")

const data_views_cardone = document.querySelector("[data_views_cardone]")
const data_views_cardtwo = document.querySelector("[data_views_cardtwo]")
const data_views_cardtree = document.querySelector("[data_views_cardtree]")
const data_views_cardfour = document.querySelector("[data_views_cardfour]")
const data_views_cardfive = document.querySelector("[data_views_cardfive]")
const data_views_cardsix = document.querySelector("[data_views_cardsix]")
const data_views_cardseven = document.querySelector("[data_views_cardseven]")
const data_views_cardeight = document.querySelector("[data_views_cardeight]")
const data_views_cardnine = document.querySelector("[data_views_cardnine]")
const data_views_cardten = document.querySelector("[data_views_cardten]")

const data_date = document.querySelectorAll("[data_date]")

data_views_cardone.innerHTML = localStorage.getItem("data_views_cardone") || '0'
data_views_cardtwo.innerHTML = localStorage.getItem("data_views_cardtwo") || '0'
data_views_cardtree.innerHTML = localStorage.getItem("data_views_cardtree") || '0'
data_views_cardfour.innerHTML = localStorage.getItem("data_views_cardfour") || '0'
data_views_cardfive.innerHTML = localStorage.getItem("data_views_cardfive") || '0'
data_views_cardsix.innerHTML = localStorage.getItem("data_views_cardsix") || '0'
data_views_cardseven.innerHTML = localStorage.getItem("data_views_cardseven") || '0'
data_views_cardeight.innerHTML = localStorage.getItem("data_views_cardeight") || '0'
data_views_cardnine.innerHTML = localStorage.getItem("data_views_cardnine") || '0'
data_views_cardten.innerHTML = localStorage.getItem("data_views_cardten") || '0'

data_date.forEach((data) => {
  data.innerHTML = `${new Date().toLocaleDateString()}`

})

data_filter_all.addEventListener("click", () => {
  data_cardone.style.display = "block";
  data_cardtwo.style.display = "block";
  data_cardtree.style.display = "block";
  data_cardfour.style.display = "block";
  data_cardfive.style.display = "none";
  data_cardsix.style.display = "none";
  data_cardseven.style.display = "none";
  data_cardeight.style.display = "block";
  data_cardnine.style.display = "none";
  data_cardten.style.display = "none";
});

data_filter_technology.addEventListener("click", () => {
  data_cardone.style.display = "block";
  data_cardtwo.style.display = "none";
  data_cardtree.style.display = "none";
  data_cardfour.style.display = "none";
  data_cardfive.style.display = "none";
  data_cardsix.style.display = "none";
  data_cardseven.style.display = "block";
  data_cardeight.style.display = "none";
  data_cardnine.style.display = "none";
  data_cardten.style.display = "none";
});

data_filter_programing.addEventListener("click", () => {
  data_cardone.style.display = "none";
  data_cardtwo.style.display = "block";
  data_cardtree.style.display = "none";
  data_cardfour.style.display = "none";
  data_cardfive.style.display = "none";
  data_cardsix.style.display = "none";
  data_cardseven.style.display = "none";
  data_cardeight.style.display = "none";
  data_cardnine.style.display = "block";
  data_cardten.style.display = "none";
});

data_filter_robotic.addEventListener("click", () => {
  data_cardone.style.display = "none";
  data_cardtwo.style.display = "none";
  data_cardtree.style.display = "block";
  data_cardfour.style.display = "none";
  data_cardfive.style.display = "none";
  data_cardsix.style.display = "block";
  data_cardseven.style.display = "none";
  data_cardeight.style.display = "none";
  data_cardnine.style.display = "none";
  data_cardten.style.display = "none";
});

data_filter_cibersecurity.addEventListener("click", () => {
  data_cardone.style.display = "none";
  data_cardtwo.style.display = "none";
  data_cardtree.style.display = "none";
  data_cardfour.style.display = "block";
  data_cardfive.style.display = "block";
  data_cardsix.style.display = "none";
  data_cardseven.style.display = "none";
  data_cardeight.style.display = "none";
  data_cardnine.style.display = "none";
  data_cardten.style.display = "none";
});

data_filter_games.addEventListener("click", () => {
  data_cardone.style.display = "none";
  data_cardtwo.style.display = "none";
  data_cardtree.style.display = "none";
  data_cardfour.style.display = "none";
  data_cardfive.style.display = "none";
  data_cardsix.style.display = "none";
  data_cardseven.style.display = "none";
  data_cardeight.style.display = "block";
  data_cardnine.style.display = "none";
  data_cardten.style.display = "block";
});


data_cardpost.forEach((card, indice) => {
  card.addEventListener("click", () => {
    localStorage.setItem("indice", indice)
    switch (indice) {
      case 0:
        data_views_cardone.innerHTML = parseInt(data_views_cardone.innerHTML) + 1
        localStorage.setItem("data_views_cardone", data_views_cardone.innerText)
        window.location.assign("postpage.html")
        break;

      case 1:
        data_views_cardtwo.innerHTML = parseInt(data_views_cardtwo.innerHTML) + 1
        localStorage.setItem("data_views_cardtwo", data_views_cardtwo.innerText)
        window.location.assign("postpage.html")
        break;

      case 2:
        data_views_cardtree.innerHTML = parseInt(data_views_cardtree.innerHTML) + 1
        localStorage.setItem("data_views_cardtree", data_views_cardtree.innerText)
        window.location.assign("postpage.html")
        break;

      case 3:
        data_views_cardfour.innerHTML = parseInt(data_views_cardfour.innerHTML) + 1
        localStorage.setItem("data_views_cardfour", data_views_cardfour.innerText)
        window.location.assign("postpage.html")
        break;

      case 4:
        data_views_cardfive.innerHTML = parseInt(data_views_cardfive.innerHTML) + 1
        localStorage.setItem("data_views_cardfive", data_views_cardfive.innerText)
        window.location.assign("postpage.html")
        break;

      case 5:
        data_views_cardsix.innerHTML = parseInt(data_views_cardsix.innerHTML) + 1
        localStorage.setItem("data_views_cardsix", data_views_cardsix.innerText)
        window.location.assign("postpage.html")
        break;

      case 6:
        data_views_cardseven.innerHTML = parseInt(data_views_cardseven.innerHTML) + 1
        localStorage.setItem("data_views_cardseven", data_views_cardseven.innerText)
        window.location.assign("postpage.html")
        break;

      case 7:
        data_views_cardeight.innerHTML = parseInt(data_views_cardeight.innerHTML) + 1
        localStorage.setItem("data_views_cardeight", data_views_cardeight.innerText)
        window.location.assign("postpage.html")
        break;

      case 8:
        data_views_cardnine.innerHTML = parseInt(data_views_cardnine.innerHTML) + 1
        localStorage.setItem("data_views_cardnine", data_views_cardnine.innerText)
        window.location.assign("postpage.html")
        break;

        case 9:
        data_views_cardten.innerHTML = parseInt(data_views_cardten.innerHTML) + 1
        localStorage.setItem("data_views_cardten", data_views_cardten.innerText)
        window.location.assign("postpage.html")
        break;

      default:
        break;
    }

  });
});
