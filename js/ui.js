class UI {
    showModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('appear');
    }

    closeModal() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('appear');
    }
}