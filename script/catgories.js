console.log('perfectly working');

//1. fetch, load and show catergories on html

//create load catagories
const loadCategories = () => {

    //fetch the data

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error)
        )
}

//load videos by id
const loadCategoryVideo = (id) => {
    // alert(id);

    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((res) => res.json())
        .then((data) => displayVideos(data.category))
        .catch((error) => console.log(error)
        )

}

// display the catargories to html 

const displayCategories = (categories) => {
    const catergoryContainer = document.getElementById("categories")
    // add data on HTML 
    categories.forEach((item) => {
        console.log(item);

        // create a button 
        const buttonContainer = document.createElement("div")
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideo(${item.category_id})" class="btn btn-category">
        ${item.category}
        </button>
        `

        // add catergories button to container 
        catergoryContainer.append(buttonContainer)

    });
}

loadCategories()