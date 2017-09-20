let resultado = document.getElementById("contenedor-students")

let students = [];

function obtenerListastudents() {
    return students;
}

function Estudiante (name, teachPoints, lifePoints) {
    this.name = name;
    this.teachPoints = teachPoints;
    this.lifePoints = lifePoints;
}

function addStudent() {
    const name = prompt("Nombre de la estudiante");
    const teachPoints = prompt("Porcentaje Técnico");
    const lifePoints = prompt("Porcentaje Habilidades Socio-Emocionales");
    
    let student = new Estudiante(name, teachPoints, lifePoints);
    students.push(student);
    return student;
}

function mostrar(student) 
{
    var resultado = "";
    if(student != undefined)
    {
        if(student.name != null && student.teachPoints != null && student.lifePoints != null)
        {
            resultado += "<div class='row'>";
            resultado += "<div class='col m12'>";
            resultado += "<div class='card blue-grey darken-1'>";
            resultado += "<div class='card-content white-text'>";
            resultado += "<p><strong>name:</strong> " + student.name + "</p>";
            resultado += "<p><strong>Puntos Técnicos:</strong> " + student.teachPoints + "</p>";
            resultado += "<p><strong>Puntos HSE:</strong> " + student.lifePoints + "</p>";
            resultado += "</div>";
            resultado += "</div>";
            resultado += "</div>";
            resultado += "</div>";
        }
    }
    return resultado;
}

function mostrarLista(students) {
    var resultado = "";
    for(var i in students)
    {
        resultado += mostrar(students[i]);
    }
    return resultado;
}

function buscar(name, students) {
    students = obtenerListastudents();
    var respuesta="";
    students.forEach(function(estudiante){
      if(estudiante.name.toUpperCase()==name.toUpperCase()){
        respuesta=estudiante;
      }
    });
    return respuesta;
}

function employability(students) {
    let filtrado = students.filter(function(estudiante){
        return estudiante.teachPoints >= 70;
    });
    return filtrado;
}

document.getElementById("addStudent").onclick=(event)=>{
    event.preventDefault();
    var student = addStudent();
    resultado.innerHTML = mostrar(student);
};
document.getElementById("printAll").onclick=(event)=>{
    event.preventDefault();
    var students = obtenerListastudents();
    resultado.innerHTML = mostrarLista(students);
};
document.getElementById("updateDropout").onclick=(event)=>{
    event.preventDefault();
    var students = obtenerListastudents();
    var nameEstudiante = prompt("¿Qué name desea buscar?");
    var estudianteBuscado = buscar(nameEstudiante, students);
    resultado.innerHTML = mostrar(estudianteBuscado);
};
document.getElementById("runEmployability").onclick=(event)=>{
    event.preventDefault();
    var students = obtenerListastudents();
    var studentsTopTecnico = employability(students);
    resultado.innerHTML = mostrarLista(studentsTopTecnico);
};
