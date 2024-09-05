function teste(row, colum) {
    let line = ''
    for(let i = 0; i < row; i++) {
        line = line + '-'
    }

    for(let j = 0; j< colum; j++) {
        console.log(line)
    }

}

teste(5, 5)