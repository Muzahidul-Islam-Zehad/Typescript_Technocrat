
const filterEvenNumbers =  (numbers : number[]) : number[] =>{
    return numbers.filter((num)=> num %2 === 0 );
}


const reverseString = (text : string) : string =>{
    return text.split('').reverse().join('');
}


type StringOrNumber = string | number;
const checkType  = (input : StringOrNumber) : string =>{
    if(typeof input === 'string')
    {
        return "String";
    }
    else{
        return "Number";
    }
}


const getProperty = <T> (obj : T , key : keyof T) : T[keyof T] =>{
    return obj[key];
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
const toggleReadStatus = (book : Book) : Book & {isRead: boolean} =>{
    return(
        {
            ...book,
            isRead: true
        }
    )
}


class Person {
    name : string;
    age: number;

    constructor(name:string, age: number ){
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade : string;

    constructor(name:string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    getDetails() : string{
        return(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}



const getIntersection = (numbers1: number[] , numbers2: number[]) : number[] =>{
    return (numbers1.filter(number => numbers2.includes(number)))
}