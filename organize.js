let arrayObj = [
    {itsMe: false, admin: false, nome:'Luan'},
    {itsMe: false, admin: true, nome:'Arthur'},
    {itsMe: true, admin: false, nome:'Gustavo'},
    {itsMe: false, admin: true, nome:'Pedro'}
]

function organize(organize) {
    organize.sort((a, b) => {
        if (a.itsMe && !b.itsMe) {
            return -1 
        }
        if (!a.itsMe && b.itsMe) {
            return 1 
        }
    
        if (a.admin && !b.admin) {
            return -1 
        }
        if (!a.admin && b.admin) {
            return 1 
        }
    
    })

    console.log(organize)
}

organize(arrayObj)