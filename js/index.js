const container = document.querySelector('.container')
const links = document.querySelectorAll('nav a')
let url = 'partials/home.html'

const loadContent = function (urlFeed) {
    fetch(urlFeed)
        .then(function (response) {
            if (response.ok) {
                return response.text()
            }

            throw new Error(response.statusText)
        })

        .then(function (data) {
            container.innerHTML = data
        })

        .catch(function (error) {
            errors.innerText = `Problem: ${error.message}`
        })
}

loadContent(url)

const selectContent = function (ev) {
    ev.preventDefault()
    let url = ev.target.getAttribute('href')
    loadContent(url)
}

links.forEach(function (link) {
    link.addEventListener("click", selectContent);
});