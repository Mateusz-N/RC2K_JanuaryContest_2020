//https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
function hslToRgb(hueInDegrees, saturation, lightness){
    const chroma = (1-Math.abs(2*lightness-1)) * saturation
    const hue = hueInDegrees/60  //H'
    const x = chroma * (1 - Math.abs(hue % 2 - 1))
    const floorHue = Math.floor(hue)  //0 to 5 inclusive
    const rgbArray = getFloorHueToRGBArray(chroma, x)[floorHue]
    const m = lightness - chroma/2
    return rgbArray.map((value) => value + m)
}

function generateDistinctColors(numberOfColors){
    const arr = []
    const angle = 360/numberOfColors
    for(let i = 0; i < numberOfColors; i++){
        const color = hslToRgb(angle*i, 1, 0.5).map(value => value * 255)
        const hexColorArray = color.map(value => (~~value).toString(16).padStart(2,'0'))
        arr[i] = `#${hexColorArray.join('')}`
    }
    return arr
}

const getFloorHueToRGBArray = (c, x) => [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x]
]

function toOrdinalRank(rank) {
    rank++; // 0th => 1st, etc.
    let suffix = 'th';
    switch(rank) {
        case 1:
            suffix = 'st';
            break;
        case 2:
            suffix = 'nd';
            break;
        case 3:
            suffix = 'rd';
            break;
    }
    return rank+suffix;
}