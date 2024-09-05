function cleaning(originalObject) {
    if(originalObject.name == null || originalObject.name == '') {
        delete originalObject.name
    }
    else if(originalObject.surname == null || originalObject.surname == '') {
        delete originalObject.surname
    }
    else if(originalObject.age == null || originalObject.age == '') {
        delete originalObject.age
    }

    console.log(originalObject)
}

cleaning({name: 'Luan', surname: 'Monteiro', age: 18})