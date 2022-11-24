import  query  from "../db/index.js";

export const getSubjectByName = async(searchTerm)=> {
    const result = await query(`SELECT * FROM SubjectResources JOIN Subject ON Subject.id = SubjectResources.subject_id WHERE subject_name ILIKE $1;`,
    ["%" + searchTerm + "%"]);

    const searchBySubjectName = result.rows;
    return searchBySubjectName

}
export const getAllSubjects = async()=>{
    const result = await query('SELECT * FROM SubjectResources')
    const allSubjects = result.rows;
    return allSubjects
}

// async function createSubject(subject){
//     const result = await query(`INSERT INTO Subjects (subject_name, definition) VALUES ($1, $2) RETURNING *;`)
//     [subject.subject_name, subject.definition]
//     console.log(result.rows[0])
//     return result.rows[0]
// }

// //async function createSubjectResources()

// async function updateSubjectByID(id, updates){
//     const result = await query(`UPDATE SubjectResources SET resource_name = $1, type = $2, url = $3 WHERE id = $4 RETURNING *;`, [updates.resource_name, updates.type, updates.url]);
//     return result.rows[0]
// }






