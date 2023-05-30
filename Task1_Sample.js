document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width ="0px"
document.getElementById('btno').addEventListener("click",(e)=>{
  setTimeout(() => {
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width ="400px"
  }, 100);
  setTimeout(() => {
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width ="0px"
  }, 6000);

setTimeout(() => {

let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((contests)=>{
    console.log(contests)
    ihtml = " "
    for(item in contests){
        console.log(contests[item])
        ihtml += `
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text">
              Status is ${contests[item].status}
            </p>
            <p> Ends at : ${contests[item].end_time}
            <p> Starts at : ${contests[item].start_time}
            <br/>
            <a href="${contests[item].url}" class="btn btn-primary">Visit Contest</a>
          </div>
        </div>
        `
        cardContainer.innerHTML = ihtml
    }
})}, 5000);

})