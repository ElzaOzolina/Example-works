function validateForm() {
  // Reset error messages
  document.getElementById('fnameError').innerHTML = '';
  document.getElementById('lnameError').innerHTML = '';
  document.getElementById('phoneError').innerHTML = '';
  document.getElementById('colorError').innerHTML = '';
  document.getElementById('warningMessage').innerHTML = '';

  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var phoneNumber = document.getElementById('phone').value;
  var favoriteColors = document.querySelectorAll('input[name="color"]:checked');

  // Validate first name
  if (!/^[A-Za-z]+$/.test(firstName)) {
    document.getElementById('fnameError').innerHTML = 'Please enter a valid first name containing only Latin characters, for example, John.';
  }

  // Validate last name
  if (!/^[A-Za-z]+$/.test(lastName)) {
    document.getElementById('lnameError').innerHTML = 'Please enter a valid last name containing only Latin characters, for example, Doe.';
  }

  // Validate phone number
  if (!/^\d{8}$/.test(phoneNumber)) {
    document.getElementById('phoneError').innerHTML = 'Please enter a valid 8-digit phone number, for example, 21212121.';
  }

  // Validate at least one color is selected
  if (favoriteColors.length === 0) {
    document.getElementById('colorError').innerHTML = 'Please select at least one color.';
  }

  // Check if any errors occurred
  if (
    document.getElementById('fnameError').innerHTML ||
    document.getElementById('lnameError').innerHTML ||
    document.getElementById('phoneError').innerHTML ||
    document.getElementById('colorError').innerHTML
  ) {
    // Display a general warning message
    document.getElementById('warningMessage').innerHTML = 'Please fix the errors before submitting the form.';
    return false;
  }

  return true;
}  