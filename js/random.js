var posts=["posts/5c54179b/","posts/3ba4c2ca/","posts/bb4ec20c/","posts/35689600/","posts/1a5f7dac/","posts/82a368dd/","posts/b976803d/","posts/53151699/","posts/99c9e62c/","posts/32dc38c0/","posts/df007a61/","posts/79e1ec59/","posts/97706a7b/","posts/93c0bd1/","posts/b521e48f/","posts/c251a31f/","posts/62c7b1d8/","posts/2f9ae6ed/","posts/5d5ada8e/","posts/b3558cea/","posts/a38af3f/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};