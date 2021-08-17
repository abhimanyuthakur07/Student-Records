import React , {useEffect , useState} from 'react'

const StudentForm  = ({addandEditForm,studentData,studentId}) => {
    const initialValues = {
        RegNo :'',
        name:'',
        Total_Marks:''

    }
    const [values , setValues] = useState(initialValues)

    useEffect(()=>{
        if (studentId === '') {
            setValues({
                ...initialValues
            })
        }else{
            setValues({
                ...studentData[studentId]
            })
        }
    },[studentData,studentId])

    const handleInputs = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        addandEditForm(values);
    }

    return (
        <form autoComplete="off" onSubmit ={handleFormSubmit}>
            <div className ="form-group input-group">
            <div className ="input-group-prepend">
            <div className ="input-group-text">
                <i className ="fas fa-user"></i>
                </div>
                </div>
            <input className ="form-control" placeholder="Student's Name" name="name" value={values.name} onChange ={handleInputs}></input>
            </div>
            <div className ="form-row">
                <div className ="form-group input-group col-md-6">
                <div className ="input-group-prepend">
                <div className ="input-group-text">
                    <i className ="fas fa-address-card"></i>
                    </div>
                    </div>
                <input className ="form-control" placeholder="Registration Number" name="RegNo" value={values.RegNo} onChange ={handleInputs}></input>
                </div>
                <div className ="form-group input-group col-md-6">
                <div className ="input-group-prepend">
                <div className ="input-group-text">
                    <i className ="fas fa-arrows-alt"></i>
                    </div>
                    </div>
                <input className ="form-control" placeholder="Total Marks" name="Total_Marks" value={values.Total_Marks} onChange ={handleInputs}></input>
                </div>
            </div>
            <div className ="form-group">
                    <input type="submit" value={studentId == ''? 'save' :'update'} className ="btn btn-primary btn-block"/>
                </div>
        </form>
    )

}
export default StudentForm