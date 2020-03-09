
const data = [
    {
        name: "公告",
        url: "https://wxzzzwzm.cn/owm/jisuan/index.html"
    },
    {
        name: "使用帮助",
        url: "https://wxzzzwzm.cn/owm/jisuan/help.html"
    },

    {
        name: "更新日志",
        url: "https://wxzzzwzm.cn/owm/jisuan/logs.html"
    },
    {
        name: "已知问题",
        url: "https://wxzzzwzm.cn/owm/jisuan/bugs.html"
    },
    {
        name: "感谢大全",
        url:"https://wxzzzwzm.cn/owm/jisuan/3q.html"
    },
    {
        name: "img",
        url:"./img/icon.png"
    }
];


let navBar = document.querySelector('.nav-bar');
let navUl = document.createElement('ul');
for(let i=0;i<data.length-1;i++){
    let navLi = document.createElement('li');
    let navA = document.createElement('a');
    navLi.appendChild(navA);
    navA.href = data[i].url;
    navA.innerHTML = data[i].name;
    navUl.appendChild(navLi);
}
// console.log(navBar);
let img = document.createElement('img');

img.src = data[data.length-1].url;
navBar.appendChild(img);
navUl.classList = 'clearfix';
navBar.appendChild(navUl);

let flag = true;


img.addEventListener('click',function(){
    if(flag) {
        flag = !flag;

        document.querySelector('nav ul').classList = 'nav-ul clearfix';
    }else{
        document.querySelector('nav ul').classList = '';
        flag = !flag;
    }
});
document.querySelector('nav').addEventListener('mouseleave',function(){
    document.querySelector('nav ul').classList = '';
    flag = !flag;
});
