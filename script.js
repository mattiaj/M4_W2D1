// Your API key: YHszghGsFZkdQi1CMYxl08fCC3ASQEePqG8aaBgiDeCzpx3UklXUqqWF

function fetch1(search) {
    fetch("https://api.pexels.com/v1/search?query="+search, {
        headers: {
            Authorization: "YHszghGsFZkdQi1CMYxl08fCC3ASQEePqG8aaBgiDeCzpx3UklXUqqWF"
        }
    })
    .then((response) => response.json()) 
    .then((json) => setImg(json)) 
    .catch((err) => console.log("Error detected: ", err) );
}

function setImg(result){
    let array = result.photos;
    console.log(array)
    array.forEach((element) => {
        let container = document.getElementById('img-container');
        let card = document.createElement('div');
        card.classList.add('col-lg-3','col-sm-4','col-6', 'mb-3');
        container.appendChild(card);
        card.innerHTML = 
            `<div class="card">
                <img src="${element.src.tiny}" class="card-img-top rounded" alt="${element.alt}" loading="lazy">
            </div>`;
        console.log(container);
    });
    
}

fetch1("horizon")

