function Student(a, b, c, d, e) {
    this.id = a;
    this.name = b;
    this.mark1 = c;
    this.mark2 = d;
    this.mark3 = e;

    this.setId = function (a) {
        this.id = a;
    }


    this.setName = function (b) {
        this.name = b;
    }


    this.setMark1 = function (m) {
        this.mark1 = m;
    }


    this.setMark2 = function (m) {
        this.mark2 = m;
    }


    this.setMark3 = function (m) {
        this.mark3 = m;
    }

    this.getTotal = function () {
        return this.mark1 + this.mark2 + this.mark3;
    }

}

var stud1 = new Student(1, 'Kapil', 20, 30, 30);
var stud2 = new Student(2, 'Dinesh', 30, 30, 30);
var stud3 = new Student(3, 'Mukilan', 70, 40, 50);

function StudentManager() {
    this.students = [];
    this.addStudent = function (s) {
        this.students.push(s);
    }

    this.removeStudent = function (id) {
        for (i in this.students) {
            var stud = this.students[i];
            if (stud.id == id)
                this.students.splice(i, 1);
        }
    }

    this.findStudent = function (id) {
        for (i in this.students) {
            var stud = this.students[i];
            if (stud.id == id)
                return stud;
        }
    }

    this.getAllStudents = function () {
        return this.students;
    }

    this.updateStudent = function (s) {
        for (i in this.students) {
            var stud = this.students[i];
            if (stud.id == s.id) {
                this.students[i] = s;
                console.log("....updated" + stud.name);
                break;
            }
        }
    }
}

var sm = new StudentManager();
sm.addStudent(stud1);
sm.addStudent(stud2);
sm.addStudent(stud3);

function studentRemover(id) {
    this.removeStudent(id);
}

function studentAdder(s) {
    this.addStudent(s)
}

function studentFinder(id) {
    return this.findStudent(id)
}

function studentUpdater(s) {
    this.updateStudent(s);
}
module.exports={
    "StudentManager":StudentManager,
    "Student":Student
}