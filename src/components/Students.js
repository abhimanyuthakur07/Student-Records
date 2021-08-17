import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import  firebaseDb  from "../fireDb.js";
import SearchBox from "./SearchBox.js";
import StudentForm from "./StudentForm"

const Students  = () => {

    const [studentData,setStudentData] = useState({})
    const [studentId,setStudentId] = useState('')
    const [searchField,setSearchField] = useState('')
    const [searchStudent,setSearchStudent] = useState('')



    useEffect(() => {
        firebaseDb.child('students').on('value',snapshot =>{
            if (snapshot.val() !== null) {
                setStudentData({
                    ...snapshot.val()
                })
            }else{
                setStudentData({})
            }
        })
    },[])

    const addandEditForm = data => {
        //console.log('studentData',studentData);
        if (studentId === "") {
            firebaseDb.child('students').push(data , 
                err => {
                    if (err) {
                        console.log(err);
                    }else {
                        setStudentId('') 
                    }
                }
                )
        }else {
            firebaseDb.child(`students/${studentId}`).set(data , 
                err => {
                    if (err) {
                        console.log(err);
                    }else {
                        setStudentId('') 
                    }
                }
                )
        }
        
    }
    const onDelete = (key) => {
        if (window.confirm('Are you sure to Delete The Record?')) {
            firebaseDb.child(`students/${key}`).remove( // remove the data withi particular id
                err => {
                    if (err) {
                        console.log(err);
                    }else
                    setStudentId('')
                }
            )
        }
        
    }
    const handleChange = (e) =>{
        setSearchField(e.target.value)

        const filteredStudents = Object.keys(studentData).filter(id  =>(
            //console.log('folter',studentData[id]),
            studentData[id].name.toLowerCase().includes(searchField.toLowerCase())
          ))
          ///
         //console.log('filteredStudents',filteredStudents);
         setSearchStudent({filteredStudents})
        // const data  = firebaseDb.child('students').doc("-MhJJQn5AsJwuUqExXnO").get()
        // console.log('data',data);
          
      }
    const onSearchSubmit  = () => {
        searchStudent.filteredStudents.map(item =>  alert(`your searched student id is${item}` ))
       
    }

    return(
        <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <h1 class="display-4">Students Registration</h1>
            <SearchBox placeholder="Enter Student's name ..." handleChange={handleChange} onSearchSubmit ={onSearchSubmit}/>
            </div>
        </div> 
         <div className="row">
         <div className="col-md-5">
           <StudentForm addandEditForm ={addandEditForm} studentData ={studentData} studentId = {studentId}/>
         </div>
         <div className="col-md-7">
           <table className="table table-borderless table-stripped">
                <thead className= "thead-light">
                    <tr>
                        <th>Student Name</th>
                        <th>Reg No</th>
                        <th>Total Marks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(studentData).map(id => {
                            //console.log('studentData',studentData);
                            return <tr key ={id}>
                                <td>{studentData[id].name}</td>
                                <td>{studentData[id].RegNo}</td>
                                <td>{studentData[id].Total_Marks}</td>
                                <td>
                                    <div  className="btn text-primary" onClick={() =>{setStudentId(id)}} >
                                        <i className="fa fa-pencil-alt"></i>
                                    </div>
                                    <div  className="btn text-danger" onClick={() =>{onDelete(id)}} >
                                        <i className="fa fa-trash-alt"></i>
                                    </div>
                            </td>
                            </tr>
                        })
                    }
                </tbody>
           </table>
         </div>
       </div>  
       </>   
    )

}
export default Students