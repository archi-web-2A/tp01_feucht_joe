function validateForm() {
    return (
        validatePassword() &&
        validateName() &&
        validatePhoneNumber() &&
        validatePostalCode() &&
        validateCity()
    );
}

function validatePassword() {
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return false;
    }

    return true;
}

function validateName() {
    var nameRegex = /^[a-zA-Z]+$/;
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();

    if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
        alert("Le nom et le prénom ne doivent pas contenir de chiffres.");
        return false;
    }

    return true;
}

function validatePhoneNumber() {
    var phoneNumber = $("#tel").val();

    phoneNumber = phoneNumber.replace(/\s+/g, "").replace(/-/g, "");

    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("Le numéro de téléphone doit contenir 10 chiffres.");
        return false;
    }

    return true;
}

function validatePostalCode() {
    var postalCode = $("#cp").val();

    if (!/^\d{5}$/.test(postalCode)) {
        alert("Le code postal doit contenir 5 chiffres.");
        return false;
    }

    return true;
}

function validateCity() {
    var city = $("#ville").val();

    if (/\d/.test(city)) {
        alert("Nom de ville incorrect");
        return false;
    }

    return true;
}
