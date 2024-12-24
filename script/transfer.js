const transactions = [
  {
    photo: 'https://randomuser.me/api/portraits/men/20.jpg',
    name: 'Ghaluh 1',
    number: '082116304337',
    status: 'success',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/25.jpg',
    name: 'Cameron Williamson',
    number: '(308) 555-0121',
    status: 'failed',
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/69.jpg',
    name: 'Cody Fisher',
    number: '(704) 555-0127',
    status: 'success',
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/79.jpg',
    name: 'Kristin Watson',
    number: '(603) 555-0123',
    status: 'failed',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/16.jpg',
    name: 'Floyd Miles',
    number: '(671) 555-0110',
    status: 'success',
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'Wade Warren',
    number: '(225) 555-0118',
    status: 'failed',
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/82.jpg',
    name: 'Savannah Nguyen',
    number: '(217) 555-0113',
    status: 'success',
  },
]

const transactionBody = document.getElementById('transactionBody')
const paginationControls = document.getElementById('paginationControls')
const itemsPerPage = 10
let currentPage = 1

function renderTransactions(data, page = 1) {
  transactionBody.innerHTML = ''
  const start = (page - 1) * itemsPerPage
  const end = start + itemsPerPage
  const paginatedData = data.slice(start, end)

  paginatedData.forEach((transaction, index) => {
    const row = `
                    <tr>
                        <td><img src="${transaction.photo}" alt="${transaction.name}"></td>
                        <td>${transaction.name}</td>
                        <td>${transaction.number}</td>
                        <td><span class="delete-btn" onclick="deleteTransaction(${index})"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9135 17.8812L17.6419 20.8769C18.2463 21.2598 18.9967 20.6903 18.8173 19.9848L17.4512 14.6108C17.4127 14.4611 17.4173 14.3036 17.4643 14.1564C17.5114 14.0092 17.5991 13.8783 17.7172 13.7787L21.9573 10.2496C22.5144 9.78589 22.2269 8.86127 21.5111 8.81482L15.9738 8.45545C15.8247 8.44479 15.6816 8.39199 15.5613 8.30318C15.441 8.21437 15.3484 8.09322 15.2943 7.95383L13.2292 2.75323C13.173 2.60528 13.0732 2.47791 12.943 2.38803C12.8127 2.29814 12.6582 2.25001 12.5 2.25001C12.3418 2.25001 12.1873 2.29814 12.057 2.38803C11.9268 2.47791 11.827 2.60528 11.7708 2.75323L9.70568 7.95383C9.65157 8.09322 9.55897 8.21437 9.43868 8.30318C9.31838 8.39199 9.17533 8.44479 9.02618 8.45545L3.48894 8.81482C2.77315 8.86127 2.4856 9.78589 3.04272 10.2496L7.28278 13.7787C7.40095 13.8783 7.4886 14.0092 7.53566 14.1564C7.58272 14.3036 7.58727 14.4611 7.5488 14.6108L6.28188 19.5945C6.06667 20.4412 6.96715 21.1246 7.69243 20.6651L12.0865 17.8812C12.21 17.8025 12.3535 17.7607 12.5 17.7607C12.6465 17.7607 12.79 17.8025 12.9135 17.8812V17.8812Z" stroke="#4F5665" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></td>
                    </tr>
                `
    transactionBody.innerHTML += row
  })

  renderPagination(data.length)
}

function renderPagination(totalItems) {
  paginationControls.innerHTML = ''
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.className = i === currentPage ? 'active' : ''
    button.onclick = () => {
      currentPage = i
      renderTransactions(transactions, currentPage)
    }
    paginationControls.appendChild(button)
  }
}

function deleteTransaction(index) {
  if (confirm('Are you sure you want to delete this transaction?')) {
    transactions.splice(index, 1) // Remove 1 item at index
    renderTransactions(transactions, currentPage)
  }
}

function searchTransaction() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase()
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchValue) ||
      transaction.number.includes(searchValue)
  )
  currentPage = 1 // Reset to page 1
  renderTransactions(filteredTransactions, currentPage)
}

renderTransactions(transactions, currentPage)

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

document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step-wrapper')
  const stepContents = document.querySelectorAll('.content-conainer')
  const prevButtons = document.querySelectorAll('.prev-btn')
  const submitButton = document.querySelector(`button[data-next="3"]`)

  const modal = document.getElementById('confirmationModal')
  const confirmModal = document.getElementById('confirmModal')

  const tableRows = document.querySelectorAll('table tr')

  tableRows.forEach((row) => {
    row.addEventListener('click', (e) => {
      const currentStep = document
        .querySelector('.step-wrapper.active')
        .getAttribute('data-step')
      const nextStep = parseInt(currentStep) + 1
      updateStep(nextStep)
    })
  })

  function updateStep(step) {
    steps.forEach((el) => el.classList.remove('active'))
    stepContents.forEach((el) => el.classList.remove('active'))

    document
      .querySelector(`.step-wrapper[data-step="${step}"]`)
      .classList.add('active')
    document
      .querySelector(`.content-conainer[data-step="${step}"]`)
      .classList.add('active')
  }

  prevButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const prevStep = button.getAttribute('data-prev')
      updateStep(prevStep)
    })
  })

  // Show modal on submit button click
  submitButton.addEventListener('click', () => {
    // const recipient = document.querySelector('.info span').textContent
    // const amount = document.querySelector('#amount').value
    // const notes = document.querySelector('#notes').value
    // recipientElement.textContent = recipient
    // amountElement.textContent = amount ? `$${amount}` : 'Not specified'
    // notesElement.textContent = notes || 'No notes'

    modal.style.display = 'flex'
  })

  console.log(confirmModal)

  confirmModal.addEventListener('click', () => {
    modal.style.display = 'none'
    updateStep(3) // Move to step 3
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const pinInputs = document.querySelectorAll('.pin-inputs input')
  const pinForm = document.getElementById('pinForm')

  pinInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value
      if (value.length === 1 && index < pinInputs.length - 1) {
        pinInputs[index + 1].focus()
      }
    })

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && index > 0 && !e.target.value) {
        pinInputs[index - 1].focus()
      }
    })
  })

  pinForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const pin = Array.from(pinInputs)
      .map((input) => input.value)
      .join('')

    if (pin.length < 6) {
      alert('Please enter a complete 6-digit PIN.')
      return
    }
  })
})
