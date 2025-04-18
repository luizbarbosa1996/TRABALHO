document.getElementById('orcamento-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const renda = parseFloat(document.getElementById('renda').value);
    const despesas = parseFloat(document.getElementById('despesas').value);

    if (isNaN(renda) || isNaN(despesas)) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores numéricos.';
        document.getElementById('resultado').style.color = 'red';
        return;
    }

    const saldo = renda - despesas;

    if (saldo >= 0) {
        document.getElementById('resultado').textContent = `Seu saldo é R$ ${saldo.toFixed(2)}.`;
        document.getElementById('resultado').style.color = 'green';
    } else {
        document.getElementById('resultado').textContent = `Seu saldo é R$ ${saldo.toFixed(2)}. Você está com um déficit!`;
        document.getElementById('resultado').style.color = 'red';
    }
});