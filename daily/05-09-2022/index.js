//database type planning

/* create student require: name, age, pointsLastYear */
// return data base: 
/* get = {
    id: randowId
    classroom: comform your score from the previous year
    student: {
    id: randowId
    nameStudent, 
    age, 
    pointsLastYear
    }
}
*/
//  status 200 = save
// status 201 = create student 

const nameStudent = "José Rosa da Silva";
const age = 15;
const pointsLastYear = 28;
const idStudent = 23241434123

const header = new Headers()
header.set("content-type", "application/json")

const getData = async() => {
    try {
        const data = await fetch("student/wednesday", {
            cors: "cors", 
            header,
            method: "GET",
        })
        const get = await data.json()
        return get
    } catch (error) {
        return error.message
    }
}

const updateReplace = async() => {
    try {
        const data = await fetch("student/wednesday/update", {
            cors: "cors", 
            header,
            method: "PUT",
            body: JSON.stringify(
                idStudent,
                nameStudent, 
                age, 
                pointsLastYear
            )
        })
        const get = await data.json()
        return get
    } catch (error) {
 
        return [error]
    }
}

const updateModify = async() => {
    try {
        const data = await fetch("student/wednesday/update", {
            cors: "cors", 
            header,
            method: "PATCH",
            body: JSON.stringify(
                idStudent,
                nameStudent
            )
        })
        const get = await data.json()
        return get
    } catch (error) {
 
        return [error]
    }
}

const delet = async() => {
    try {
        const data = await fetch(`student/wednesday/delete/${idStudent}/${nameStudent}`, {method: "DELETE"})
        const get = await data.json()
        return get
    } catch (error) {
 
        return [error]
    }
}
