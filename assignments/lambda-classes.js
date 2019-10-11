// CODE here for your Lambda Classes

class Person {
    constructor(object) {
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
    }
    speak() {
          return `Hello my name is ${this.name} , I am from ${this.location} `;
        };
    } 



    class Instructor extends Person {
        constructor(inObject) {
            super(inObject);
            this.specialty = inObject.specialty;
            this.favLanguage = inObject.favLanguage;
            this.catchPhrase = inObject.catchPhrase;
        }
        demo(subject) {
            return `Today we are learning about ${subject}`;
        };
        grade(student, subject) {
            return `${student} receives a perfect score on ${subject}`;
        }
    }

    const Pace = new Instructor({
        name: 'Grand Master Pace',
        age: 2019,
        location: 'AZ',
        specialty: 'Web Fundamentals',
        favLanguage: 'Javascript',
        catchPhrase: 'Logitec hardware is the best (ツ)',
      });
      
    console.log(Pace.name);
    console.log(Pace.age);
    console.log(Pace.location);
    console.log(Pace.speak());
    console.log(Pace.specialty);
    console.log(Pace.favLanguage);
    console.log(Pace.catchPhrase);
    console.log(Pace.demo('Tacos!'));
    console.log(Pace.grade('Pete','Web Fundamentals'));



    class Student extends Person {
        constructor(stObject) {
            super(stObject);
            this.previousBackground = stObject.previousBackground;
            this.className = stObject.className;
            this.favSubjects = stObject.favSubjects;
            this.grade = stObject.grade;
        }
        listSubjects() {
             this.favSubjects.forEach(function(item) {
             console.log(item);
            });
        }
            //getting weird undefined returned from the forEach function...


        PRAssignment(subject) {
            return `${this.name} has submitted a PR for ${subject}`;
        }
    }


    const Pete = new Student({
        name: 'Pete James',
        age: 36,
        location: 'CA',
        previousBackground: 'Whisky extraordinaire',
        className: 'PT11',
        favSubjects: ['Web Fundamentals', 'Javascript', 'HTML', 'CSS'],
        grade: 3
      });
      
    console.log(Pete.name);
    console.log(Pete.age);
    console.log(Pete.location);
    console.log(Pete.speak());
    console.log(Pete.previousBackground);
    console.log(Pete.className);
    Pete.listSubjects();
    console.log(Pete.PRAssignment('LESS'));
    console.log(Pete.grade);


    class TeamLeader extends Instructor {
        constructor(tlObject) {
            super(tlObject);
            this.gradClassName = tlObject.gradClassName;
            this.favInstructor = tlObject.favInstructor;
        }
        standUp(channel) {
            return `${this.name} announces to ${channel}, @channel standy times!`;
        }
        debugsCode(student, subject) {
            return `${this.name} debugs ${student}'s code on ${subject}`;
        }
    }

    const Bradley = new TeamLeader({
        name: 'Bradley',
        age: 25,
        location: 'Moscow',
        specialty: 'Web Fundamentals',
        favLanguage: 'Javascript',
        catchPhrase: 'go sports',
        gradClassName : 'FT01',
        favInstructor : 'John Doe',
      });

    console.log(Bradley.name);
    console.log(Bradley.age);
    console.log(Bradley.location);
    console.log(Bradley.speak());
    console.log(Bradley.specialty);
    console.log(Bradley.favLanguage);
    console.log(Bradley.catchPhrase);
    console.log(Bradley.demo('Sports!'));
    console.log(Bradley.grade('Pete','Web Fundamentals'));
    console.log(Bradley.gradClassName);
    console.log(Bradley.favInstructor);
    console.log(Bradley.standUp('webpt11_bradley'));
    console.log(Bradley.debugsCode('Pete', 'JS IV'));


