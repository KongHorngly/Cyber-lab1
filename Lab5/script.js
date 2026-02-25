
fetch('https://cambo-gazetteer.manethpak.dev/api/v1/provinces')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
