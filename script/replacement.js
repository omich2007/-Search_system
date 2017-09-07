var elem = document.querySelector('#replace');
elem.addEventListener('click', replacement);

function replacement() {
    var inp = document.querySelector('#replace')
    inp.innerHTML = '<input class="from-control" id="searchTerm">'
    var btnVsb = document.querySelector('#search');
    btnVsb.style.cssText = 'visibility: visible;'
    }
