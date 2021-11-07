const dropdowns = document.querySelectorAll('.dropdown');

Array.from(dropdowns).findIndex((dropdown) => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');

    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
        Array.from(dropdownLinks).findIndex((dropdownLink) => {
            dropdownLink.addEventListener('click', (e) => {
                e.preventDefault();
                dropdownList.classList.remove('dropdown__list_active');
                dropdownValue.textContent = dropdownLink.textContent;
            });
        });
    });
});