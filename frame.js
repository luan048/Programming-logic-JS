function molder(row, columns) {
    let line = ""
    if (row > 0 && columns > 0) {
        for (let i = 0; i < row; i++) {
            line = line + '-'
        }
        console.log(`+${line}+`)

        for (let j = 1; j < columns + 1; j++) {
            console.log('-')
        }
        console.log(`+${line}+`)
    }
}

molder(5, 2)