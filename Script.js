const getColor = () => {
  const random = Math.floor(Math.random() * 16777215);
  const number = document.getElementById("color-id");
  const changeColor = (number.textContent = `#${random.toString(16)}`);
  document.body.style.background = changeColor;
  navigator.clipboard.writeText(changeColor);
};

//event call
document.getElementById("btn").addEventListener("click", getColor);

//initial call
getColor();
console.log("hii this is test for how pull req. works.");
