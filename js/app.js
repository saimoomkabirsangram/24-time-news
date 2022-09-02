
const newsCategoriesApi = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
    return data
}

const displayAllNewsCategories = async() => {
    const newsCategories = await newsCategoriesApi()
    const newsCategorie= newsCategories.data.news_category;
    const menu = document.getElementById('news-categories')
    for(const categorie of newsCategorie ){
        // console.log(categorie.category_name);

        const li = document.createElement('li')
            li.innerHTML =`
            <a class="text-decoration-none px-4 text-black-50" type="button" >${categorie.category_name}</a>
            `
            menu.appendChild(li);

    }
}
newsCategoriesApi()
displayAllNewsCategories()


// blog post show 
 document.getElementById('blog-post').addEventListener('click', function(){
    const blog = document.getElementById('question-show')
    const div = document.createElement('div')
    div.classList.add('div')
    div.innerHTML = `
    <div class="accordion" id="accordionExample">
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
        
//     `
//     blog.appendChild(div)
//  })