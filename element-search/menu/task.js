const mainMenus = document.querySelectorAll('.menu_main');

mainMenus.forEach(mainMenu => {
    const subMenus = mainMenu.querySelectorAll('.menu_sub');
    subMenus.forEach(subMenu => {
        const menuLink = subMenu.closest('.menu__item').querySelector('.menu__link');
        menuLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (subMenu.classList.contains('menu_active')) {
                subMenu.classList.remove('menu_active');
            } else {
                for (let sub of subMenus) {
                    sub.classList.remove('menu_active');
                }
                subMenu.classList.add('menu_active');
            }
        });
    });
});