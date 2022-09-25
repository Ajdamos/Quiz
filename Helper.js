export function Percent (stage, length) {
    console.log(stage, length)
    return Math.floor((stage / length)*100) + " %"
}