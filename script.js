function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
} 

document.getElementById('logout-btn').addEventListener('click', () => {
    window.close();
})