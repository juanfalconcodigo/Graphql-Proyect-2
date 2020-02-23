import {IResolvers} from 'graphql-tools';
import { students, courses } from '../data/data.store';

const query:IResolvers={
    Query:{
        students():any{
            return students;
        },
        student(__:void,{id}):any{
            const result=students.find((student)=>student.id===id);
            if(result===undefined){
                return {
                    id:'-1',
                    name:`No existe un usuario con el id : ${id}`,
                    email:'',
                    courses:[]
                }
            }
            return result;
        },
        courses():any{
            return courses;
        },
        course(__:void,{id}):any{
            const result=courses.find((course)=>course.id===id);
            if(result===undefined){
                return{
                    id:'-1',
                    title:`No existe un curso con el id : ${id}`,
                    description:'',
                    clases:-1,
                    time:0.0,
                    level:'ALL',
                    logo:'',
                    path:'',
                    teacher:'',
                    reviews:[]
                }
            }
            return result;
        }

    }
}

export default query;

