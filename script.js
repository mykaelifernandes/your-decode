btnEncrypt.onclick=function(){
    msg_result.value = cript(msg_textarea.value)
}

btnDecrypt.onclick=function(){
    msg_textarea.value = decript(msg_result.value)
}

function cript(str){
    str = str
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat")
    return str
}

function decript(str){
    str = str
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u")
    return str
}

