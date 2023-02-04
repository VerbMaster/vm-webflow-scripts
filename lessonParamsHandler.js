function handleParams() {
    console.log("handling the params");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const conclusionType = urlParams.get('conclusionType');
    
    var practiceTimeDiv = document.getElementById("Practice-Time-Div");
    var getTheAppDiv = document.getElementById("Get-The-App-Div");
    practiceTimeDiv.style.display = "none";
    getTheAppDiv.style.display = "none";
    
    if (conclusionType === "practiceTime") {
        practiceTimeDiv.style.display = "block";
    } else if (conclusionType === "getTheApp") {
        getTheAppDiv.style.display = "block";
    }
}