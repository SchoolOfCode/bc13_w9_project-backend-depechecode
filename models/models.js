import  query  from "../db/index.js";

/** This function takes in a search paramater of a given subject and sends a query to our backend database
* @param {string} searchTerm - the selected Subject
*/

export const getSubjectByName = async(searchTerm)=> {
    const result = await query(`SELECT * FROM SubjectResources JOIN Subject ON Subject.id = SubjectResources.subject_id WHERE subject_name ILIKE $1;`,
    ["%" + searchTerm + "%"]);
    const searchBySubjectName = result.rows;
    return searchBySubjectName
}

/** This function sends a query to our backend database to retrieve all data items
*/
export const getAllSubjects = async()=>{
    const result = await query('SELECT * FROM SubjectResources')
    const allSubjects = result.rows;
    return allSubjects
}

/** This function takes in a body of subject name and definition, and adds the new subject to the database 
* @param {string} subject - the newly created subject and definition
*/

async function createSubject(subject){
    const result = await query(`INSERT INTO Subjects (subject_name, definition) VALUES ($1, $2) RETURNING *;`)
    [subject.subject_name, subject.definition]
    console.log(result.rows[0])
    return result.rows[0]
}

// //async function createSubjectResources()

/** This function takes in a subject ID and updates as parameters and patches this data to an existing subject in the database 
* @param {number} id - the subject id from the SubjectResources
* @param {string} updates - the data to be updated
*/

async function updateSubjectByID(id, updates){
    const result = await query(`UPDATE SubjectResources SET resource_name = $1, type = $2, url = $3 WHERE id = $4 RETURNING *;`, [updates.resource_name, updates.type, updates.url]);
    return result.rows[0]
}






