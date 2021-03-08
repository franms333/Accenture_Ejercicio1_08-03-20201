/*Realizar un programa para web (Con interfaz Gráfica), en el cual el alumno introduce sus datos al ingresar:
Nombre, DNI, Fecha de nacimiento, teléfono, email, numero de legajo, Curso. Validar si el alumno pertenece al Curso, si el alumno cumple con el rango de edad para el curso seleccionado, si el alumno es mayor de 18, validar largo de teléfono (10) y email (50), si el número de legajo es correcto con el DNI (Numero de Legajo se forma con: “A” + curso + DNI + “2021”)
Ingresar notas y su valor ponderado (como cuando un examen vale un 30% y otro examen el 70%). 
Materias:
Química (Aprobado 10%)Matemática (Aprobado 20%)Ciencias Sociales (Aprobado 5%)Física (Aprobado 10%)Historia (Aprobado 5%)Biología (Aprobado 20%)Informática (Aprobado 30%)Idiomas (Aprobado 30%)
Se debe permitir:
Buscar un alumno:
Debe podir seleccionar por qué dato se va a buscar: DNI, nombre, celular o email.A continuación, debe poder ingresar el valor que se va a buscar.Si el alumno existe debe mostrar la información del alumno con todos sus datos.Si el alumno no existe debe mostrar un mensaje informándolo.A continuación, debe pedir si se desea realizar nuevamente el procedimiento: 
Si la respuesta es afirmativa, debe volver a realizar el procedimientoSi la respuesta es negativa, debe llevar al menú de operaciones
Listar todos los alumno:
Debe mostrar un listado con todos los usuarios y todos sus datos: 
LegajoCursoDNINombreFecha NacimientoTeléfonoEmail
Luego debe llevar al menú de operaciones.
Debe poder mostrar un listado por materia con los alumnos aprobados y desaprobados según selección. Además un mensaje advirtiendo si el alumno paso de Año (Debe tener un porcentaje total mayor o igual al 100% )
Salir del programa:
Debe preguntar si desea confirmar la operación:
Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programaSi la respuesta es negativa debe volver al menú de operaciones */
document.getElementById('div-subjects-form').style.display='none';
document.getElementById('menu').style.display='none';
document.getElementById('busquedaUsuario').style.display='none';
document.getElementById('input').style.display='none';
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const dni = document.getElementById('dni');
let curso = document.getElementById('curso');
let legajo = document.getElementById('legajo');

document.getElementById('nombre').addEventListener('blur', validateNombre);
document.getElementById('dni').addEventListener('blur', validateDNI);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('telefono').addEventListener('blur', validateTelefono);
document.getElementById('curso').addEventListener('blur', validateCurso);
document.getElementById('legajo').addEventListener('blur', validateLegajo);
document.getElementById('fechaNacimiento').addEventListener('blur', validateBirthDay);

const buscarDNI = document.getElementById('buscarDNI').addEventListener('click', ingresarValor);
const buscarNombre = document.getElementById('buscarNombre').addEventListener('click', ingresarValor);
const buscarCelular = document.getElementById('buscarCelular').addEventListener('click', ingresarValor);
const buscarEmail = document.getElementById('buscarEmail').addEventListener('click', ingresarValor);

let aprobados = [];


