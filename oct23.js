async function aggregateData() {
    try {
        const usersURL = "https://jsonplaceholder.typicode.com/users";
        const postsURL = "https://jsonplaceholder.typicode.com/posts";

        const [usersResponse, postsResponse] = await Promise.all([
            fetch(usersURL),
            fetch(postsURL)
        ]);

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        console.log("Users:", users);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

aggregateData();
