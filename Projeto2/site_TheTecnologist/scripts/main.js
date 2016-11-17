  database = firebase.database();

  logs = this.database.ref('logs');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var, proj_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt,
  projeto: proj_var
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}
