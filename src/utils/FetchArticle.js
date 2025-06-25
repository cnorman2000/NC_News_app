async function fetchArticle(article_id) {
  const response = await fetch(
    `https://nc-news-app-b6ap.onrender.com/api/articles/${article_id}`
  );
  if (!response.ok) {
    const err = new Error("Could not fetch article");
    err.status = response.status;
    throw err;
  }
  return response.json();
}

export default fetchArticle;
