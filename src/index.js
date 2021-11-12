
window.addEventListener('resize', () => {
    console.log(window.innerWidth);
})

/**
 * Elements
 */
const Elements = (() => {
    const dropDownButton = document.querySelector('.dropDown');
    const closeMenuButton = document.querySelector('.closeMenuModalButton')

    function dropDownMenuEventListeners() {
        dropDownButton.addEventListener('click', dropDownMenuOpen);
    }

    return {
        openDropDownMenu: dropDownMenuEventListeners,
    };
})();
Elements.openDropDownMenu();


/**
 * Dropdown menu functionality
 */


function dropDownMenuOpen() {
    const modal = document.querySelector('.menuModal');
    const modalContainer = document.querySelector('.menuModalContainer');
    
    if (makeElements.giveDisplay(modalContainer) === 'none') {
        
        modalContainer.style.display = 'grid';
        modal.style.display = 'grid';

        anime({
            targets: '.menuModal',
            translateY: -1500,
            easing: 'easeInOutSine',
            backgroundColor: 'yellow',
            display: 'grid',
        })
    
        anime({
            targets: '.menuModalContainer',
            translateY: -1700,
            easing: 'easeInOutSine',
            backgroundColor: 'green',
            display: 'grid',
        })
        
    } else if (makeElements.giveDisplay(modalContainer) === 'grid') {
        
        anime({
            targets: '.menuModal',
            translateY: 1500,
            easing: 'easeInOutSine',
            backgroundColor: 'transparent',
            display: 'none',
        })
        
        anime({
            targets: '.menuModalContainer',
            translateY: 1700,
            easing: 'easeInOutSine',
            backgroundColor: 'transparent',
            display: 'none',
        })
        setTimeout(() => { makeElements.displayNone(modal) }, 500);
        setTimeout(() => { makeElements.displayNone(modalContainer) }, 500);
    }  
}

const makeElements = (() => {
    function makeElementDisplayNone(ele) {
        ele.style.cssText = 'display: none';
    }

    function makeElementDisplayGrid(ele) {
        ele.style.cssText = 'display: grid';
        
    }

    function checkDisplay(ele) {
        return ele.currentStyle ? ele.currentStyle.display : 
        getComputedStyle(ele, null).display;
    }

    return {
        displayNone: makeElementDisplayNone,
        displayGrid: makeElementDisplayGrid,
        giveDisplay: checkDisplay,
    }
})();
