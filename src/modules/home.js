function loadHome (){
    const mainWrapper = document.createElement('div')
    mainWrapper.id = 'main-wrapper'
    mainWrapper.textContent = "Hello there"

    return mainWrapper
}

export  {loadHome}