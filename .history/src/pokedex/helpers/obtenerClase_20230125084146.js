

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

        case 'normal':
            return '#f4c481'

        case 'electric':
            return '#ebe46d'

        case 'fighting':
            return '#ed9332'

        case 'poison':
            return '#a0339a'

        case 'ground':
            return '#a09733'

        case 'flying':
            return '#2cc4f7'

        case 'psychic':
            return '#c929b6'

            case 'bug':
                return '#8ec929'

                case 'rock':
                    return '#875714'

        






        default:
            return 'bg-dark'


    }

}
