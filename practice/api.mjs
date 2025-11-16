const apiUrl = "https://api.chucknorris.io/jokes/random";
async function callChuck() {
  try {
    const res = await fetch(apiUrl);
    if(!res.ok){
        throw new Error("Network error");
    }
    const data = await res.json();
    console.log(data.value);
  } catch (error) {
    console.error("Error:",error.message);
  }
}
callChuck();


async function addTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Learn Async Await",
        completed: false,
      }),
    });

    const data = await response.json();
    console.log("Created:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

addTodo();
