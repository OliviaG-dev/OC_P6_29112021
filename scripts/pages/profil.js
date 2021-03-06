import {
  getPhotographerId,
  getJsonData,
  getGalleryData,
  getProfil,
} from "../utils/service.js";
import { photographerFactory } from "../factories/photographer.js";
import { galleryFactory } from "../factories/gallery.js";
import { countTotalLike, addLikes } from "../utils/likes.js";

async function profil(photographer) {
  return photographerFactory(photographer).getUserProfilDOM();
}

async function getPhotographerObject(profilId) {
  const jsonData = await getJsonData();
  return jsonData.photographers.find(
    (photographer) => photographer.id === profilId
  );
}

//gallery
async function getGallery(gallery) {
  const gallerySection = document.querySelector(".body-gallery");
  gallerySection.innerHTML = "";
  for (const media of gallery) {
    const mediaGallery = galleryFactory(media);
    const mediaGalleryDOM = mediaGallery.getGalleryDOM();
    gallerySection.appendChild(mediaGalleryDOM);
  }
}

////////////////////////////////////////////////////////////////
//footerlike/price
async function createFooter(profilId, gallery) {
  const photographer = await getProfil(profilId);

  const body = document.querySelector(".footer-gallery");

  const price = photographer.price;

  const footer = document.createElement("aside");
  footer.setAttribute("id", "footer");

  const likeTotal = document.createElement("span");
  likeTotal.setAttribute("id", "footer__like-count");
  likeTotal.setAttribute("Tabindex", "1");

  const icone = document.createElement("i");
  icone.className = "fas fa-heart heart";
  icone.ariaLabel = "likes";

  const priceDays = document.createElement("span");
  priceDays.textContent = `${price}€/jour`;
  priceDays.setAttribute("Tabindex", "1");

  body.appendChild(footer);
  footer.appendChild(likeTotal);
  footer.appendChild(icone);
  footer.appendChild(priceDays);
  countTotalLike(gallery);
  addLikes();
}

/////////////////////////////////////////////////////// 

async function getMedias(filter) {
  const media = await getGalleryData(getPhotographerId());

  let mediaSorted = [];
  switch (filter) {
    case "popularity":
      mediaSorted = media.sort((a, b) => b.likes - a.likes);
      break;
    case "date":
      mediaSorted = media.sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
      });
      break;
    case "title":
      mediaSorted = media.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
      });
  }
  getGallery(mediaSorted);
  addLikes();
}

function filtersMedia() {
  const filters = document.getElementById("filters");

  filters.addEventListener("change", function () {
    getMedias(filters.value);
  });
}



async function profilInit() {
  const profilId = getPhotographerId();
  const photographer = await getPhotographerObject(profilId);
  const gallery = await getGalleryData(profilId);


  profil(photographer);
  getGallery(gallery);
  createFooter(profilId, gallery);
  filtersMedia();
}

profilInit();
