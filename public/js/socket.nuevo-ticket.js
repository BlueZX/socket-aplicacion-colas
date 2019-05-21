// Comando para establecer la conexión
let socket = io();

let label = $('#lblNuevoTicket');


socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

// on 'estadoActual' 
socket.on('estadoActual', (resp) => {
    console.log(resp);
    label.text(resp.actual);
});

$('button').on('click', () => {
    console.log('click');


    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.text(siguienteTicket);
    });
});