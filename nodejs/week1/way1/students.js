let fs = require('fs');
let obj = JSON.parse(fs.readFileSync('students.json', 'utf8'));  //let us read file by using 'fs' liabrary

class Students{
    constructor(...students) {
        this.students=students;              
    }
    getList(){
        return  this.students.map ((student) => {
            let name = student.name;     
            let email = student.email;   
            return {name, email} ;         
        });

    }
    getListByClass(getclass){
        let getStudentInfo = this.students.filter(student =>  student.class === getclass ? student.class:null)
        return getStudentInfo;

    }
    getStudentDetailByName(name){
        let searchedStudent = this.students.filter(student =>  student.name === name ? student.name:null)
        return searchedStudent;       
    }
    addNewStudent(addStudent){
        const isThereTheStudent= this.students.find(student => student.name === addStudent.name);
        console.log(isThereTheStudent)
        if(isThereTheStudent===undefined){
            obj.push(addStudent)
        }      
        fs.writeFile('students.json',JSON.stringify(obj),function(data){ console.log('added')})   //will add new student in json file
    }
    editStudentInfo(studentInfo){
        const editStudent= this.students.find(student => student.name === studentInfo.name);
        let indexOfStudent=this.students.indexOf(editStudent)
        // console.log(indexOfStudent)
        if (indexOfStudent !== -1) {
            // console.log(studentInfo)
            obj[indexOfStudent] = studentInfo;
            fs.writeFile('students.json',JSON.stringify(obj),function(data){ console.log('editted')})  //will edit selected name in json file
                                    }
    }
}

let hyf_students=new Students(...obj)
// hyf_students.addNewStudent({name:'terry',class:'4',email:'terry@gmail.com',phone:'12345'})
// hyf_students.editStudentInfo({name:'atakan',class:'5',email:'atakan@hotmail.com',phone:'01010101'})
//    console.log(obj)
// console.log(hyf_students. getStudentDetailByName('hakki'))
// console.log(hyf_students.getListByClass('3'))
// console.log(hyf_students.getList())


   
    
 
 
   

   




