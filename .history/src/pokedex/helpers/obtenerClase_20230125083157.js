

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
                return 'red'



            default:
                return 'bg-dark'

        
    }

}
