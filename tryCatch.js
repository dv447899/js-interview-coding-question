const fetchData = async () => {
    try {
        const res = await fetch("https://dummyjson.com/users/1"); // Await the fetch response
        const data = await res.json(); // Await the JSON parsing
        console.log("success data:", data);
    } catch (error) {
        console.log("error:", error);
    }
}

fetchData();
