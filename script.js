$(document).ready(function() {
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Obtém o valor do input
        var taskInput = $('#task-input').val();

        // Adiciona a nova tarefa à lista
        $('#task-list').append('<li>' + taskInput + '</li>');

        // Limpa o campo de entrada
        $('#task-input').val('');
    });

    // Adiciona o efeito de riscar a tarefa ao clicar
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});