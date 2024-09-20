document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Bem Vindo(a) ao Site Oriental Geek!");
        if (confirm("Deseja algo Mais? Clique em Ok")) {
            window.location.href = "https://chatgpt.com/"; 
        }
    });
});