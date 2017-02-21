document.images[0].addEventListener('click', function(eve) {
    if (document.URL.indexOf(':orig') > 0) {
        url = document.URL.split(':orig')[0];
    } else {
        url = document.URL + ':orig';
    }

    if(eve.shiftKey) {
        location.href = url;
    }
});
