async function fetchArticles() {
  const response = await fetch(
    `https://nc-news-app-b6ap.onrender.com/api/articles`
  );
  if (!response.ok) {
    const err = new Error("Could not fetch articles");
    err.status = response.status;
    throw err;
  }

  return response.json();
}

export default fetchArticles;
