function getRandomEmoji() {
    const apiUrl = "https://emojihub.yurace.pro/api/random";
    return fetch(apiUrl)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Failed to fetch emoji");
            }
        })
        .then((data) => {
            const card = `
            <div class="col-md-3 mb-3">
                <div class="card">
                    <p class="card-text" style="font-size:100px;text-align:center">${data.htmlCode[0]}</p>
                    <div class="card-body">
                        <h5 class="card-title" style="text-align:center">${data.name}</h5>
                    </div>
                </div>
            </div>
            `;
            document.querySelector("#emoji-display").innerHTML += card;
        })
        .catch((error) => {
            console.error(error);
        });
}
function fetchAndDisplayEmojis(count) {
    const emojiDisplay = document.getElementById("emoji-display");
    emojiDisplay.innerHTML = "";
    for (let i = 0; i < count; i++) {
        getRandomEmoji();
    }
}
document.getElementById("fetch-emojis").addEventListener("click", () => {
    const count = 100;
    fetchAndDisplayEmojis(count);
});