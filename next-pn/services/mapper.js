export const ArrayMapper = (labels, mappedLabels) => {
    labels.every(l => {
        mappedLabels.push(ItemMapper(l))
        return true
    })
}

export const ItemMapper = (label) => {
    switch(label) {
        case "A": 
            return "Human Necessities"
        case "B":
            return "Performing Operations & Transporting"
        case "C":
            return "Chemistry & Metallurgy"
        case "D":
            return "Textiles & Paper"
        case "E":
            return "Fixed Constructions"
        case "F":
            return "Mechanical Engineering, Lighting, Heating & Weapons"
        case "G": 
            return "Physics"
        case "H":
            return "Electricity"
        default:
            break
    }
}

export const ArrayColor = (ld) => {
    switch(ld) {
        case "light": 
            return ["#ce7178", "#1a8d8d", "#d88d93", "#66b3b3", "#e2aaae", "#99cccc", "#ebc6c9", "#cce6e6"]
        case "dark":
            return ["#7c4448", "#004040", "#a55a60", "#005a5a","#ce7178", "#1a8d8d", "#d88d93", "#66b3b3"]
        default: 
            return []
            break
    }
}




