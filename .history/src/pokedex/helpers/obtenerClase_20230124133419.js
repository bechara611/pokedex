

export const obtenerClase = (tipo) => {
    console.log('Holaaaa')
    switch (tipo) {
        case 'hp':
            
            return 'bg-danger'
    
        case 'attack':
            return 'bg-success'

        case 'defensa':
            return 'bg-info'
    }

}
