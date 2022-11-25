function sliderChange(val) {
    document.getElementById('myRange').innerHTML = "Rate your experience with me<br><i>1 (bad) ------- 10 (good)<br>Rating: " + val + "</i>";
    console.log(val)
}