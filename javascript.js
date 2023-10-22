//Declares variable and assigns it an arrow function
let calcScrollValue = () => {

    //Assigns ids to variable scrollProgress and progressValue
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");

    //Declares variable pos to track the number of pixels the document is scrolled vertically
    let pos = document.documentElement.scrollTop;

    //Determines scrollable height of doc by subtracting visible height from total height
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    //Computes scroll percentage
    let scrollValue = Math.round((pos * 100) / calcHeight);
    console.log(scrollValue);

    //Displays only if user has scrolled more than 100 pixels, else hides
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }

    else {
        scrollProgress.style.display = "none";
    }

    //When clicked on returns to top of page
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    //Gradient is based on scroll percentage the more one scrolls the more blue there will be
    scrollProgress.style.background = `conic-gradient(#449eff ${scrollValue}%, #ffffff ${scrollValue}%)`;

};

//Calls the function when the user scrolls and when the page loads
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;