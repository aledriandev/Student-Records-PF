let students = [];

function listStudents() {
    return students;
}

function Student (name, teachPoints, lifePoints) {
    this.name = name;
    this.teachPoints = teachPoints;
    this.lifePoints = lifePoints;
}

function addStudent() {
    let name = prompt("Nombre de la estudiante");
    let teachPoints = prompt("Porcentaje Técnico");
    let lifePoints = prompt("Porcentaje Habilidades Socio-Emocionales");
    if (name != '' && teachPoints != '' && lifePoints != ''){
        let student = new Student(name, teachPoints, lifePoints);
        students.push(student);
        return student;
    }

}

function showStudent(student) {
    let resultado = '';
    if (student != undefined) {
        resultado = `<div class='row container'>
                            <div class='col-md-12'>
                                <div class='container-student'>
                                    <p><strong>Nombre:</strong> ${student.name} </p>
                                    <p><strong>Puntos Técnicos:</strong> ${student.teachPoints}</p>
                                    <p><strong>Puntos HSE:</strong> ${student.lifePoints}</p>
                                </div>
                            </div>
                        </div>`;
    }
    return resultado;
}

function showListStudents(students) {
    var resultado = "";
    for(var i in students)
    {
        resultado += showStudent(students[i]);
    }
    return resultado;
}

function dropout(students) {

    return respuesta;
}

function employability(students) {
    let filtered = students.filter(function(student){
        return ((student.teachPoints + student.lifePoints)/2 >= 70 );
    });
    return filtered;
}

document.getElementById("addStudent").onclick=(event)=>{
    event.preventDefault();
    let student = addStudent();
    $('#container-students').html(showStudent(student));
};
document.getElementById("printAll").onclick=(event)=>{
    event.preventDefault();
    let students = listStudents();
    $('#container-students').html(showListStudents(students));
};
document.getElementById("updateDropout").onclick=(event)=>{
    event.preventDefault();
};
document.getElementById("runEmployability").onclick=(event)=>{
    event.preventDefault();
    let students = listStudents();
    let studentsTopTecnico = employability(students);
    $('#container-students').html(showListStudents(studentsTopTecnico));
};
