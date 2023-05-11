const openButton = document.querySelector('#openOverlay');

const body = document.body;

const successModal = createModal('the message has been sent, thx');

openButton.addEventListener('click', e => {
    body.appendChild(successModal);
})

function createModal(content){
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlay');

    const containerElement = document.createElement('div');
    containerElement.classList.add('modal-container');

    const contentElement = document.createElement('div');
    contentElement.classList.add('content');

    containerElement.innerHTML = content;

    const closeElement = document.createElement('a');
    closeElement.classList.add('close');
    closeElement.textContent = 'x';
    closeElement.href = '#';

    closeElement.addEventListener('click', e =>{
        e.preventDefault();
        body.removeChild(overlayElement);
    })
    overlayElement.addEventListener('click', (e) => {
        if (!e.target.classList.contains('content')) {
            closeElement.click();
        }
        // if (e.target === overlayElement) {
        //     closeElement.click();
        // }
    })

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    // body.appendChild(overlayElement);
    return overlayElement;
}