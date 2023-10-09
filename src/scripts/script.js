let baseCarroseu = 0
function setCarrosel(base){
    baseCarroseu = base
    document.querySelector("#containerCarroseu").style.marginLeft = `-${base}00%`
    setCharactersBtn(base)
}
function nextCharacters(){
    if(baseCarroseu==4){
        baseCarroseu = 0
        document.querySelector("#containerCarroseu").style.marginLeft = `-${baseCarroseu}00%`
        setCharactersBtn(baseCarroseu)
        return
    }
    baseCarroseu++
    document.querySelector("#containerCarroseu").style.marginLeft = `-${baseCarroseu}00%`
    setCharactersBtn(baseCarroseu)
}
function prevCharacters(){
    if(baseCarroseu==0){
        baseCarroseu = 4
        document.querySelector("#containerCarroseu").style.marginLeft = `-${baseCarroseu}00%`
        setCharactersBtn(baseCarroseu)
        return
    }
    baseCarroseu--
    document.querySelector("#containerCarroseu").style.marginLeft = `-${baseCarroseu}00%`
    setCharactersBtn(baseCarroseu)
}
function setCharactersBtn(number){
    document.querySelectorAll(".charactersBtn").forEach(element=>{
        element.checked = false
    })
    document.querySelector(`#charactersBtn${number}`).checked = true
}