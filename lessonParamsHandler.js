function handleParams() {
    console.log("handleParams called");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const conclusionType = urlParams.get('conclusionType');
    const showNavBar = urlParams.get('showNavBar');
    
    console.log("conclusionType: " + conclusionType);
    console.log("showNavBar: " + showNavBar);

    var navBar = document.getElementById("Nav-Bar");
    var practiceTimeDiv = document.getElementById("Practice-Time-Div");
    var getTheAppDiv = document.getElementById("Get-The-App-Div");
 
    //  By default, the nav bar is shown and the get the app div is shown
    navBar.style.display = "block"
    getTheAppDiv.style.display = "block";
    practiceTimeDiv.style.display = "none";

    if (conclusionType === "practiceTime") {
        practiceTimeDiv.style.display = "block";
        getTheAppDiv.style.display = "none";
    } else if (conclusionType === "getTheApp") {
        practiceTimeDiv.style.display = "none";
        getTheAppDiv.style.display = "block";
    } else if (conclusionType === "none") {
        practiceTimeDiv.style.display = "none";
        getTheAppDiv.style.display = "none";
    }

    if (showNavBar === "false") {
        navBar.style.display = "none";
    } else if (showNavBar === "true") {
        navBar.style.display = "block";
    }
}