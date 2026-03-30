const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const handleFormValidation = (formId) => {
    const form = document.getElementById(formId);
    const modal = document.getElementById('modalSuccess');
    const closeBtn = document.querySelector('.modal__close');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const name = form.querySelector('input[type="text"]').value;

        if (!name || name.length < 2) return;
        if (!validateEmail(email)) return;

        modal.classList.add('modal--active');
        form.reset();
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal--active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('modal--active');
    });
};