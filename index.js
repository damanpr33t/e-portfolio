// template_9jek4bq
// service_7mb2z6a
// user_VqSnwwutoSTNCLs6RtQpW

const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

let contrastToggle = false; 
function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_gd0vyta',
            'template_9jek4bq',
            event.target,
            'user_VqSnwwutoSTNCLs6RtQpW'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at daman0797@gmail.com"
        )
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

// const toggleSidebar = document.querySelector('.toggleSidebar');
// const sidebar = document.querySelector('.sidebar');

let isSidebarOpen = false;
function toggleSidebar() {
    if (isSidebarOpen) {
        isSidebarOpen = false;
        return document.body.classList.remove("show--sidebar")
    }
    isSidebarOpen = true;
    document.body.classList += " show--sidebar";
}
