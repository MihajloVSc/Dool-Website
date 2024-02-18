console.warn("If you see this message it's nothing im just testing")
console.log("If you see this message it's nothing im just testing")

const $btn = document.getElementById('btn')
const $dialog = document.getElementById('dialog')

$btn.addEventListener('click', function(){
     $dialog.setAttribute('open', '');
     $dialog.classList.add('dialog');
     document.getElementById('overlay').style.display = 'block';
});

function closeOk(){
     $dialog.removeAttribute('open')
     $dialog.classList.remove('dialog')
     document.getElementById('overlay').style.display = "none"
}
