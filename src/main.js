
const collections = []

for (let n = 0;; n++)
{
    let getOut = false
    await import(`./collections/${n}.js`)
        .then(piece => collections.push(piece))
        .catch(_ => {
            console.log('e =', _)
            getOut = true
        })
    if (getOut) break
}

let currentCollection = 0

showPieceNumberText()

prev.onclick = () => {
    currentCollection
        = (currentCollection + collections.length - 1)
        % collections.length
    showPieceNumberText()
}

next.onclick = () => {
    currentCollection
        = (currentCollection + 1)
        % collections.length
    showPieceNumberText()
}

function showPieceNumberText() {
    document.getElementById('current-piece')
        .innerText = `${currentCollection + 1} / ${collections.length}`
}

void function render() {
    collections[currentCollection].run()
    requestAnimationFrame(render)
}()

export {}