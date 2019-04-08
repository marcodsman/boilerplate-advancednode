html
  head
    title Profile Home
    meta(name='description', content='Profile')
    link#favicon(rel='icon', href='https://hyperdev.com/favicon-app.ico', type='image/x-icon')
    meta(charset='utf-8')
    meta(http-equiv='X-UA-Compatible', content='IE=edge')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel='stylesheet', href='/public/style.css')
  body
    h1.border.center FCC Advanced Node and Express
    //add your code below, make sure its indented at this level
    h2.center#welcome Welcome, #{username}!
    a(href='/logout') Logout
        
    script(src='https://code.jquery.com/jquery-2.2.1.min.js', integrity='sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00=', crossorigin='anonymous')
    script(src='/public/client.js')
