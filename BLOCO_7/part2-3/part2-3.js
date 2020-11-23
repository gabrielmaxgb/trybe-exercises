const addCont = () => {

    const field = document.getElementById('show-cont');
    const button = document.getElementById('cont');
    let clickCount = 0;

    button.addEventListener('click', () => {

        field.innerHTML = clickCount += 1;

    });
}
addCont();