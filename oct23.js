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
