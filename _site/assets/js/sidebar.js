function toggleHeader(){
    document.getElementById('header').classList.toggle('active');

    const elements = document.getElementsByClassName("liquid");
    const permanent = document.getElementsByClassName("liquid");

    let check = document.getElementById('header').classList;

    if (check.contains("active"))
    {
        // while (elements.length > 0) elements[0].remove();
        $("#collapse").children().hide();
        $(".copyright").children().hide();
    }
    else {

        $("#collapse").children().show();
        $(".copyright").children().show();
    }
    
}
