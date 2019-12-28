let userEmail = prompt('Write your Email', '');

if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {

  let pass = prompt('Password?', '');

  if (userEmail === 'user@gmail.com' && pass === 'UserPass' ||
    userEmail === 'admin@gmail.com' && pass === 'AdminPass') {

    if (confirm('Do you want to change your password?') === true) {

      let oldPass = prompt('Write the old password', '');

      if (oldPass === pass) {

        pass = prompt('Write new password', '');

        if (pass.length > 6) {

          let passConfirm = prompt('Confirm password');

          if (passConfirm === pass) {
            alert('You have successfully changed your password.');

          } else if (pass === '' || pass === null) {
            alert('Canceled');
          } else if (pass.length < 6) {
            alert('It’s too short password. Sorry.');
          } else {
            alert('Canceled');
          }
        } else if (pass === '' || pass === null) {
          alert('Canceled');
        } else if (pass.length < 6) {
          alert('It’s too short password. Sorry.');
        }
      } else {
        alert('You wrote the wrong password.');
      }

    } else {
      alert('You have failed the change.');
    }

  } else if (pass === '' || pass === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  }

} else if (userEmail === '' || userEmail === null) {
  alert('Canceled');
} else if (userEmail.length < 5) {
  alert('I don`t know any emails having name length less than 5 symbols');
} else {
  alert('I don`t know you');
}