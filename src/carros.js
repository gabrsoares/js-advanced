let carros = [
    {
        id: 1,
        marca: 'fiat',
        modelo: 'uno',
        ano: 2010,
        combustivel: 'gasolina',
        portas: 4,
        km: 50000
    },

    {
        id: 2,
        marca: 'chevrolet',
        modelo: 'onix',
        ano: 2015,
        combustivel: 'etanol',
        portas: 4,
        km: 20000
    },

    {
        id: 3,
        marca: 'tesla',
        modelo: 'model s',
        ano: 2012,
        combustivel: 'eletrico',
        portas: 4,
        km: 25000
    },

    {
        id: 4,
        marca: 'volkswagen',
        modelo: 'gol',
        ano: 2011,
        combustivel: 'gasolina',
        portas: 4,
        km: 40000
    },

    {
        id: 5,
        marca: 'tesla',
        modelo: 'model x',
        ano: 2018,
        combustivel: 'eletrico',
        portas: 4,
        km: 12000
    },

    {
        id: 6,
        marca: 'fiat',
        modelo: 'argo',
        ano: 2020,
        combustivel: 'etanol',
        portas: 4,
        km: 8000
    }
]

function getCars(){
    return carros
}

export default getCars()