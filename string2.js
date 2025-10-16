<script>
  function showSecretMessage() {
    // For this example, we're not actually storing or processing data.
    // In a real application, you would handle the form data here.

    // Get the form and the secret message div
    const userForm = document.getElementById("user-form");
    const secretMessage = document.getElementById("secret-message");

    // Hide the form and show the secret message
    userForm.style.display = "none";
    secretMessage.style.display = "block";
  }
</script>
