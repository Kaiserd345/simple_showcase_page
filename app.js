window.onload = function() {
    //Modal Pop-Up
    const openPopUp = document.getElementById('contacts-show');
    const closePopUp = document.getElementById('contacts-close');
    let popUp = document.querySelector('.pop-up');

    openPopUp.addEventListener('click', () =>{
        popUp.classList.add('show');
    })

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('show');
    })



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

    //Analytics

    //click Get Loan
    const getLoanBtns = document.querySelectorAll('.get-loan');

    for (let buttonItem of getLoanBtns) {
        buttonItem.addEventListener('click', () => {
            gtag('event', 'click', {'event_category': 'button'});
            ym(68396329,'reachGoal','get-loan'); return true;
        })
    }

    //click Search
    searchButton.addEventListener('click',() => {
        gtag('event', 'clickSB', {'event_category': 'searchButton'});
        ym(68396329,'reachGoal','clickSB'); return true;
    })
}
