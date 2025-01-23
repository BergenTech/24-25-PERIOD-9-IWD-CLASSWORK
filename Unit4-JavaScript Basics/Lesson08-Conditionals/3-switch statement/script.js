let day = "Thursday";
// day = "Saturday"
// day = "Sunday"
// switch example
switch(day) {
    case 'Monday':
        console.log("Start of the work week!")
        break
    case 'Friday':
        console.log("Almost weekend!")
        break
    case 'Saturday':
    case 'Sunday':
        console.log("Weekend!")
        break
    default:
        console.log("Midweek hustle!")
}