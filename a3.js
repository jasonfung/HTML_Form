function validate(frm1) {
	/* Validate the Student ID (Must be a 9 digits number)*/
    if (frm1.StudentID.value.length != 9) {
        alert("Please enter a 9 digits student ID.");
        frm1.StudentID.focus();
        frm1.StudentID.select();
        return false;
    }
    else  if (parseInt(frm1.StudentID.value) != frm1.StudentID.value) {
        alert("Please enter a 9 digits student ID, numbers only.");
        frm1.StudentID.focus();
        frm1.StudentID.select();
        return false;
    }
	
	/* Concatenate the Learn Id with "myseneca.ca" to get the Seneca e-mail */
    frm1.senecaemail.value = frm1.LearnID.value + "@myseneca.ca";

	/* Validate the Phone Number (Must be a 10 digits number) */
	if (frm1.phonenumber.value.length != 10) {
		alert("Please enter 10 digits phone number,");
		frm1.phonenumber.focus();
        frm1.phonenumber.select();
        return false;
    }
	else  if (parseInt(frm1.phonenumber.value) != frm1.phonenumber.value) {
        alert('Please enter a phone number, numbers only');
        frm1.phonenumber.focus();
        frm1.phonenumber.select();
        return false;
    }		
    return true;
}
