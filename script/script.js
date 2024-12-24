function aktifkanAsidebar() {
  const sidebar = document.querySelector('.sidebar ul')
  const links = sidebar.querySelectorAll('li')
  links.forEach((link) => {
    const href = link.querySelector('a').getAttribute('href')
    if (window.location.pathname === href) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

aktifkanAsidebar()
