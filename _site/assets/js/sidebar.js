function toggleHeader(){
    document.getElementById('header').classList.toggle('active');
    document.getElementById('main').classList.toggle('active');

    let check = document.getElementById('header').classList;

    if (check.contains("active"))
    {
        $("#collapse").children().hide();
        $(".copyright").children().hide();
    }
    else {

        $("#collapse").children().show();
        $(".copyright").children().show();
    }
    
}
