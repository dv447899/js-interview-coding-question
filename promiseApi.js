const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function apifetch(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
}

apifetch(apiUrl);
