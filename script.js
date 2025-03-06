document.getElementById('contact-form').addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert('Merci pour votre message! Je vous répondrai dès que possible.');
        e.target.reset(); // Réinitialiser le formulaire
    } else {
        alert('Une erreur s\'est produite. Veuillez réessayer.');
    }
});