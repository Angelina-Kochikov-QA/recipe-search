const searchInput = document.querySelector('#searchRecipe');
const divs = document.querySelectorAll('.recipe');

searchInput.addEventListener('keyup', function(event) {
    const usersWords = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(usersWords) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})

