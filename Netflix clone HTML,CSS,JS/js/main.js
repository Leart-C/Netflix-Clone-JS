// grabbing all the tab items and tab content item from the DOM
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');
    // Grabb content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // add showclass
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// We need event listener,when we click a tab item we are going to loop threw it
tabItems.forEach(item => item.addEventListener('click', selectItem));
