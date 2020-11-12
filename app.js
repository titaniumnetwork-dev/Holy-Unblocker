const
    express = require('express'),
    app = express(),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    char_insert = require('./charinsert.js');

const config = JSON.parse(fs.readFileSync('./config.json', {
    encoding: 'utf8'
}));

let server;

server = http.createServer(app);
server.listen(process.env.PORT || config.port);

app.post('/', async(req, res) => {
    switch (req.url) {
        case '/':
            return res.send(fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8'));
    }
});

//Querystrings
app.get('/', async(req, res, t) => res.send(fs.readFileSync(path.join(__dirname, 'public', 'pages,index.html,info.html,archive,archive,hidden.html'.split(',')['/,/?in,/?fg,/?rr,/?j'.split(',').indexOf(req.url) + 1], ',surf.html,f.html,run.html,frames,redirects3,proxnav5,nav7'.replace(/,[^,]+/g, e => ([] + e.match(/\D+/)).repeat(+e.match(/\d+/) + 1)).split(',')[t = 'z,fg,rr,k,dd,n,yh,ym,a,b,y,e,d,p,c,f,g,h,i,m,t,x'.split(',').indexOf(req.url.slice(2)) + 1], (t = ',,,,krunker,discordprox,chatbox,ythub,ytmobile,alloy,node,youtube,pydodge,discordhub,pmprox,credits,flash,gtools,games5,icons,gba,terms,bookmarklets'.split(',')[t]) && t + '.html'), 'utf8')));

app.use(char_insert.static(path.join(__dirname, 'public')));