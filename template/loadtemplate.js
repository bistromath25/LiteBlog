$(function(){
    try {
        $("#header").load("template/header.html");
        $("#sidebar-backbutton").load("template/sidebar-backbutton.html");
        $("#sidebar-sitemap").load("template/sidebar-sitemap.html");
        $("#footer").load("template/footer.html");
        console.log("All templates loaded successfully");
    } catch(e) {
        console.log("Some templates not loaded successfully")
    }
});
var base = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split('/')[1];
console.log("base url: " + base);