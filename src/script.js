const submitBtn = document.getElementById('submit');
const searchField = document.getElementById('searchField');
let searchValue ;
searchField.addEventListener("change", (e) => {
    searchValue = e.target.value
})

const getLocation = async () => {
    const res = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_TDuozvvjYNRra3ppojNYquEt9tw4z&ipAddress=${searchValue}`)
    const data = await res.json()
}

submitBtn.addEventListener('click', handleSubmit)

function handleSubmit(){
    getLocation()
}