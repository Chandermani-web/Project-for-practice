const accessKey = "9po0D1ihkYSKT4SiXrFwGTQe6lCcTFw3n3z85jUdFKs";

const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const searchResult = document.querySelector(".images-container");
const showMoreBtn = document.querySelector(".Show-more");

let inputData = "";
let page = 1;

async function searchImage() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${inputData}&page=${page}&per_page=10`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResult.innerHTML = ""; // Clear existing results
    }

    results.forEach((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-wrapper");

        const image = document.createElement("img");
        image.src = result.urls.regular;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.innerText = result.alt_description || "View Image";

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.appendChild(imageWrapper);
    });

    // showMoreBtn.style.display = "block";
    page++;
}

formEl.addEventListener("submit", (e) => {
    // e.preventDefault();
    page = 1;
    searchImage();
});

showMoreBtn.addEventListener("click", () => {
    searchImage();
});
