async function aggregateData() {
  try {
    const usersURL = "https://jsonplaceholder.typicode.com/users";
    const postsURL = "https://jsonplaceholder.typicode.com/posts";

    const [usersResponse, postsResponse] = await Promise.all([
      fetch(usersURL),
      fetch(postsURL),
    ]);

    const users = await usersResponse.json();
    const posts = await postsResponse.json();

    let filterUser = [...users].map((item) => ({
      userId: item.id,
      userName: item.name,
    }));

    const filterPost = [...posts].filter(item => item.id % 2 ==0).map(item=> item);
    // console.log("Users:", filterUser);
    // console.log("Posts:", filterPost);
    return { users: [filterUser], posts: [filterPost] }
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

aggregateData();



//senior level solution 


async function aggregateData2() {
    try {
        const usersURL = "https://jsonplaceholder.typicode.com/users";
        const postsURL = "https://jsonplaceholder.typicode.com/posts";

        // 1. Concurrent Fetching (Excellent use of Promise.all)
        const [usersResponse, postsResponse] = await Promise.all([
            fetch(usersURL),
            fetch(postsURL),
        ]);
        
        // Check for HTTP errors (Senior-level robustness check)
        if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error('One or more API requests failed.');
        }

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        // 2. Clean Users (Immutability via .map is enough, no need for [...users])
        const cleanedUsers = users.map((item) => ({
            id: item.id, // Renamed key to 'id' for consistency, matching original data structure
            name: item.name,
        }));

        // 3. Filter Posts (Simplifying: filter is enough, no need for .map(item => item))
        const filteredPosts = posts.filter(item => item.id % 2 === 0);

        // 4. Return Clean Structure
        return { 
            users: cleanedUsers, // Returning the array directly
            posts: filteredPosts // Returning the array directly
        };

    } catch (error) {
        console.error("Aggregation Error:", error.message);
        return { error: 'Data loading process failed.' }; // Returning a result object instead of just logging
    }
}

// Test and log the result
aggregateData2().then(data => console.log('Final Data:', data));
