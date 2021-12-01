const button1 = document.getElementById("button1");
button1.addEventListener('click',updateHTML,true);

function updateHTML(){
  test1.innerHTML = "JSのログ";
  const pro1 = new Promise((resolve)=>{
    console.log("bbb");
  
    window.setTimeout(() => {
        c1.innerHTML = "resolveのログ1";
        resolve();
      }, 3000);
  });
  
  pro1.then(()=>{
    console.log("aaaa");
    c2.innerHTML = "resolveのログ2";
  })
  .then(()=>{
    console.log("cccc");
    c3.innerHTML = "resolveのログ3";
  });
}

document.getElementById("syutoku").addEventListener('click',()=>{
  let txform = document.getElementById("atai").value;
  let result = document.getElementById("res");
  result.innerText = txform+"aaaaa";
});