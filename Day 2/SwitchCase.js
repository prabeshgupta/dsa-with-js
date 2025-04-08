//Fall Through

let num = 6

switch (num) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("You found me")
        break

    default:
        console.log("You missed me")
}

//Condition in switch
switch (false) {
    case 12 < 5:
        console.log('No')
        break

    case 12 > 6:
        console.log('Yes me first')
        break

    case 3 > 1:
        console.log('Yes me second')
        break

    default:
        console.log("I don't know")
}