/* Administrativo */


const financeiroAlunoRequest = `
    <section id="requestFinanceiroAluno">
        <header>
            <h2>Financeiro</h2>
        </header>
        <form>
            <div>
                <label for="curso">Curso</label>
                <input id="curso" name="curso"/>
            </div>
            <div>
                <label for="nroParcelas">Numero de Parcelas</label>
                <input id="nroParcelas" name="nroParcelas" type="number"/>
            </div>
            <button type="submit">Ver Valor</button>
        </form>
    </section>
`

const financeiroAlunoResponse = `
    <section id="responseFinanceiroAluno">
        <header>
            <h2>Valor</h2>
        </header>
        <div>
            <ul>
                <li>Disconto</li>
                <li>Nro Parcelas</li>
                <li>Valor Parcela</li>
            </ul>
        </div>
    </section>

`


const requestRelatorioAluno = `
    <section id="requestRelatorioAluno">
        <form>
            <div>
                <label for="aluno">Nome</label>
                <input type="text" id="aluno" name="aluno"/>
            </div>
            <button type="submit">Buscar</button>
        </form>
    </section>
`


const responseRelatorioAluno =`
    <section id="responseRelatorioAluno">
        <header>
            <h2>Resultado</h2>
        </header>
        <ul>
            <li>Aluno</li>
            <li>Turma</li>
            <li>Curso</li>
            <li>Valor Total:</li>
            <li>Valor Parcela:</li>
            <li>Nro de Parcelas:</li>
            <li>Total de Parcelas Pagas:</li>
        </ul>
    </section>
`


const requestMatriculas =`
    <section id="requestMatriculas">
        <h2>Mátriculas</h2>
        <form>
            <div>
                <label for="aluno">Nome</label>
                <input type="text" id="aluno" name="aluno" />
            </div>
            <div>
                <label for="curso">Curso</label>
                <input type="text" id="curso" name="curso" />
            </div>
            <div>
                <label for="turma">Turma</label>
                <input type="text" id="turma" name="turma" />
            </div>
            <div>
                <label for="nroParcelas">Número de Parcelas</label>
                <input type="text" id="nroParcelas" name="nroParcelas" />
            </div>
        </form>
    </section>

`

const responseMatriculas = `

    <section id="responseMatriculas">
    
        <h3>Aluno Matriculado</h3>
        <ul>
            <li>Nome</li>
            <li>Período</li>
            <li>NroTurma</li>
        </ul>
    </section>

`


const requestTurmas = `
    <span id="requestTurmas">
        <input src="digite o número da turma"/>
        <input placeholder="buscar"/>
    </span>

`

const responseTurmas = `



`

const umaTurma = `

    <li>
        <h3>Turma Nome</h3>
        <ul>
            <li>Curso</li>
            <li>Ínicio</li>
            <li>Término</li>
            <li>Nro de Alunos</li>
            <li>Período</li>
            <li>Concluído</li>
        </ul>
    </li>

`