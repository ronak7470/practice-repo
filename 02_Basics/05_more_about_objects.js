let course = {
    courseName : "javascript",
    price : "999",
    courseInstructor : "Hitesh"
}
//If we want to access the value of property first way is this
//console.log(course.courseInstructor);
//or we also can do this 

//const {courseInstructor} = course
//console.log(courseInstructor); //This is the modern way to access the value

//We can also change the name of property according to our needs
const {courseInstructor: instructor} = course

console.log(instructor); // This is called Destructuring in javascript

//JSON object Javascript Object Notation
//create a JSON object
/* {
    "name": "Ronak",
    "age": 25,
    "course" : "javascript"
}
    //This is an example of a JSON object
    */