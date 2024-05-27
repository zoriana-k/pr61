document.addEventListener('DOMContentLoaded', (event) => {
    const colorSelector = document.getElementById('colorSelector');

    colorSelector.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
});
