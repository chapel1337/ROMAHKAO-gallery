// written by chapel1337
// made on 9/17/2022

let titles = ["deformation", "radioactive"];
let dates = ["9/17/2022", "9/17/2022"];
let authors = ["ROMAHKAO", "ROMAHKAO"];

localStorage.setItem("cameFrom", undefined);
localStorage.setItem("titles", JSON.stringify(titles))
localStorage.setItem("dates", JSON.stringify(dates))
localStorage.setItem("authors", JSON.stringify(authors))

function redirect(link, imageNumber)
{
    window.open(link);

    localStorage.setItem("cameFrom", imageNumber);
}