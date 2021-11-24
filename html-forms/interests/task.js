const interests = document.querySelectorAll('.interest');

Array.from(interests).findIndex((interest) => {
    const checkboxes = interest.querySelectorAll('.interest__check');
    Array.from(checkboxes).findIndex((checkbox) => {
        checkboxes[0].addEventListener('change', () => {
            if (checkboxes[0].checked === true) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            }
        });  
    });
});
