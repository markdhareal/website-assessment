document.getElementById('contactButton').onclick = function() {
    document.getElementById('contactModal').style.display = 'flex';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('contactModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('contactModal')) {
        document.getElementById('contactModal').style.display = 'none';
    }
}

function toggleNav() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
}
