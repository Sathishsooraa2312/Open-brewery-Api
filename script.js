function createBrev(input){
    input.map((user) => document.body.innerHTML+=`<div class="nav-container">
    <div class=container>
        <p> <span>Name :</span>${user.name}</p>
        <p><span> BreweryType :</span>${user.brewery_type}</p>
        <p><span>Address 1:</span>${user.address_2}</p>
        <p><span>Address 2:</span>${user.address_3}</p>
        <p><span>Phone No :</span>${user.phone}</p>
        <p><span>Web Url :</span> <a href=${user.website_url} target="_blank">link</a></p>
    </div>
    
    </div>`
)}



// fetch("https://api.openbrewerydb.org/breweries")
// .then((data)=>data.json())
// .then((brev)=>(createBrev(brev)))

async function getdata() {
    try {
        const data = await fetch("https://api.openbrewerydb.org/breweries", {
            method: "GET",
        });
        const brev = await data.json()
        console.log(createBrev(brev))
    } catch (clear) {
        console.log(clear)
    }
}
getdata()