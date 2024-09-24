document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertButton');
    const modal = document.getElementById('customModal');
    const ProButton = document.getElementById('ProButton');
    const cancelButton = document.getElementById('cancelButton');

    alertButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'flex'; // Mostrar o modal
    });

    ProButton.addEventListener('click', function() {
        window.location.href = "https://chatgpt.com/";
    });

    cancelButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Fechar o modal
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
