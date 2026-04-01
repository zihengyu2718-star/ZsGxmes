document.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Z’s Games Menu</title>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<style>
body{font-family:Arial,sans-serif;background-color:#cce7ff;margin:0;padding:30px 20px}
.search-container{display:flex;justify-content:center;margin-bottom:20px}
.search-input{width:100%;max-width:1200px;padding:12px 15px;font-size:16px;border-radius:20px;border:2px solid #3399ff;box-shadow:0 0 6px #66b3ff;outline:none;box-sizing:border-box;font-family:'Press Start 2P',cursive}
.container{max-width:1200px;margin:auto}
.grid{display:grid;grid-template-columns:repeat(6,1fr);gap:15px}
.box{background-color:#99ccff;border-radius:8px;text-decoration:none;color:black;text-align:center;transition:.2s;display:flex;flex-direction:column;align-items:center;overflow:hidden;border:2px solid #3399ff;box-shadow:0 0 6px #66b3ff;cursor:pointer}
.box img{width:100%;aspect-ratio:1/1;object-fit:cover;border-bottom:2px solid #3399ff;box-shadow:0 2px 6px #66b3ff inset}
.box span{width:100%;padding:8px 5px;font-size:12px;box-sizing:border-box;display:block;font-family:'Press Start 2P',cursive;font-weight:normal}
.box:hover{background-color:#66b3ff;transform:scale(1.03);box-shadow:0 0 10px #3399ff}
</style>
</head>
<body>
<div class="search-container">
<input type="text" id="searchBar" class="search-input" placeholder="Search...">
</div>
<div class="container">
<div class="grid" id="gameGrid"></div>
</div>
<script>
var games=[
{name:"1v1.lol",link:"https://cdn.jsdelivr.net/gh/zihengyu2718-star/ZsGxmes@main/1v1lol.html",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zhscvQVY7Wi8ivdmBGFnabmlNL1He7yZ0VC5bowkng&s=10"},
{name:"3Dash",link:"https://cdn.jsdelivr.net/gh/zihengyu2718-star/ZsGxmes@main/3Dash2.html",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BU9LEdgDeR8hH_IChO08YdJKCTxSDdN_Yy50Wtkd_w&s=10"},
{name:"A Small World Cup",link:"https://cdn.jsdelivr.net/gh/zihengyu2718-star/ZsGxmes@main/ANWC.html",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7B5kaIVeQz11C4ueHW2hC2pfi9tImNDo0VHAlj5Mng&s=10"},
{name:"Drive Mad",link:"https://cdn.jsdelivr.net/gh/zihengyu2718-star/ZsGxmes@main/DriveMad.html",img:"https://play-lh.googleusercontent.com/V_egAxch0phxs10H_Z1QpWRrsH4phd8egT_5ZjYlFbXzXvwpUGpmJMn2h6HgbGkSlZSM"},
{name:"Escape Road",link:"https://cdn.jsdelivr.net/gh/zihengyu2718-star/ZsGxmes@main/EscpRd.html",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryiG-bfqYJapr5mTFfHKfW08nX6Cu9Cq1gUEvb_hlyQ&s=10"}
];
var grid=document.getElementById("gameGrid");
var tabTitle="Elk Grove Unified";
var tabFavicon="/favicon.ico";
if(!localStorage.getItem('gameSaves'))localStorage.setItem('gameSaves','{}');
var gameSaves=JSON.parse(localStorage.getItem('gameSaves'));
function renderGames(list){
grid.innerHTML="";
list.forEach(function(game){
var box=document.createElement("div");
box.className="box";
var img=document.createElement("img");
img.src=game.img;
var label=document.createElement("span");
label.textContent=game.name;
box.appendChild(img);
box.appendChild(label);
box.addEventListener("click",function(){
var newTab=window.open("about:blank","_blank");
fetch(game.link).then(res=>res.text()).then(code=>{
newTab.document.write("<!DOCTYPE html><html><head><title>"+tabTitle+"</title><link rel='icon' href='"+tabFavicon+"' type='image/x-icon'><style>body,html{margin:0;padding:0;overflow:hidden;height:100%}</style></head><body>"+code+"</body></html>");
newTab.document.close();
});
if(!gameSaves[game.name])gameSaves[game.name]={};
localStorage.setItem('gameSaves',JSON.stringify(gameSaves));
});
grid.appendChild(box);
});
}
document.getElementById("searchBar").addEventListener("keyup",function(){
var input=document.getElementById("searchBar").value.toLowerCase();
renderGames(games.filter(g=>g.name.toLowerCase().includes(input)));
});
renderGames(games);
</script>
</body>
</html>`);
