//Open your console and add the 1st code to change image
let newImg = document.querySelector('img');
newImg.src = "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";


//Open your console and add the 2nd code to change alt text
newImg.alt = "Forest";


// Then change the tree's image, shape and align text to center
document.getElementById('container').style.textAlign = "center";
document.querySelector('img').style.width = "150px";
document.querySelector('img').style.height = "150px";
document.querySelector('img').style.borderRadius = "50%";
