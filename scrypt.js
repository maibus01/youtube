const triDash = document.getElementById('tridash');

tridash.addEventListener('click', function(){
    let sidBar = document.getElementById('sidebar');
    sidBar.classList.toggle('hide');
    sidBar.style.visibility = "visible";
})

