import {IResolvers} from 'graphql-tools';
import { courses, students } from '../data/data.store';
import _ from 'lodash';
const type:IResolvers={
    Student:{
        courses:parent=>{
            const coursesList:any[]=[];
            parent.courses.filter((course:any)=>{
                coursesList.push(_.filter(courses,['id',course])[0]);
            });
            return coursesList;
        }
    },
    Course:{
        students:parent=>{
            const {id}=parent;
            const studentsList:any[]=[];
            students.map(student=>{
                if(student.courses.filter((idCourse:any)=>idCourse===id).length>0){
                    studentsList.push(student);
                }
            });
            return studentsList
        },
        path:parent=>`https://www.udemy.com${parent.path}`
    }
}

export default type;