const button = document.getElementById('button').addEventListener('click', function(e){

    document.getElementById('div-student-form').style.display='none';
    document.getElementById('div-subjects-form').style.display='block';
    document.getElementById('menu').style.display='block';
    const quimica = document.getElementById('quimica');
    const matematica = document.getElementById('matematica');
    const csSociales = document.getElementById('ciencias-sociales');
    const fisica = document.getElementById('fisica');
    const historia = document.getElementById('historia');
    const biologia = document.getElementById('biologia');
    const informatica = document.getElementById('informatica');
    const idiomas = document.getElementById('idiomas');
    
    if(nombre.value==='' || email.value==='' || telefono.value==='' || dni.value==='' 
    || curso.value==='' || legajo===''){
        alert('por favor llene todos los datos');
    }else{
    // BOTÓN 2
    document.getElementById('button2').addEventListener('click', function(e1){

        // QUIMICA
        if(quimica.value!==''){
        let arrQuimica = quimica.value.split(',');
        totalQ = 0;
        arrQuimica.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalQ += notaInt
            totalQ = Math.round(totalQ*0.10);
        })
        let itemQ = document.createElement('p');
        itemQ.textContent = `El total porcentual de la materia es: ${totalQ}`;
        document.getElementById("div-quimica").appendChild(itemQ);
        console.log(totalQ);
        
    } else{
        let itemQ = document.createElement('p');
        itemQ.textContent = `Favor complete todos los datos`;
        document.getElementById("div-quimica").appendChild(itemQ);
        
    }
        //MATEMATICA
        if(matematica.value!==''){
        let arrMatematica = matematica.value.split(',');
        totalM = 0;
        arrMatematica.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalM += notaInt
            totalM = Math.round(totalM*0.20)
        })
        let itemM = document.createElement('p');
        itemM.textContent = `El total porcentual de la materia es: ${totalM}`;
        document.getElementById("div-matematica").appendChild(itemM);
        console.log(totalM);
    } else{
        let itemM = document.createElement('p');
        itemM.textContent = `Favor complete todos los campos`;
        document.getElementById("div-matematica").appendChild(itemM);
        
    }
        //CIENCIAS SOCIALES
        if(csSociales.value!==''){
        let arrCsSociales = csSociales.value.split(',');
        totalCs = 0;
        arrCsSociales.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalCs += notaInt
            totalCs = Math.round(totalCs*0.05)
        })
        let itemCs = document.createElement('p');
        itemCs.textContent = `El total porcentual de la materia es: ${totalCs}`;
        document.getElementById("div-ciencias-sociales").appendChild(itemCs);
        console.log(totalCs);
    } else{
        let itemCs = document.createElement('p');
        itemCs.textContent = `Favor complete todos los campos`;
        document.getElementById("div-ciencias-sociales").appendChild(itemCs);
    }
        //FÍSICA
        if(fisica.value!==''){
        let arrFisica = fisica.value.split(',');
        totalF = 0;
        arrFisica.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalF += notaInt
            totalF = Math.round(totalF*0.10)
        })
        let itemF = document.createElement('p');
        itemF.textContent = `El total porcentual de la materia es: ${totalF}`;
        document.getElementById("div-fisica").appendChild(itemF);
        console.log(totalF);
    } else{
        let itemF = document.createElement('p');
        itemF.textContent = `Favor complete todos los campos`;
        document.getElementById("div-fisica").appendChild(itemF);
    }
        //HISTORIA
        if(historia.value!==''){
        let arrHistoria = historia.value.split(',');
        totalH = 0;
        arrHistoria.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalH += notaInt
            totalH = Math.round(totalH*0.05)
        })
        let itemH = document.createElement('p');
        itemH.textContent = `El total porcentual de la materia es: ${totalH}`;
        document.getElementById("div-historia").appendChild(itemH);
        console.log(totalH);
    } else{
        let itemH = document.createElement('p');
        itemH.textContent = `Favor complete todos los campos`;
        document.getElementById("div-historia").appendChild(itemH);
    }
        //BIOLOGÍA
        if(biologia.value!==''){
        let arrBiologia = biologia.value.split(',');
        totalB = 0;
        arrBiologia.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalB += notaInt
            totalB = Math.round(totalB*0.20)
        })
        let itemB = document.createElement('p');
        itemB.textContent = `El total porcentual de la materia es: ${totalB}`;
        document.getElementById("div-biologia").appendChild(itemB);
        console.log(totalB);
    } else{
        let itemB = document.createElement('p');
        itemB.textContent = `Favor complete todos los campos`;
        document.getElementById("div-biologia").appendChild(itemB);
    }
        //INFORMÁTICA
        if(informatica.value!==''){
        let arrInformatica = informatica.value.split(',');
        totalI = 0;
        arrInformatica.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalI += notaInt
            totalI = Math.round(totalI*0.30)
        })
        let itemI = document.createElement('p');
        itemI.textContent = `El total porcentual de la materia es: ${totalI}`;
        document.getElementById("div-informatica").appendChild(itemI);
        console.log(totalI);
    } else{
        let itemI = document.createElement('p');
        itemI.textContent = `Favor Complete todos los campos`;
        document.getElementById("div-informatica").appendChild(itemI);
    }
        //IDIOMAS
        if(idiomas.value!==''){
        let arrIdiomas = idiomas.value.split(',');
        totalId = 0;
        arrIdiomas.forEach(function(nota){
            let notaInt = parseInt(nota);
            totalId += notaInt
            totalId = Math.round(totalId*0.30)
        })
        let itemId = document.createElement('p');
        itemId.textContent = `El total porcentual de la materia es: ${totalId}`;
        document.getElementById("div-idiomas").appendChild(itemId);
        console.log(totalId);
    } else{
        let itemId = document.createElement('p');
        itemId.textContent = `Favor complete todos los campos`;
        document.getElementById("div-idiomas").appendChild(itemId);
    }
    fetch('alumnos.json').then(response => response.json())
        .then(data => {
        console.log(data);
        const alumno = data.find(alumno => 
            alumno.nombre === nombre.value || alumno.dni === parseInt(dni.value) || alumno.telefono === telefono.value
            || alumno.email === email.value);
        console.log(alumno);
        let notaFinal = totalQ + totalM + totalCs + totalF + totalH + totalB + totalI + totalId;
        if(notaFinal>4){
            aprobados.push(JSON.stringify(alumno.nombre));
            aprobados.push(JSON.stringify(alumno.dni));
            aprobados.push(JSON.stringify(alumno.mail));
            aprobados.push(JSON.stringify(alumno.telefono));
            aprobados.push(JSON.stringify(alumno.curso));
            aprobados.push(JSON.stringify(alumno.legajo));
        }
        console.log(aprobados);
        })
    
    
    
        e1.preventDefault()
    }) 
    
    e.preventDefault();
}
})


