export function getLastNum(url){
    let end = url.lastIndexOf('/')
    let start = end - 2
    console.log(start, end)
    if (url.charAt(start) === '/'){
        start++
    }

    return url.slice(start, end)
}


export function removeChildren(container){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}