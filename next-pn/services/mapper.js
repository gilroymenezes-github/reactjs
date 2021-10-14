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
            return "FIxed Constructions"
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