const listaUsuarios= document.getElementById('b1').addEventListener('click',function(e){
    listarTodosLosUsuarios();
})

function listarTodosLosUsuarios(){
    document.getElementById('listaUsuarios').innerHTML= '';
    fetch('alumnos.json').then(response => response.json())
        .then(data => {
        console.log(data);
        let listUsers = "";
        data.forEach(function(alumno){
            listUsers += 
            `
            <ul class="pt-5">
                <li>Nombre: ${alumno.nombre}</li>
                <li>D.N.I: ${alumno.dni}</li>
                <li>E-mail: ${alumno.mail}</li>
                <li>Telefono: ${alumno.telefono}</li>
                <li>Curso: ${alumno.curso}</li>
                <li>Legajo: ${alumno.legajo}</li>
            </ul>
            <hr>
            `
        });
        let listAprobados = "";
        listAprobados += 
            `
            <ul class="pt-5 text-center">
                <h4>Aprobados</h4>
                <li>Nombre: ${aprobados[0]}</li>
                <li>DNI: ${aprobados[1]}</li>
                <li>E-mail: ${aprobados[2]}</li>
                <li>Telefono: ${aprobados[3]}</li>
                <li>Curso: ${aprobados[4]}</li>
                <li>Legajo: ${aprobados[5]}</li>
            </ul>
            <hr>
            `
        console.log(aprobados);
        document.getElementById('div-subjects-form').style.display='none';
        document.getElementById('listaUsuarios').innerHTML= listUsers;
        document.getElementById('aprobados').innerHTML= listAprobados;
        
    })
}

const buscarUsuario= document.getElementById('b2').addEventListener('click',function(e){
    buscarUsuarioMenu();
})

const buscar = document.getElementById('buscar').addEventListener('click', (e) => {
    userSearch(valorBusqueda);
});

const salir = document.getElementById('b3').addEventListener('click', salirDelSistema);

function salirDelSistema(){
    const validarSalida = confirm('¿Está seguro que desea salir?');
    if(validarSalida){
        alert('Hasta luego!');
        document.getElementById('listaUsuarios').innerHTML = '';
        document.getElementById('input').style.display = 'none'
        document.getElementById('aprobados').innerHTML='';
        document.getElementById('div-student-form').style.display='block';
        document.getElementById('menu').style.display='none';
        
    }
}

