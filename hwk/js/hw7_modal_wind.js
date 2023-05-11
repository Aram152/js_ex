const openButton_2 = document.querySelector('#hw7Modal');
const successModal_2 = createModal('the message has been sent, thx');
const body = document.body;

openButton_2.addEventListener('click', e => {
    body.appendChild(successModal_2);
})

function createModal(content_2) {
    const overlayElement_2 = document.createElement('div');
    overlayElement_2.classList.add('overlay');

    const template = document.querySelector('#hw7');
    overlayElement_2.innerHTML = template.innerHTML;

    overlayElement_2.addEventListener('click', e => {
        if (e.target === overlayElement_2) {
            closeElement_2.click();
        }
    })

    const closeElement_2 = overlayElement_2.querySelector('.close');
    closeElement_2.addEventListener('click', e => {
        e.preventDefault();
        body.removeChild(overlayElement_2);
    })

    const contentElement = overlayElement_2.querySelector('.content');
    contentElement.innerHTML = content_2;

    return overlayElement_2;
}