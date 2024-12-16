var posts=["保姆级刷客教程.html","搜索Plus.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };