window.addEventListener('load',()=>{
    localStorage.setItem('myfisrtItem1','cookieeee');
    let text = localStorage.getItem('myfisrtItem1');
    document.getElementById('text1').textContent = text;
},false);