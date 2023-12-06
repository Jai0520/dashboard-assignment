function toggleSidebar() {
    var collapsibleButton = document.querySelector('.collapsible');
    var aside = document.querySelector('aside');

    collapsibleButton.classList.toggle('active');
    aside.classList.toggle('active');
}