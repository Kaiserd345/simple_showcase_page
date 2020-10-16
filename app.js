window.onload = function() {
    //Modal Pop-Up
    let dialog = document.querySelector('dialog');
    document.querySelector('#contacts-show').onclick = function() {
        dialog.showModal();
    };
    document.querySelector('#contacts-close').onclick = function() {
        dialog.close();
    };

//Burger Button toggle
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open')
            menuOpen = false;
        }
    });

//Text for GoogleSearch button
    const searchButton = document.querySelector('.gsc-search-button-v2');
    console.log(searchButton);
    searchButton.innerText = "Искать";
    console.log(searchButton);
}
