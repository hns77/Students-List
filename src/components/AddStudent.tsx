/*import { Button, Paper, TextField } from "@mui/material"
import { useEffect, useRef, type ChangeEvent } from "react"
import { type Student} from "../utils/data";
interface Props{
    students: Student[]
        setStudents:React.Dispatch<React.SetStateAction<Student[]>>
    }
  
export const AddStudent = ({setStudents, students}:Props) => {
  const formData = {id: 19, name: "", age: 0, email: "", department: ""}
   
  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const departmentRef = useRef<HTMLInputElement>(null)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.name = e.target.value;
  };
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.age = parseInt(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.email = e.target.value;
  };
  const handleDepartmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.department = e.target.value;
  };
  const handleSubmit = () =>{
    console.log(formData)
    setStudents([...students,formData])
    if(nameRef.current){
       nameRef.current.value = ""
    }
     if(ageRef.current){
       ageRef.current.value = ""
    }
     if(emailRef.current){
       emailRef.current.value = ""
    }
     if(departmentRef.current){
       departmentRef.current.value = ""
    }   
  };
    
  useEffect(() =>{
    console.log("Starting useEffect")
    if(nameRef.current?.value === "Admin"){
     alert("You entered a name that not be store in database")
    }
   },[nameRef])0

    return(
        <Paper sx = {{width: 200, padding: 2, marginTop:"10px", gap: 1, display:"flex", flexDirection:"column"
        }}>
        <TextField inputRef={nameRef onChange = {handleNameChange} id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />*/
/*import { Button, Paper, TextField } from "@mui/material"
import { useEffect,  useState, type ChangeEvent } from "react"
import { type Student } from "../utils/data";

interface Props {
  students: Student[],
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>
}

export const AddStudent = ({ setStudents, students }: Props) => {
  const[formData, setFormData] = useState({ id: 19, fullName: "", age: 0, email: "", department: "" }) 
  


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]: e.target.value})
    
  };
 

  const handleSubmit = () => {
    console.log(formData)
    setStudents([...students, formData])
    

  useEffect(() => {
    console.log("Firing useEffect")
    if (formData.fullName === "Admin") {
      alert("You entered a name that should not be stored in the database")
    }
  }, [formData])

  return (
    <Paper sx={{
      width: 200,
      padding: 2,
      marginTop: "10px",
      gap: 1,
      display: "flex",
      flexDirection: "column"
    }}>
      <TextField
        inputRef={}
        onChange={handleChange}
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        inputRef={}
        onChange={handleChange}
        id="outlined-age"
        label="Age"
        name="age"
        type="number"
        variant="outlined"
      />
      <TextField
        inputRef={}
        onChange={handleChange}
        id="outlined-email"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        inputRef={}
        onChange={handleChange}
        id="outlined-department"
        label="Department"
        name="department"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSubmit}>Add Student</Button>
    </Paper>
  )
}*/

import { Button, Paper, TextField } from "@mui/material"
import { useEffect, useState, type ChangeEvent } from "react"
import { type Student } from "../utils/data";

interface Props {
  students: Student[],
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>
}
const initialState ={ id: 19, fullName: "", age: "", email: "", department: "", year: ""}
export const AddStudent = ({ setStudents, students }: Props) => {
  const [formData, setFormData] = useState({ id: 19, fullName: "", age: "", email: "", department: "", year: " "
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]:e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(formData)
    setStudents([...students, formData])
    setFormData(initialState)
  
    setFormData({id: formData.id, fullName: "", age: "", email: "", department: "", year: ""
    });
  };

  
  useEffect(() => {
    console.log("Firing useEffect")
    if (formData.fullName === "Admin") {
      alert("You entered a name that should not be stored in the database")
    }
  }, [formData.fullName]);
  

  return (
    <Paper sx={{
      width: 200,
      padding: 2,
      marginTop: "10px",
      gap: 1,
      display: "flex",
      flexDirection: "column"
    }}>
      <TextField
        onChange={handleChange}
        value={formData.fullName}
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.age}
        id="outlined-basic"
        label="Age"
        name="age"
        type="number"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.email}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.department}
        id="outlined-basic"
        label="Department"
        name="department"
        variant="outlined"
      />
      <TextField
        onChange={handleChange}
        value={formData.year}
        id="outlined-basic"
        label="Year"
        name="year"
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Student
      </Button>
    </Paper>
  )
}
