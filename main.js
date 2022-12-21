import './style.css'
import Card from "./src/components/Card";
import Navbar from "./src/components/Navbar";

document.querySelector("#app").appendChild(Navbar());

const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    const users = document.createElement("div");
    users.classList.add("card-list");
    users.id = "users-list";
    document.querySelector("#app").appendChild(users);

    data.data.map(data=>{
        console.log(data)
        return document.querySelector("#users-list").appendChild(Card({
            title: data.first_name + " " + data.last_name,
            description: "",
            image: data.avatar,
        }));    
    })
}

const fetchArticles = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const article = document.createElement("div");
    article.classList.add("card-list");
    article.id = "articles-list";
    document.querySelector("#app").appendChild(article);

    data.map(data=>{
        return document.querySelector("#articles-list").appendChild(Card({
            title: data.title,
            description: data.body,
            image: "https://picsum.photos/200",
        }));    

    }
    )
}


const actualPage = window.location.pathname;

if (actualPage === "/") {
    fetchUsers();
}

if (actualPage === "/articles") {
    fetchArticles();
}