export function ReducerFunction(value,action){
    console.log(action);

    switch (action.type) {
        case "ADD":
           return value + action.payload;
            
            break;
            case "SUB":
            return value - action.payload;
            
            break;
    
        default:
            return value;
    }
    

}