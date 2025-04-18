document.getElementById('gerar-fluxo').addEventListener('click', function() {
    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-fim').value;

    // Simulação de dados de transações (substitua por seus dados reais)
    const transacoes = [
        { data: '2024-05-01', descricao: 'Salário', valor: 5000, tipo: 'receita' },
        { data: '2024-05-05', descricao: 'Aluguel', valor: 1200, tipo: 'despesa' },
        { data: '2024-05-10', descricao: 'Supermercado', valor: 300, tipo: 'despesa' },
        { data: '2024-05-15', descricao: 'Freelance', valor: 1000, tipo: 'receita' },
        { data: '2024-05-20', descricao: 'Conta de Luz', valor: 150, tipo: 'despesa' }
    ];

    const transacoesFiltradas = transacoes.filter(transacao => {
        return transacao.data >= dataInicio && transacao.data <= dataFim;
    });

    let html = '<table><thead><tr><th>Data</th><th>Descrição</th><th>Valor</th><th>Tipo</th></tr></thead><tbody>';

    transacoesFiltradas.forEach(transacao => {
        html += `<tr><td>${transacao.data}</td><td>${transacao.descricao}</td><td>R$ ${transacao.valor.toFixed(2)}</td><td>${transacao.tipo}</td></tr>`;
    });

    html += '</tbody></table>';

    document.getElementById('fluxo-resultado').innerHTML = html;
});