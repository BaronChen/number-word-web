export interface StandardResponse<T>{
    errors: Array<string>;   
    warnings: Array<string>;   
    messages: Array<string>;   

    data: T;

}