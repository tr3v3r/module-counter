export function createElement(nodeName, { className, onClick }, children) {
    const node = document.createElement(nodeName)

    node.setAttribute('class', className)
    if(onClick) {
        node.addEventListener('click', onClick)
    }

    children.forEach(child => {
        node.append(child)
    })

    return node
}