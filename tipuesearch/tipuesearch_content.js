var tipuesearch = {"pages":[{"title":"Hello World","url":"/hello-world.html","text":"Welcome to Hexo! This is your very first post. Check documentation for more info. If you get any problems when using Hexo, you can find the answer in troubleshooting or you can ask me on GitHub. Quick StartCreate a new post1$ hexo new &quot;My New Post&quot; More info: Writing Run server1$ hexo server More info: Server Generate static files1$ hexo generate More info: Generating Deploy to remote sites1$ hexo deploy More info: Deployment","tags":""},{"title":"Search","url":"/Search/index.html","text":"const searchInput = document.getElementById('search-input'); const searchResults = document.getElementById('search-results'); searchInput.addEventListener('input', function() { const query = this.value.toLowerCase(); fetch('/search.json') .then(response => response.json()) .then(posts => { const results = posts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query)); searchResults.innerHTML = results.map(post => `${post.title}`).join(''); }); });","tags":""},{"title":"关于本站","url":"/about_website/index.html","text":"","tags":""}]}