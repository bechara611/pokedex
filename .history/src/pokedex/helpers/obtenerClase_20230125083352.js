

export const obtenerClase = (tipo) => {
  
    switch (tipo) {
        case 'hp':

            return 'bg-danger'

        case 'attack':
            return 'bg-success'

        case 'defense':
            return 'bg-info'

        case 'special-attack':
            return 'bg-warning'

        case 'special-defense':
            return 'bg-dark'

        case 'speed':
            return 'bg-primary'

        case 'fire':
            return 'red'

        case 'ice':
        return '#7ecdf1'

        case 'grass':
            return '#2b860f'

            case 'water':
                return '#5b97eb'



            default:
                return 'bg-dark'

        
    }

}
