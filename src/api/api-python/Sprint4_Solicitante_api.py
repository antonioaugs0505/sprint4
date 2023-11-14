from flask import Flask, request, jsonify
from flask_cors import CORS
import traceback
import Sprint4_Solicitante_db as bd

app = Flask(__name__)
CORS(app)

@app.route("/solicitante/<int:id>", methods=["GET"])
def get_por_id(id):
    try:
        dado = bd.recupera_por_id(id)
        if dado:
            retorno = {}
            retorno['id'] = dado[0]
            retorno['nome'] = dado[1]
            retorno['sobrenome'] = dado[2]
            retorno['email'] = dado[3]
            retorno['telefone'] = dado[4]
            retorno['cpf'] = dado[5]
            retorno['data_nascimento'] = dado[6]
            retorno['cep'] = dado[7]
            retorno['estado'] = dado[8]
            retorno['cidade'] = dado[9]
            retorno['logradouro'] = dado[10]
            retorno['numero'] = dado[11]
            retorno['complemento'] = dado[12]
            retorno['genero'] = dado[13]
            return jsonify(retorno), 200
        else:
            return {"msg": "Nenhum solicitante encontrado"}, 404    
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "Erro ao consultar o solicitante"}
        return erro, 406
    

@app.route("/solicitante", methods=["GET"])
def get_all():
    try:
        dados = bd.recupera_todos()
        retorno = []
        for reg in dados:
            solicitante_dic = {}
            solicitante_dic['id'] = reg[0]
            solicitante_dic['nome'] = reg[1]
            solicitante_dic['sobrenome'] = reg[2]
            solicitante_dic['email'] = reg[3]
            solicitante_dic['telefone'] = reg[4]
            solicitante_dic['cpf'] = reg[5]
            solicitante_dic['data_nascimento'] = reg[6]
            solicitante_dic['cep'] = reg[7]
            solicitante_dic['estado'] = reg[8]
            solicitante_dic['cidade'] = reg[9]
            solicitante_dic['logradouro'] = reg[10]
            solicitante_dic['numero'] = reg[11]
            solicitante_dic['complemento'] = reg[12]
            solicitante_dic['genero'] = reg[13]
            retorno.append(solicitante_dic)

        return jsonify(retorno), 200
    
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na consulta"}
        return erro, 406
    
@app.route("/solicitante", methods=["POST"])
def post_solicitante():
    try:
        novo_solicitante = request.get_json()
        bd.inclui(novo_solicitante)
        return {"msg": "Solicitante incluido com sucesso"}, 201
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na inclusão"}
        return erro, 406

@app.route("/solicitante/<int:id>", methods=["PUT"])
def put_solicitante(id):
    try:
        novo_solicitante = request.get_json()
        novo_solicitante['id'] = id
        bd.atualiza(novo_solicitante)
        return {"msg": "Solicitante atualizado com sucesso"}, 201
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na atualização"}
        return erro, 406

@app.route("/solicitante/<int:id>", methods=["DELETE"])
def delete_solicitante(id):
    try:
        bd.apaga_por_id(id)
        return {"msg": "Solicitante excluido com sucesso"}, 201
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na exclusão"}
        return erro, 406

app.run(debug=True)