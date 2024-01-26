const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    calcularNotaFinal(
        parseFloat(formData.get('alunoPresenteIndex')),
        parseFloat(formData.get('provaPaulistaIndex')),
        parseFloat(formData.get('redacaoPaulistaIndex')),
        parseFloat(formData.get('tarefaSPIndex')),
        parseFloat(formData.get('aluraIndex')),
        parseFloat(formData.get('matematicaGameficadaIndex')),
        parseFloat(formData.get('vulnerabilidadeIndex')));
});

const calcularNotaFinal = (alunoPresenteIndex, provaPaulistaIndex, redacaoPaulistaIndex, tarefaSPIndex, aluraIndex, matematicaGameficadaIndex, vulnerabilidadeIndex) => {
    let notaAlunoPresente = calcularNotaAlunoPresente(alunoPresenteIndex);
    let notaProvaPaulista = calcularNotaProvaPaulista(provaPaulistaIndex);
    let notaRedacaoPaulista = calcularNotaRedacaoPaulista(redacaoPaulistaIndex);
    let notaTarefaSP = calcularNotaTarefaSP(tarefaSPIndex);
    let notaAlura = calcularNotaAlura(aluraIndex);
    let notaMatematicaGameficada = calcularNotaMatematicaGameficada(matematicaGameficadaIndex);
    let notaVulnerabilidade = calcularNotaVulnerabilidade(vulnerabilidadeIndex);

    let notaFinal = notaAlunoPresente + notaProvaPaulista + notaRedacaoPaulista + notaTarefaSP + notaAlura + notaMatematicaGameficada + notaVulnerabilidade;

    let divResultado = document.querySelector('#resultado');
    divResultado.innerHTML = `<strong>Nota Final: ${notaFinal.toFixed(2)}</strong><br>
    Aluno Presente: ${notaAlunoPresente.toFixed(2)} (Nota Máxima: 3)<br>
    Prova Paulista: ${notaProvaPaulista.toFixed(2)} (Nota Máxima: 1)<br>
    Redação Paulista: ${notaRedacaoPaulista.toFixed(2)} (Nota Máxima: 1.5)<br>
    Tarefa SP: ${notaTarefaSP.toFixed(2)} (Nota Máxima: 2)<br>
    Alura: ${notaAlura.toFixed(2)} (Nota Máxima: 1)<br>
    Matemática Gameficada: ${notaMatematicaGameficada.toFixed(2)} (Nota Máxima: 0.75)<br>
    Vulnerabilidade: ${notaVulnerabilidade.toFixed(2)} (Nota Máxima: 1)<br>`;
};

const calcularNotaAlunoPresente = (alunoPresenteIndex) => {
    /* Se o índice for maior que 0 e menor que 0.7, a nota será 0.
    Se o índice estiver entre 0.7 e menor que 0.85, o índice será multiplicado por 1.5
    Se o índice for maior ou igual a 0.85 e até 1, o índice será multiplicado por 3.*/
    console.log(alunoPresenteIndex
        * !(alunoPresenteIndex > 0 && alunoPresenteIndex < 0.7)
        * (1.5 + 1.5 * (alunoPresenteIndex >= 0.85 && alunoPresenteIndex <= 1)))
    return alunoPresenteIndex
        * !(alunoPresenteIndex > 0 && alunoPresenteIndex < 0.7)
        * (1.5 + 1.5 * (alunoPresenteIndex >= 0.85 && alunoPresenteIndex <= 1))
};

const calcularNotaProvaPaulista = (provaPaulistaIndex) => {
    //Mantém-se o valor do índice de participação, pois é peso 1.
    return provaPaulistaIndex;
};

const calcularNotaRedacaoPaulista = (redacaoPaulistaIndex) => {
    /*Se o índice for maior que 1, ele é considerado como 1.
    Se for menor ou igual a 1, mantém-se o valor do índice.
    O valor obtido é multiplicado por 1.5.*/
    return Math.min(redacaoPaulistaIndex, 1) * 1.5;
};

const calcularNotaTarefaSP = (tarefaSPIndex) => {
    /*Se o índice for maior que 10, ele é considerado como 10.
    Se for menor ou igual a 10, mantém-se o valor do índice.
    O valor obtido é dividido por 10 e depois multiplicado por 2.*/
    return Math.min(tarefaSPIndex, 10) / 10 * 2;
};

const calcularNotaAlura = (aluraIndex) => {
    /*Se o índice for maior que 1, ele é considerado como 1.
    Se for menor ou igual a 1, mantém-se o valor do índice.*/
    return Math.min(aluraIndex, 1);
};

const calcularNotaMatematicaGameficada = (matematicaGameficadaIndex) => {
    //Este índice é multiplicado pelo peso de 1.5.
    return matematicaGameficadaIndex * 1.5 / 2; // A divisão por 2 é duvidosa, vide explicação no README.
};

const calcularNotaVulnerabilidade = (vulnerabilidadeIndex) => {
    //Mantém-se o valor do índice, pois é peso 1.
    return vulnerabilidadeIndex;
};