function userSearch(text){
    fetch('alumnos.json').then(response => response.json())
        .then(data => {
        console.log(data);
        const alumno = data.find(alumno => 
            alumno.nombre === text.value || alumno.dni === parseInt(text.value) || alumno.telefono === text.value
            || alumno.email === text.value);
        if(typeof alumno !== 'undefined'){
        if(alumno.nombre === text.value || alumno.dni === parseInt(text.value) || alumno.telefono === text.value
            || alumno.email === text.value) {
            
            let listUsers='';
            listUsers += 
            `
            <ul class="pt-5">
                <li>Nombre: ${alumno.nombre}</li>
                <li>D.N.I: ${alumno.dni}</li>
                <li>E-mail: ${alumno.mail}</li>
                <li>Telefono: ${alumno.telefono}</li>
                <li>Curso: ${alumno.curso}</li>
                <li>Legajo: ${alumno.legajo}</li>
            </ul>
            <hr>
            `
            
            document.getElementById('listaUsuarios').innerHTML= listUsers;
            }
        } else {
            alert('El dato ingresado no coincide con ningun alumno registrado');
            const pregunta = confirm('¿Desea realizar el procedimiento nuevamente?');
            if(pregunta){
                document.getElementById('input').style.display = 'none';
                document.getElementById('menu').style.display = 'block';
            } else {
                document.getElementById('input').style.display = 'none';
                document.getElementById('menu').style.display = 'block';
            }
            }
        })
        document.getElementById('menu').style.display='block';
}


function ingresarValor(){
    document.getElementById('input').style.display = 'block'
    document.getElementById('busquedaUsuario').style.display = 'none';
}

function buscarUsuarioMenu(){
    document.getElementById('busquedaUsuario').style.display='block';
    document.getElementById('div-subjects-form').style.display='none';
    document.getElementById('menu').style.display='none';
    
}

function validateCurso(){
    const nombre = document.getElementById('nombre')
    let curso = document.getElementById('curso');
    fetch('alumnos.json').then(response => response.json())
        .then(data => {
        console.log(data);
        const alumno = data.find(alumno => alumno.nombre === nombre.value);
    if(alumno.curso!==curso.value){
        alert('El curso no coincide con el nombre especificado')
        curso.classList.add('is-invalid');
    }else{
        curso.classList.remove('is-invalid');
    }
});
}

function validateLegajo(){
    const nombre = document.getElementById('nombre');
    const dni = document.getElementById('dni');
    fetch('alumnos.json').then(response => response.json())
        .then(data => {
        console.log(data);
        const alumno = data.find(alumno => alumno.nombre === nombre.value);
        let legajoAlumno = JSON.stringify(alumno.legajo);
    if(!legajoAlumno.includes(dni.value)){
        legajo.classList.add('is-invalid');
    } else{
        legajo.classList.remove('is-invalid');
    }
});
}

function validateNombre(){
    const nombre = document.getElementById('nombre');
    const re = /^[A-Za-z]{2,10}$/;
    if(!re.test(nombre.value)){
        nombre.classList.add('is-invalid');
    }else{
        nombre.classList.remove('is-invalid');
    }
}
function validateDNI(){
    const dni = document.getElementById('dni');
    if(parseInt(dni.value) <= 0 || parseInt(dni.value) > 99999999 || dni.value === ''){
        dni.classList.add('is-invalid');
    }else{
        dni.classList.remove('is-invalid');
    }
}
function validateTelefono(){
    const phone = document.getElementById('telefono');
    
    if(phone.value.length>10){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
    
}
function validateEmail(){
    const email = document.getElementById('email');
    const re = /^[a-zA-Z0-9_\-\.]{2,}(@[a-zA-Z0-9_\-\.]{2,10})(.[a-z]{2,5})$/;
    //MANERA ALTERNATIVA: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([A-Za-z]{2,5})$/
    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
    
}
function validateBirthDay(){
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    const fechaParseada = new Date(fechaNacimiento.value);
    const diff = Date.now() - fechaParseada.getTime();
    const ageDate = new Date(diff);
    const total =  Math.abs(ageDate.getUTCFullYear()-1970);
    
    if(total< 18){
        console.log(total);
        fechaNacimiento.classList.add('is-invalid');
    }else{
        fechaNacimiento.classList.remove('is-invalid');
    }
}