module.exports = function () {
  fetch("https://meme-api.herokuapp.com/gimme")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
