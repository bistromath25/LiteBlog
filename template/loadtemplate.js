$(function(){
    try {
        $("#header").load("template/header.html");
        $("#sidebar").load("template/sidebar.html");        
        console.log("All templates loaded successfully");
    } catch(e) {
        console.log("Some templates not loaded successfully")
    }
});