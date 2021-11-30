const textsWithTooltip = document.querySelectorAll('.has-tooltip');
const textsWithTooltipArray = Array.from(textsWithTooltip);

function removeTooltip() {
    const tooltipElements = document.querySelectorAll('.tooltip');
    Array.from(tooltipElements).findIndex((tooltipElement) => {
        if (tooltipElement.classList.contains('tooltip')) {
            tooltipElement.remove();
        } 
    });
}

function createTooltip(element) {
    const blockTooltip = document.createElement('div');
    const text = element.getAttribute('title');
    const position = element.getBoundingClientRect();
    const positionTop = position.bottom;
    const positionLeft = position.left;

    blockTooltip.innerText = text;
    blockTooltip.style.top = positionTop + 'px';
    blockTooltip.style.left = positionLeft + 'px';
    element.insertAdjacentElement('beforeEnd', blockTooltip);
    blockTooltip.classList.add('tooltip', 'tooltip_active');
}

textsWithTooltipArray.findIndex((textWithTooltip) => { 
    textWithTooltip.addEventListener('click', (e) => {
        e.preventDefault();
        if (textWithTooltip.querySelector('.tooltip')) {
            removeTooltip();
        } else {
            removeTooltip();
            createTooltip(textWithTooltip);
        }
    });
});



