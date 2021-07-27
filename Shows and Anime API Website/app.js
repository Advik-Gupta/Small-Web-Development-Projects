const form = document.querySelector("#dbform");
const masterDiv = document.querySelector('.showsList')
const h1 = document.querySelector('h1')

function extractData(shows) {
    for (let i = 0; i < 1000; i++) {
        let name = shows[i].show.name;
        let showImgSrc = shows[i].show.image.medium
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'show')
        masterDiv.append(newDiv)
        let showImg = document.createElement('img')
        showImg.setAttribute('src', showImgSrc)
        newDiv.append(showImg)
        let imdbId = shows[i].show.externals.imdb
        let showName = document.createElement('a')
        showName.innerText = name
        if (imdbId != null) {
            let showImdbPageLink = `https://www.imdb.com/title/${imdbId}/?ref_=fn_al_tt_1`
            showName.setAttribute('href', showImdbPageLink)
        } else {
            let showImdbPageLink = shows[i].show.url
            showName.setAttribute('href', showImdbPageLink)
        }
        showName.setAttribute('target', '_blank')
        newDiv.append(showName)
        let showGenre = shows[i].show.genres[0]
        let genre = document.createElement('p')
        genre.innerText = `Genres: ${showGenre}`
        newDiv.append(genre)
        let showStatus = shows[i].show.status;
        let showStat = document.createElement('p')
        showStat.innerText = `Status: ${showStatus}`
        newDiv.append(showStat)
        let showStory = shows[i].show.summary
        let showSummary = document.createElement('p')
        showSummary.innerHTML = showStory
        newDiv.append(showSummary)
    }
}

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();
    h1.innerText = 'Next Search Results are added below. Scroll down after searching!!!!'
    let searched = form.elements.query.value;
    let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searched}`);
    let data = res.data
    extractData(data)
});
