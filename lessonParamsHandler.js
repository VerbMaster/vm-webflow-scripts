function handleParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const conclusionType = urlParams.get('conclusionType');
    const showNavBar = urlParams.get('showNavBar');
 
    var practiceTimeDiv = document.getElementById("Practice-Time-Div");
    var getTheAppDiv = document.getElementById("Get-The-App-Div");
 
    getTheAppDiv.style.display = "flex";
    practiceTimeDiv.style.display = "none";

    if (conclusionType === "practiceTime") {
        practiceTimeDiv.style.display = "flex";
        getTheAppDiv.style.display = "none";
    } else if (conclusionType === "getTheApp") {
        practiceTimeDiv.style.display = "none";
        getTheAppDiv.style.display = "flex";
    } else if (conclusionType === "none") {
        practiceTimeDiv.style.display = "none";
        getTheAppDiv.style.display = "none";
    }

    var navBar = document.getElementById("Nav-Bar");

    if (showNavBar === "false") {
        navBar.style.display = "none";
    }  
}