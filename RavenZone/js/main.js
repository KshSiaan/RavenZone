if (document.getElementById('menu') == undefined) {

}else{
    let menu = document.getElementById('menu')
    menu.style.display = 'none'
    document.getElementById('menuIcon').addEventListener('click',
        function() {
            if (menu.style.display == 'none') {
                menu.style.display = 'flex' 
            } else {
                menu.style.display = 'none'
            }
        }
    );
}

function mousemove(event) {
    var cursor = document.getElementById('cursor');
    var cursorWidth = cursor.offsetWidth;
    var cursorHeight = cursor.offsetHeight;

    // Calculate the position to center the cursor
    var leftPosition = event.clientX - cursorWidth / 2;
    var topPosition = event.clientY - cursorHeight / 2;

    // Set the style
    cursor.style.left = leftPosition + 'px';
    cursor.style.top = topPosition + 'px';
}

window.addEventListener('mousemove', mousemove);
