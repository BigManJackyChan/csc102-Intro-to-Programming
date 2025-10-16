// Function to clean the input string for the palindrome check
// It removes non-alphanumeric characters and converts to lowercase
function cleanString(str) {
    // String Manipulation: Convert to lowercase
    let lowerStr = str.toLowerCase();
    // String Manipulation: Remove all non-alphanumeric characters (except spaces for now)
    // The regular expression /[A-Za-z0-9]/g matches letters and numbers globally
    let clean = lowerStr.match(/[A-Za-z0-9]/g);
    
    // Check if the resulting array is null (e.g., if input was only symbols)
    if (clean === null) {
        // Return an empty string if no valid characters were found
        return "";
    }
    
    // String Manipulation: Join the array back into a single string
    return clean.join('');
}


// Function to validate the input and check if it is a palindrome
// It takes the event object as an argument, though only the return is used to prevent form submission
function checkPalindrome(event) {
    // Prevent the default form submission (which causes a page reload)
    event.preventDefault(); 
    
    // Get the input element from the HTML document
    const inputElement = document.getElementById('textInput');
    // Get the raw value entered by the user
    const rawInput = inputElement.value;
    // Get the message area element where results will be displayed
    const messageArea = document.getElementById('messageArea');

    
    // String Validation: Check if the input is empty or only whitespace
    // Decision Logic: if/else for initial validation
    if (rawInput.trim() === "") {
        // Use innerHTML to display the validation message (requirement)
        messageArea.innerHTML = "<p class='error'>❌ Please enter a word or phrase to check.</p>";
        // End function execution
        return false;
    }

    // Call the helper function to clean the input
    const processedString = cleanString(rawInput);
    
    // String Validation: Check if the cleaned string is empty (e.g., if input was just ".,!")
    // Decision Logic: if/else for secondary validation
    if (processedString === "") {
        // Use innerHTML to display a different validation message
        messageArea.innerHTML = "<p class='error'>❌ The input must contain at least one letter or number.</p>";
        // End function execution
        return false;
    }

    
    // Initialize an empty string to hold the reversed string
    let reversedString = "";

    // Loop: Iterate through the processed string backward
    // Start at the last index and go down to 0
    for (let i = processedString.length - 1; i >= 0; i--) {
        // Concatenate the current character to the reversed string
        reversedString += processedString[i];
    }
    
    
    // Decision Logic: Check if the original processed string equals the reversed string
    if (processedString === reversedString) {
        // Palindrome: Build the success message with innerHTML (requirement)
        let successMessage = `
            <p class="success">🎉 **Yes!** "${rawInput}" **is a palindrome!**</p>
            <p class="details">Cleaned: *${processedString}* | Reversed: *${reversedString}*</p>
        `;
        // Update the message area
        messageArea.innerHTML = successMessage;
    } else {
        // Not Palindrome: Build the failure message with innerHTML (requirement)
        let failureMessage = `
            <p class="failure">😔 **No.** "${rawInput}" **is NOT a palindrome.**</p>
            <p class="details">Cleaned: *${processedString}* | Reversed: *${reversedString}*</p>
        `;
        // Update the message area
        messageArea.innerHTML = failureMessage;
    }

    // Return false to ensure the form does not submit (though preventDefault handled it)
    return false;
}