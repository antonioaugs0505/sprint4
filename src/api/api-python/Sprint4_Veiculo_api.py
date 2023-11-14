from flask import Flask, request, jsonify
from flask_cors import CORS
import traceback
import Sprint4_Veiculo_db as bd

app = Flask(__name__)
CORS(app)

@app.route("/veiculo/<int:id>", methods=["GET"])
def get_por_id(id):
    try:
        dado = bd.recupera_por_id(id)
        if dado:
            retorno = {}
            retorno['id'] = dado[0]
            retorno['marca_carro'] = dado[1]
            retorno['modelo_carro'] = dado[2]
            retorno['placa_carro'] = dado[3]
            retorno['ano_carro'] = dado[4]
            retorno['eixos_carro'] = dado[5]
            retorno['comprimento_carro'] = dado[6]
            retorno['altura_carro'] = dado[7]
            retorno['peso_carro'] = dado[8]
            retorno['chassis_carro'] = dado[9]
            return jsonify(retorno), 200
        else:
            return {"msg": "Nenhum veiculo encontrado"}, 404    
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "Erro ao consultar o veiculo"}
        return erro, 406
    

@app.route("/veiculo", methods=["GET"])
def get_all():
    try:
        dados = bd.recupera_todos()
        retorno = []
        for reg in dados:
            veiculo_dic = {}
            veiculo_dic['id'] = reg[0]
            veiculo_dic['marca_carro'] = reg[1]
            veiculo_dic['modelo_carro'] = reg[2]
            veiculo_dic['placa_carro'] = reg[3]
            veiculo_dic['ano_carro'] = reg[4]
            veiculo_dic['eixos_carro'] = reg[5]
            veiculo_dic['comprimento_carro'] = reg[6]
            veiculo_dic['altura_carro'] = reg[7]
            veiculo_dic['peso_carro'] = reg[8]
            veiculo_dic['chassis_carro'] = reg[9]
            retorno.append(veiculo_dic)

        return jsonify(retorno), 200
    
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na consulta"}
        return erro, 406
    
@app.route("/veiculo", methods=["POST"])
def post_veiculo():
    try:
        novo_veiculo = request.get_json()
        bd.inclui(novo_veiculo)
        return {"msg": "Veiculo incluido com sucesso"}, 201
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na inclusão"}
        return erro, 406

@app.route("/veiculo/<int:id>", methods=["PUT"])
def put_veiculo(id):
    try:
        novo_veiculo = request.get_json()
        novo_veiculo['id'] = id
        bd.atualiza(novo_veiculo)
        return {"msg": "Veiculo atualizado com sucesso"}, 201
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na atualização"}
        return erro, 406

@app.route("/veiculo/<int:id>", methods=["DELETE"])
def delete_veiculo(id):
    try:
        bd.apaga_por_id(id)
        return {"msg": "veiculo excluido com sucesso"}, 201
    except Exception as erro:
        traceback.print_exc()
        erro = {"msg": "erro na exclusão"}
        return erro, 406

app.run(debug=True)