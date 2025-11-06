const blogs = [
  {
    id: 1,
    title: "How I Started Learning Web Development",
    image: "images/blog1.jpg",
    content: "My journey began when I built my first HTML page. I soon explored CSS and JavaScript, and eventually Node.js. The key lesson — start simple, and stay consistent."
  },
  {
    id: 2,
    title: "Top 5 JavaScript Projects for Beginners",
    image: "images/blog2.jpg",
    content: "1) Calculator, 2) To-Do App, 3) Weather App, 4) Quiz Game, 5) Portfolio. Each project helps strengthen problem-solving and DOM manipulation."
  },
  {
    id: 3,
    title: "How to Stay Consistent as a Developer",
    image: "images/blog3.jpg",
    content: "Consistency is more important than long coding sessions. Even 1 hour a day can lead to mastery. Build habits, track progress, and avoid burnout."
  }
];

function loadBlog() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const blog = blogs.find(b => b.id === id);

  if (blog) {
    document.getElementById("title").textContent = blog.title;
    document.getElementById("image").src = blog.image;
    document.getElementById("content").textContent = blog.content;
  }
}

if (window.location.pathname.endsWith("blog.html")) {
  loadBlog();
}
