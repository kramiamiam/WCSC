

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêcher la soumission par défaut

            // Récupérer les valeurs des champs
            const nom = document.getElementById('nom').value.trim();
            const prenom = document.getElementById('Prenom').value.trim();
            const datenaissance = document.getElementById('datenaissance').value.trim();
            const sexe = document.querySelector('input[name="sexe"]:checked');
            const email = document.getElementById('email').value.trim();
            const motdepasse = document.getElementById('motdepasse').value.trim();
            const confirmation = document.getElementById('confirmation').value.trim();

            // Supprimer les messages précédents
            const previousMessages = document.querySelectorAll('.message');
            previousMessages.forEach(msg => msg.remove());

            // Valider les champs
            if (nom === "" || prenom === ""  || datenaissance === "" || !sexe || email === "" || motdepasse === "" || confirmation === "") {
                afficherMessage(signupForm, "Tous les champs doivent être remplis.", false);
            } else if (motdepasse !== confirmation) {
                afficherMessage(signupForm, "Les mots de passe ne correspondent pas.", false);
            } else {
                // Si tout est valide, afficher un message de succès
                afficherMessage(signupForm, "Inscription réussie ! Redirection en cours...", true);
                setTimeout(() => {
                    window.location.href = 'inscrit.html';
                }, 2000); // Redirige après 2 secondes
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêcher la soumission par défaut

            // Récupérer les valeurs des champs
            const email = document.getElementById('email').value.trim();
            const motdepasse = document.getElementById('motdepasse').value.trim();

            // Supprimer les messages précédents
            const previousMessages = document.querySelectorAll('.message');
            previousMessages.forEach(msg => msg.remove());

            // Valider les champs
            if (email === "" || motdepasse === "") {
                afficherMessage(loginForm, "Tous les champs doivent être remplis.", false);
            } else {
                // Afficher un message de succès sans redirection
                afficherMessage(loginForm, "Connexion réussie !", true);
            }
        });
    }

    function afficherMessage(form, message, success) {
        // Créez un élément de message
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = success ? 'message success' : 'message error';
        
        // Ajoutez le message à la fin du formulaire
        form.appendChild(messageElement);

        // Supprimez le message après quelques secondes
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
});
