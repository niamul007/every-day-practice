async function userData() {
  try {
    const usersURL = "https://jsonplaceholder.typicode.com/users";
    const postsURL = "https://jsonplaceholder.typicode.com/posts";

    const [usersInfo,postsInfo] = await Promise.all(
        [
            fetch(usersURL),
            fetch(postsURL)
        ]
    )
    if(!usersInfo.ok || !postsInfo.ok){
        throw new Error("Bad request 404")
    }
    const user = await usersInfo.json();
    const post = await postsInfo.json();

  } catch (error){
    console.error("Please check your code")
  }
}

userData().then(res=> console.log(res))