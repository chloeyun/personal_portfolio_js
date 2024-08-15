const myname = document.querySelector("h1");

function handleOnName() {
  myname.innerText = "Welcome!";
}

function handleOffName() {
  myname.innerText = "Hi I'm Chloe Yun";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowOff() {
  alert("The network is not working, please check your connections");
}

function handleCopy() {
  alert("The copy is not permitted here :( ");
}

myname.addEventListener("mouseover", handleOnName);
myname.addEventListener("mouseleave", handleOffName);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("offline", handleWindowOff);
window.addEventListener("copy", handleCopy);

console.dir(myname);
