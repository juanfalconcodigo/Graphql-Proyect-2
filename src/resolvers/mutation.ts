import {IResolvers} from 'graphql-tools';
import { courses } from '../data/data.store';

const mutation:IResolvers={

    Mutation:{
        addCourse(__:void,{course}):any{
            const id=String(courses.length+1);
            const newCourse={
                id,
                ...course,
                reviews:[]
            }  
            if(courses.filter(courseFilter=>courseFilter.title===newCourse.title).length >0){
                return {
                    id:'-1',
                    title:'Curso ya existe',
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
            courses.push(newCourse);
            return newCourse;
        },
        updateCourse(__,{id,course}):any{
            let index:number;
            const update=courses.find(findCourse=>findCourse.id===id);
            if(update===undefined){
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
            const updateCourse={
                id,
                ...course,
                reviews:update.reviews
            }
            index=courses.indexOf(update);
            courses[index]=updateCourse;
            return updateCourse;
        },
        deleteCourse(__:void,{id}):any{
            let index:number;
            const course=courses.find(findCourse=>findCourse.id===id);
            if(course===undefined){
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
            index=courses.indexOf(course);
            courses.splice(index,1);
            return course;
        }
    }
   
}

export default mutation;
