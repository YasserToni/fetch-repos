// Main Variables 
let theInput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".get-button")
let reposData = document.querySelector(".show-data")


getButton.onclick = function () {
    getData();
}
function getData() {
    if (theInput.value == '') {
        reposData.innerHTML = `<span>Please Write Gethub Username </span>`
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
            .then((response) => response.json())
            .then((repositories) => {
                // Empty the container
                reposData.innerHTML = '';
                // loop in Repositories
                repositories.forEach(repo => {
                    // console.log(repo.name)
                    // Create main div
                    let mainDiv = document.createElement("div")
                    // Create text node
                    let textNode = document.createTextNode(repo.name);
                    // Append text node to main div
                    mainDiv.appendChild(textNode);

                    // Create the Url
                    let url = document.createElement("a");
                    // create text node in url
                    let urlText = document.createTextNode("Vist");
                    // Append urlText to url
                    url.appendChild(urlText);
                    // Add the hyper text referencr "href"
                    url.href = `https://github.com/${theInput.value}/${repo.name}`;
                    // set attribute blank
                    url.setAttribute("target", "_blank");
                    // append url to main div
                    mainDiv.appendChild(url);
                    // create stars count span
                    let span = document.createElement("span")
                    // creat the stars count text 
                    let spanText = document.createTextNode(`stars  ${repo.stargazers_count}`)
                    // Append spanText to the span
                    span.appendChild(spanText)
                    // Append span to main div 
                    mainDiv.appendChild(span);
                    // Add class name to main div 
                    mainDiv.className = "repo-box"
                    // Append main div to container
                    reposData.appendChild(mainDiv);
                });
            })
    }
}