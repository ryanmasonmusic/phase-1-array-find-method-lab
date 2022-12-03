function superbowlWin(record){
const result = record.find(element => element.result === "W")

if (result) {
    return result.year;
}
else {
    return undefined
}
}