import oracledb
import traceback

def recupera_por_id(id: int):
    sql = '''select id, marca_carro, modelo_carro, placa_carro, ano_carro, eixos_carro, comprimento_carro, altura_carro, peso_carro, chassis_carro from veiculo where id = :id'''
    try:
        with oracledb.connect(
            user="rm99491", password='100205',
            dsn="oracle.fiap.com.br/orcl"                     
        ) as conexao:

            with conexao.cursor() as cur:
                param = {"id": id}
                cur.execute(sql, param)
                return cur.fetchone()
                            
    except Exception as erro:
        #print(erro)
        traceback.print_exc()
        raise erro



def apaga_por_id(id: int):
    sql = '''delete from veiculo where id = :id'''

    try:
        with oracledb.connect(
            user="rm99491", password='100205',
            dsn="oracle.fiap.com.br/orcl"                     
        ) as conexao:

            with conexao.cursor() as cur:
                param = {"id": id}
                cur.execute(sql, param)
                conexao.commit()
            
    except Exception as erro:
        #print(erro)
        traceback.print_exc()
        raise erro

def inclui(veiculo: dict):
    sql = '''insert into veiculo (id, marca_carro, modelo_carro, placa_carro, ano_carro, eixos_carro, comprimento_carro, altura_carro, peso_carro, chassis_carro) values (:id, :marca_carro, :modelo_carro, :placa_carro, :ano_carro, :eixos_carro, :comprimento_carro, :altura_carro, :peso_carro, :chassis_carro)'''

    try:
        with oracledb.connect(
            user="rm99491", password='100205',
            dsn="oracle.fiap.com.br/orcl"                     
        ) as conexao:

            with conexao.cursor() as cur:
                cur.execute(sql, veiculo)
                conexao.commit()
            
    except Exception as erro:
        #print(erro)
        traceback.print_exc()
        raise erro

def atualiza(veiculo: dict):
    sql = '''update veiculo set id = :id, marca_carro = :marca_carro, modelo_carro = :modelo_carro, placa_carro = :placa_carro, ano_carro = :ano_carro, eixos_carro = :eixos_carro, comprimento_carro, altura_carro = :altura_carro, peso_carro = :peso_carro, chassis_carro = :chassis_carro where id = :id'''

    try:
        with oracledb.connect(
            user="rm99491", password='100205',
            dsn="oracle.fiap.com.br/orcl"                     
        ) as conexao:

            with conexao.cursor() as cur:
                cur.execute(sql, veiculo)
                conexao.commit()
            
    except Exception as erro:
        #print(erro)
        traceback.print_exc()
        raise erro

def recupera_todos():
    sql = "select id, marca_carro, modelo_carro, placa_carro, ano_carro, eixos_carro, comprimento_carro, altura_carro, peso_carro, chassis_carro from veiculo"
    try:
        with oracledb.connect(
            user="rm99491", password='100205',
            dsn="oracle.fiap.com.br/orcl"                     
        ) as conexao:

            with conexao.cursor() as cur:
                cur.execute(sql)
                dados = cur.fetchall()
                return dados
            
    except Exception as erro:
        #print(erro)
        traceback.print_exc()
        raise erro

if __name__ == '__main__':
    registros = recupera_todos()
    for reg in registros:
        print(reg)