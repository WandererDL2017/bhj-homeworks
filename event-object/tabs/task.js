const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const tabsArray = Array.from(tabs);
const tabContentArray = Array.from(tabContent);

for (let i = 0; i < tabsArray.length; i++) {
    tabsArray[i].addEventListener('click', () => {
        tabsArray.findIndex((tab) => {
            tab.classList.remove('tab_active');
        });
        
        tabContentArray.findIndex((tabContent) => {
            tabContent.classList.remove('tab__content_active');
        });

        tabsArray[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    });
}