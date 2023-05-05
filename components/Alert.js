const Alert = (icon, title, text, footer) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    footer: footer
  })
}

const AlertInfo = (title, icon, html) => {
  Swal.fire({
    title: title,
    icon: icon,
    html: html,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Genial!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}

export { Alert, AlertInfo }