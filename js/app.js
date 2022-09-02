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