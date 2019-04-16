const initState={}


const ProjectReducer = (state=initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('create_project_error', action.error);
        return state;
        default:
        return state;
    }
}


export default ProjectReducer