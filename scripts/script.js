// On ready function used to allow the html page to fully load before intiating updates to the DOM
$(document).ready(function() {
    // Create an array with the days of the week
    let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    // Create an array with the months of the year
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    // Create a variable to define a new date
    let date = new Date()

    // Retrieve the day of the week from the array using the get day function for the index
    let dayOfTheWeek = daysOfTheWeek[date.getDay()]

    // Retrieve the month of the year from the array using the get month function for the index
    let month = months[date.getMonth()]

    // Retrieve the date using the get date function
    let day = date.getDate()

    // Retrieve the year using the get year function
    let year = date.getFullYear()

    // Concatonate the full date into a variable
    let completeDate = dayOfTheWeek + ', ' + month + ' ' + day + ', ' + year

    // Select the paragraph with the CurrentDay id to insert the full date
    $('#currentDay').text(completeDate)

    // Set a variable equal to the current hour
    let currentHour = date.getHours()

    // Create an empty array to store inputs
    let listOfInputs = []

    // Retrieve the userInputs key or else create an empty array
    // The local storage is parsed into an object
    let listOfInputsStored = JSON.parse(localStorage.getItem("userInputs")) || []

    // Create a for loop to iterate through the input tags
    for (let i = 0; i < $('input').length; i++) {

        // Define a saveIcon variable equal to selecting all the button elements in the HTML
        let saveIcon = $('button')

        // Add the icon to each button
        saveIcon.addClass('fa fa-save')

        // Select each input element
        let elem = $('input')[i]

        // Store the value of each element into local storage
        $(elem).val(listOfInputsStored[i])

        // Push the value into the empty array
        listOfInputs.push($(elem).val())

        // Compare the current hour to to the timeslot
        // If it's the same, make the input box red
        if (currentHour === Number($(elem).attr('time'))) {
            $(elem).addClass('bg-danger')
        }
        // If the current hour is past the timeslot, make the input box light grey
        else if (currentHour > Number($(elem).attr('time'))) {
            $(elem).addClass('bg-light')
        }
        // If it's before the timeslot make the input box green
        else if (currentHour < Number($(elem).attr('time'))) {
            $(elem).addClass('bg-success')
        }

    }


    // Select all buttons for an on click event
    $('button').click(function() {
        // Retieve the datatarget input property and set it to buttonFor
        // Each button corresponds to a specfici input value to save
        let buttonFor = $(this).data("targetinput")

        // Find the position attribute of the specific button 
        let position = $(buttonFor).attr('position')

        // Using the button clicked on get the the associated input
        let inputVal = $(buttonFor).val()

        // Set the value of the input to the specified positon in the listOfInputs array
        listOfInputs[position] = inputVal

        // Set the updated array into local storage
        localStorage.setItem("userInputs", JSON.stringify(listOfInputs))
    })



})