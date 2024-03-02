function convertMarkToGrade() {
    // Get the input value
    var markInput = document.getElementById("mark-input-box").value;
 
    // Convert input to a number using parseInt
    var mark = parseInt(markInput);
 
    // Check if mark is a valid number
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        // Convert mark to grade
        var grade = "";
        if (mark > 90) {
            grade = "A";
        } else if (mark > 80) {
            grade = "B";
        } else if (mark > 70) {
            grade = "C";
        } else if (mark > 65) {
            grade = "D";
        } else {
            grade = "F";
        }
 
        // Display result message
        var resultMessage = document.getElementById("result-message");
        resultMessage.textContent = "Result: Grade " + grade;
 
        // Apply green text color for grades more or equal to 65
        resultMessage.style.color = (mark >= 65) ? "green" : "";
 
        // Clear validation message
        document.getElementById("validation-message").textContent = "";
    } else {
        // Display validation message for invalid input
        document.getElementById("validation-message").textContent = "Invalid mark. Please enter a number between 0 and 100.";
 
        // Clear result message
        document.getElementById("result-message").textContent = "";
    }
}