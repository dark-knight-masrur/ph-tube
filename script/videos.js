console.log('lets do for something videos');


//1. fetch, load and show videos on html

//create load catagories
const loadVideos = (searchText = "") => {

    //fetch the data

    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error)
        )
}

// display the videos to html 

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos")

    //avoid staying existing videos and clear previous 
    videoContainer.innerHTML = "";

    //show no video card if there is no video on category
    if (videos.length == 0) {
        videoContainer.classList.remove('grid')
        videoContainer.innerHTML = `
    
 <div id="noContent" class="min-h-[200px] flex flex-col justify-center gap-5 items-center mt-44">
                <img src="./assests/Icon.png" alt="">
                <p class="text-4xl font-bold text-center">Oops!! Sorry, There is no <br>content here</p>
            </div>

    `
    } else {
        videoContainer.classList.add('grid')
    }
    // add data on HTML 
    videos.forEach((video) => {
        console.log(video);

        // create a button 
        const card = document.createElement("div")
        card.classList = "card card-compact bg-base-100  shadow-xl"

        card.innerHTML =
            `
        <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
       />
        ${video.others.posted_date?.length == 0 ? "" :
                `<span class="absolute right-2 bottom-2 text-white bg-black rounded p-1 text-xs">
                ${getTimeString(video.others.posted_date)}</span>`
            }
  </figure>
  <div class="px-0 py-2">
    <div class="flex gap-4">
        <div>
        <img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture}>
               </div>

        <div>
            <h2 class="font-bold">${video.title}</h2>
            <div class="flex gap-1 items-center">
            <p>${video.authors[0].profile_name}</p>
            
${video.authors[0].verified == true ?
                `<img src="../assests/verified icon.png"/ class="h-4 w-4">
` : ""}
            </div >
    <p ><button class="btn btn-sm btn-error">Details</button></p>
        </div >
    
  </div >


    `

        // add videos  to container 
        videoContainer.append(card)

    });
}

loadVideos()