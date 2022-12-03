const loadPhones = async (searchPhones) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhones}`
    const res = await fetch(url)
    const data = await res.json()
    displayMyPhones(data.data)

}

const displayMyPhones = phones => {
    const displayPhones = document.getElementById('loadPhones')
    // refresh  loading page 
    displayPhones.innerHTML = ''
    // display only 20 result
    phones = phones.slice(0, 20)
    // showing no phone found alart
    const NoPhoneMessage = document.getElementById('NoPhoneAlart')
    if (phones.length === 0) {
        NoPhoneMessage.classList.remove('d-none')
    }
    else {
        NoPhoneMessage.classList.add('d-none')
    }
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
            <div class="card h-100 p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        
                            <h5 class="card-title">${phone.phone_name} </h5>
                            <p class="card-text"> ${phone.slug}</p>
                        </div>
                    </div>
                    `
        displayPhones.appendChild(phoneDiv)
    })

}

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('seach-field')
    const searchPhones = searchField.value
    loadPhones(searchPhones)
})

// loadPhones()