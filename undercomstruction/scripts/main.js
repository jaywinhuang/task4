$( document ).ready(function() {
    document.getElementById("back").onclick = goBack;
    function goBack() {
        window.history.back();
    }
});