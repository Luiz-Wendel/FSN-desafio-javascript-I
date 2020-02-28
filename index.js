// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação

/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
function adicionarAluno(nome){
  let novoAluno = {nome:'',
               notas:[],
               cursos:[],
               faltas:0
              }

  novoAluno.nome = nome

  alunosDaEscola.push(novoAluno)

  console.log(`O aluno ${nome} foi cadastrado com sucesso!`)
}

/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
function listarAlunos(){
  alunosDaEscola.forEach(aluno => {
    console.log(`###############\nNome: ${aluno.nome}\nNotas: ${aluno.notas}\nCursos: ${JSON.stringify(aluno.cursos)}\nFaltas: ${aluno.faltas}`)
  })
}

/* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno.
Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar.
E deverá devolver um aluno em seu retorno. */
function buscarAluno(nome){
  let resultado = alunosDaEscola.filter(aluno => aluno.nome.includes(nome))

  if (resultado.length == 0)
    console.log(`Nenhum aluno com o parâmetro '${nome}' foi encontrado!`)
  else
    console.log(resultado.length == 1 ? `Foi encontado ${resultado.length} aluno com o parâmetro '${nome}'` : `Foram encontados ${resultado.length} alunos com o parâmetro '${nome}'`)
    
  return resultado
}

/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema,
e deverá armazenar a data atual no momento da matricula.
Lembre-se de exibir o feedback para o usuário. */
function matricularAluno(aluno, curso){
  let novoCurso = {nomeDoCurso: curso,
                   dataMatricula: new Date}

  let alunoEncontrado = false
  
  alunosDaEscola.forEach(alunoCadastrado => {
    if (alunoCadastrado.nome == aluno.nome) {
      alunoCadastrado.cursos.push(novoCurso)
      console.log(`O aluno '${aluno.nome}' foi matriculado no curso '${curso}'`)
      alunoEncontrado = true
    }
  })

  if (!alunoEncontrado)
    console.log(`O aluno '${aluno.nome}' não está cadastrado no sistema`)
}

/* Ao receber um aluno devidamente cadastrado em nossa lista.
Você deverá incrementar uma falta ao aluno.
Você deverá dar um feedback ao concluir a tarefa.
Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.*/
function aplicarFalta(aluno){
  if (aluno.cursos.length > 0) {
    aluno.faltas++
    console.log(`Falta registrada para o aluno '${aluno.nome}`)
  }
  else
    console.log(`O aluno '${aluno.nome}' não possui cursos matriculados`)
}

function aplicarNota(aluno/*:object*/){
/*
    Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
*/
}

function aprovarAluno(aluno/*:object*/){
/* 
Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
*/
}