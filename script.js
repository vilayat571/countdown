var main = document.getElementById('main');
var date = new Date();

date.setFullYear(2021);
date.setMonth(11);
date.setDate(1);
date.setHours(10);
date.setMinutes(30);



/* Img */
var img = document.createElement('img');
img.setAttribute('src','https://vannilla-js-basic-project-12-countdown.netlify.app/gift.jpeg');
img.setAttribute('alt','phone');
img.style.width = '560px';
img.style.height = '354px';
main.appendChild(img);


/* Div */
var bDiv = main.appendChild(document.createElement('div'));
bDiv.classList.add('div')




/* Days */
let day = (date.getDate() + (30 - new Date().getDate()));
var p = document.createElement('p');
p.setAttribute('title','day');
p.appendChild(document.createTextNode(`${day} - days`));
p.style.padding = '12px 12px';
p.style.background = '#102a42';
p.style.color = '#fff';
p.style.fontSize = '16px';
p.style.fontWeight = 'bold';
p.style.border = 'none';
p.style.outline = 'none';
p.style.borderRadius = '5px';
bDiv.appendChild(p);


/* Hours */
var dateHour = (date.getHours() * 60) + date.getMinutes();
var todayHour = (24 * 60 - ((new Date()).getHours() * 60) + (new Date()).getMinutes())
let totalHour = Math.round((dateHour + todayHour) / 60);
var p = document.createElement('p');
p.setAttribute('title','hour');
p.appendChild(document.createTextNode(`${totalHour} - hours`));
p.style.padding = '12px 12px';
p.style.background = '#102a42';
p.style.color = '#fff';
p.style.fontSize = '16px';
p.style.fontWeight = 'bold';
p.style.border = 'none';
p.style.outline = 'none';
p.style.borderRadius = '5px';
bDiv.appendChild(p);


/* Minutes */
var dateHour = (date.getHours() * 60) + date.getMinutes();
var todayHour = (24 * 60 - ((new Date()).getHours() * 60) + (new Date()).getMinutes())
let minutes =(59-Math.round((((dateHour + todayHour) / 60).toPrecision(4).slice(3,5) / 100) * 60));
var p = document.createElement('p');
p.setAttribute('title','minutes');
p.style.padding = '12px 12px';
p.style.background = '#102a42';
p.style.color = '#fff';
p.style.fontSize = '16px';
p.style.fontWeight = 'bold';
p.style.border = 'none';
p.style.outline = 'none';
p.style.borderRadius = '5px';
p.innerText = `${minutes} - minutes`;
bDiv.appendChild(p);
setInterval(() => {
    minutes > 0 ? minutes-- : minutes=(59-Math.round((((dateHour + todayHour) / 60).toPrecision(4).slice(3,5) / 100) * 60))
    p.innerText = `${minutes} - minutes`
},60000);

/* Seconds */
let sec = 60;
let h1 = document.createElement('h1');
setInterval(() => {
    sec > 0 ? sec-- : sec = 59
    h1.style.padding = '12px 12px';
    h1.style.background = '#102a42';
    h1.style.color = '#fff';
    h1.style.fontSize = '16px';
    h1.style.fontWeight = 'bold';
    h1.style.border = 'none';
    h1.style.outline = 'none';
    h1.style.borderRadius = '5px';
    bDiv.appendChild(h1);
    h1.innerHTML = `${sec} - seconds`;
},1000);


