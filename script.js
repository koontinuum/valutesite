let $list = document.querySelector('.list')


let url = "https://www.cbr-xml-daily.ru/daily_json.js"

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        let valute = data.Valute
        Object.keys(valute).forEach(function (elem) {
            let item = valute[elem]
            $list.insertAdjacentHTML('beforeend', `
                <div class="valute">
                    <img crossorigin = 'anonymous' src="https://countryflagsapi.com/png/${item.NumCode}">
                    <p>${item.CharCode}</p>
                    <p>${item.Name}</p>
                    <p>${item.Value}</p>
                </div>
                <hr>
            `)
        })
    })

let $listBtn = document.querySelector('#listBtn')
let $calc = document.querySelector('#calc')
let $pageList = document.querySelector('.pageList')
let $pageCalc = document.querySelector('.pageCalc')

$listBtn.addEventListener('click', function () {
    $pageList.classList.remove('hide')
    $pageCalc.classList.add('hide')
})
$calc.addEventListener('click', function () {
    $pageList.classList.add('hide')
    $pageCalc.classList.remove('hide')
})

function insert(num) {
    document.form.textView.value =
        document.form.textView.value + num;
}

function clean() {
    document.form.textView.value = "";
}


function back() {
    var exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.lenght - 1);
}

function equal() {
    let exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}
window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setTimeout(function () {
        preloader.classList.add('preloader-hidden')
    }, 2000)
}