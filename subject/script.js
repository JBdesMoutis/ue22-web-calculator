// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1


/*Jean-Baptiste des Moutis
GitHib: JBdesMoutis*/ 
// # START EDITING YOUR JAVASCRIPT HERE
// ===============

let bouton = document.getElementsByClassName("calculator__keys")[0]
let affichage = document.getElementsByClassName("calculator__display")[0]

for (let keys of bouton.children) {
    keys.addEventListener("click", 
    () => {
        console.log(keys.textContent)
        //affichage.textContent += keys.textContent
        if (keys.textContent == '0') {
            if (affichage.textContent == 0) {

            }
            else {affichage.textContent += '0'}
        }

        else if (keys.textContent == 'AC') {
            affichage.textContent = 0
        }
        else {affichage.textContent -= 0
            affichage.textContent += keys.textContent}
        
    })
}
