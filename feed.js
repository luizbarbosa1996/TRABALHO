document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simulação de envio do feedback (substitua por sua lógica de backend)
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);

    // Mensagem de retorno
    document.getElementById('mensagem-retorno').textContent = 'Feedback enviado com sucesso!';
    document.getElementById('mensagem-retorno').style.color = 'green';

    // Limpa o formulário
    document.getElementById('feedback-form').reset();
});