// category api 
const newsCategoriesApi = async() =>{
    try{
      const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
      const data = await res.json()
      return data
    }catch(error){
      console.log(error);
    }
}

const displayAllNewsCategories = async() => {
    const newsCategories = await newsCategoriesApi()
    const newsCategorie= newsCategories.data.news_category;
    const menu = document.getElementById('news-categories')
    for(const categorie of newsCategorie ){
        // console.log(categorie.category_name);

        const li = document.createElement('li')
            li.innerHTML =`
            <a onclick = "LoadAllNewsDetaild('${categorie.category_id}')" class="text-decoration-none px-4 text-black-50" type="button" >${categorie.category_name}</a>
            `
            menu.appendChild(li);

    }

}

const LoadAllNewsDetaild = async(idCategory) =>{

    // remove spinner 
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('d-none');
    
    const url = `https://openapi.programming-hero.com/api/news/category/${idCategory}`
  try{
    fetch(url)
    .then(res => res.json())
    .then(data => displayCatDetails(data.data))
  }catch(error){
    console.log(error);
  }
}

const displayCatDetails = catDetails => {
  // console.log(cat);
  catDetails.sort(function(a,b){
    return b.total_view - a.total_view
  });

  // data found 
  const catCountElemnet = document.getElementById('category-found');
    // catCountElemnet.innerText = (catDetails.length);

    if (catDetails.length === 0) {
      catCountElemnet.innerText = ('Sorry! No data found')
  }
  else{
  catCountElemnet.innerText = (catDetails.length + "  " + "Data found ");
  
  }


  const categoryDetails = document.getElementById('category_container');
  // const div = document.createElement('div')

  // spinner add 
  spinner.classList.add('d-none')
  categoryDetails.innerHTML=`` ;
  catDetails.forEach(catDetails => {
    const catDiv = document.createElement('div');
    
    
      catDiv.classList.add('col');
      catDiv.innerHTML=`
      <div class="card mb-3 container" style="max-width: 1200px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${catDetails.image_url ? catDetails.image_url: 'Not Found'}" class="img-fluid rounded-start" alt="...">
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${catDetails.title ? catDetails.title: 'Not Found'}</h5>
            <p class="card-text">${catDetails.details.slice(0, 300)  ? catDetails.details.slice(0, 300): 'Not Found'}...</p>
            <img src="${catDetails.author.img ? catDetails.author.img: 'Not Found'}" class="thumbnail-img" alt="...">
            <span>${catDetails.author.name ? catDetails.author.name: 'Not Found'}</span>
            <span class="mr-5 ps-5">View: ${catDetails.total_view ? catDetails.total_view: 'Not Found'}</span>
            <button type="button" class="btn-primary btn ms-5 ms-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            See More
            </button>
          </div>
        </div>
      </div>
    </div>
      `
      categoryDetails.appendChild(catDiv);
  });  
 


}



displayAllNewsCategories()
newsCategoriesApi()





// blog post show 
 document.getElementById('blog-post').addEventListener('click', function(){

    const blog = document.getElementById('question-show')
    blog.innerText= ``; 
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="accordion col" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         What is the difference between let and var and const in javascript?
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <strong>Ans: </strong> The scope of a var variable is functional scope. The scope of a let variable is block scope. The scope of a const variable is block scope. It can be updated and re-declared into the scope.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         What is the difference between array function and normal function in javascript?
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Ans:</strong> In regular JavaScript functions, arguments keywords can be used to access the passed arguments when the function is invoked. But, arrow functions do not have their own arguments and it uses the arguments from the outer function.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Why we use template string in javascript?
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>Ans:</strong> Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.
        </div>
      </div>
    </div>
  </div>
    `
    blog.appendChild(div)
 })








 

// const newsCategoriesApi = async() =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
//     const data = await res.json()
//     return data
// }

// const displayAllNewsCategories = async() => {
//     const newsCategories = await newsCategoriesApi()
//     const newsCategorie= newsCategories.data.news_category;
//     const menu = document.getElementById('news-categories')
//     for(const categorie of newsCategorie ){
//         // console.log(categorie.category_name);

//         const li = document.createElement('li')
//             li.innerHTML =`
//             <a class="text-decoration-none px-4 text-black-50" type="button" >${categorie.category_name}</a>
//             `
//             menu.appendChild(li);

//     }
// }
// newsCategoriesApi()
// displayAllNewsCategories()


// // blog post show 
//  document.getElementById('blog-post').addEventListener('click', function(){
//     const blog = document.getElementById('question-show')
//     const div = document.createElement('div')
//     div.classList.add('div')
//     div.innerHTML = `
//     <div class="accordion" id="accordionExample">
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingOne">
//         <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//          What is the difference between let and var and const in javascript?
//         </button>
//       </h2>
//       <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//         <div class="accordion-body">
//         <strong>Ans: </strong> The scope of a var variable is functional scope. The scope of a let variable is block scope. The scope of a const variable is block scope. It can be updated and re-declared into the scope.
//         </div>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingTwo">
//         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//          What is the difference between array function and normal function in javascript?
//         </button>
//       </h2>
//       <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//         <div class="accordion-body">
//           <strong>Ans:</strong> In regular JavaScript functions, arguments keywords can be used to access the passed arguments when the function is invoked. But, arrow functions do not have their own arguments and it uses the arguments from the outer function.
//         </div>
//       </div>
//     </div>
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="headingThree">
//         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//         Why we use template string in javascript?
//         </button>
//       </h2>
//       <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//         <div class="accordion-body">
//           <strong>Ans:</strong> Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.
//         </div>
//       </div>
//     </div>
//   </div>
//     `
//     blog.appendChild(div)
//  })








