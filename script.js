let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let date = new Date()
let dayOfTheWeek = daysOfTheWeek[date.getDay()]
let month = months[date.getMonth()]
let day = date.getDate()
let year = date.getFullYear()
let completeDate = dayOfTheWeek + ', ' + month + ' ' + day + ', ' + year


$(document).ready(function() {

    $('#currentDay').text(completeDate)
    let currentHour = date.getHours()

    let listOfInputs = []
    let listOfInputsStor = JSON.parse(localStorage.getItem("userInputs")) || []

    for (let i = 0; i < $('input').length; i++) {
        let saveIcon = $('button')
        saveIcon.addClass('fa fa-save')

        let elem = $('input')[i]
        $(elem).val(listOfInputsStor[i])
        listOfInputs.push($(elem).val())
        if (currentHour === Number($(elem).attr('time'))) {
            $(elem).addClass('bg-danger')
        } else if (currentHour > Number($(elem).attr('time'))) {
            $(elem).addClass('bg-light')
        } else if (currentHour < Number($(elem).attr('time'))) {
            $(elem).addClass('bg-success')
        }

    }



    $('button').click(function() {
        let buttonFor = $(this).data("targetinput")
        let position = $(buttonFor).attr('position')
        let inputVal = $(buttonFor).val()
        listOfInputs[position] = inputVal
        localStorage.setItem("userInputs", JSON.stringify(listOfInputs))
    })



})