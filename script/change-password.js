const form = document.getElementById('change-password-form')
const oldPasswordInput = document.getElementById('existing-password')
const newPasswordInput = document.getElementById('new-password')
const confirmPasswordInput = document.getElementById('confirm-new-password')
const oldPasswordError = document.getElementById('old-password-error')
const newPasswordError = document.getElementById('new-password-error')
const confirmPasswordError = document.getElementById('confirm-password-error')
const errorMessage = document.getElementById('error-message')
const successMessage = document.getElementById('success-message')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const oldPassword = oldPasswordInput.value
  const newPassword = newPasswordInput.value
  const confirmPassword = confirmPasswordInput.value

  // Validasi
  if (oldPassword === '') {
    oldPasswordError.textContent = 'Old password is required'
    oldPasswordInput.classList.add('error')
    oldPasswordInput.classList.remove('success')
  } else {
    oldPasswordError.textContent = ''
    oldPasswordInput.classList.remove('error')
    oldPasswordInput.classList.add('success')
  }

  if (newPassword === '') {
    newPasswordError.textContent = 'New password is required'
    newPasswordInput.classList.add('error')
    newPasswordInput.classList.remove('success')
  } else if (newPassword.length < 8) {
    newPasswordError.textContent =
      'New password must be at least 8 characters long'
    newPasswordInput.classList.add('error')
    newPasswordInput.classList.remove('success')
  } else {
    newPasswordError.textContent = ''
    newPasswordInput.classList.remove('error')
    newPasswordInput.classList.add('success')
  }

  if (confirmPassword === '') {
    confirmPasswordError.textContent = 'Confirm password is required'
    confirmPasswordInput.classList.add('error')
    confirmPasswordInput.classList.remove('success')
  } else if (confirmPassword !== newPassword) {
    confirmPasswordError.textContent =
      'Confirm password does not match new password'
    confirmPasswordInput.classList.add('error')
    confirmPasswordInput.classList.remove('success')
  } else {
    confirmPasswordError.textContent = ''
    confirmPasswordInput.classList.remove('error')
    confirmPasswordInput.classList.add('success')
  }
  if (oldPassword !== '' && newPassword !== '' && confirmPassword !== '')
    location.href = 'profile.html'
  // Kirim data ke server
  // if (oldPassword !== '' && newPassword !== '' && confirmPassword !== '') {
  //   fetch('/change-password', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       oldPassword,
  //       newPassword,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         successMessage.textContent = 'Password changed successfully'
  //         form.reset()
  //       } else {
  //         if (data.error === 'old_password_incorrect') {
  //           errorMessage.textContent = 'Old password is incorrect'
  //         } else if (data.error === 'new_password_too_short') {
  //           errorMessage.textContent =
  //             'New password must be at least 8 characters long'
  //         } else if (data.error === 'new_password_same_as_old') {
  //           errorMessage.textContent =
  //             'New password cannot be the same as old password'
  //         } else {
  //           errorMessage.textContent = 'Error changing password'
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       errorMessage.textContent = 'Error changing password'
  //       location.href = 'profile.html'
  //     })
  // }
})
