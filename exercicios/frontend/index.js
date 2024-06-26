
const manager = [
    {
        id: "a006",
        mod: "M1",
        loteria: "006",
        titulo: "VARIAVEIS",
        content: ["id", "loteria", "titulo", "content", "taskList"],
        tasksList : [
             {
                id: "a006-fxX",
                title: "fixacao",
                quantidade: 3,
                status: 1,
                prefixo: "fx",
                alias:"POKEMON",
                descricao: ""
            },
            {
                id: "a006-pgX",
                title: "praticas",
                quantidade: 3,
                status: 1,
                prefixo: "pg",
                alias: "FROTA",
                descricao: ""
            },
            {
                id: "a006-chX",
                title: "desafios",
                quantidade: 1,
                status: 1,
                alias: "LABENU",
                descricao: ""
            },
            {
                id: "a006-pgX",
                title: "exercicios",
                quantidade: 3,
                status:0,
                alias: "CONWAY",
                descricao: ""
            }
        ]
    }
    ,
    {
        id: "M1F-P1-X",
        title: "PROJETOS FUNDAMENTOS WEB",
        list: [   
                {
                    id: "M1F-P1-labeFOODs",
                    title: "LABEFOODS",
                    alias: "BACON",
                    responsable: "@BotechiaDev",
                    status: 0,
                    descricao: ""
                }
                ,
                {
                    id: "M1F-P2-labePETs",
                    title: "LABEPETS",
                    alias: "PET",
                    responsable: "@BotechiaDev",
                    status: 0,
                    descricao: ""
                },
                {
                    id: "M1F-P3-labeCOURSES",
                    title: "LABECOURSES",
                    alias: "",
                    responsable: "@BotechiaDev",
                    status: 0,
                    descricao: ""
                },
                {
                    id: "M1F-P4-labeMANAGER",
                    title: "LABEMANAGER",
                    alias: "LOJINHA",
                    responsable: "@BotechiaDev",
                    status: 0,
                    descricao: ""
                }
            ]
    },
    {
        id: "a001",
        title: "AUTHOR",
        nome: "ERIKA BOTECHIA",
        turma: "CONWAY",
        empresa: "LABENU",
        nickname: "CONWAY-ERIKA-BOTECHIA",
        username: "@BOTECHIADEV",
        email: "botechiadev@gmail.com"
        }
]

const relatorio = (tarefas)=>{
    console.log(tarefas)
}

relatorio(manager)