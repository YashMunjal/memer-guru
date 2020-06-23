

 async function meme() {
  var url = "https://meme-api.herokuapp.com/gimme";
  var srcData;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      srcData = data.url;
      
    });
    return `<img src=${JSON.stringify(srcData)} />` ;
   
}
export default meme();