import oracledb
import traceback

def recupera_por_id(id: int):
    sql = '''select id, nome, sobrenome, email, telefone, cpf, data_nascimento, cep, estado, cidade, logradouro, numero, complemento, genero from solicitante where id = :id'''
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
    sql = '''delete from solicitante where id = :id'''

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

def inclui(solicitante: dict):
    sql = '''insert into solicitante (id, nome, sobrenome, email, telefone, cpf, data_nascimento, cep, estado, cidade, logradouro, numero, complemento, genero) values (:id, :nome, :sobrenome, :email, :telefone, :cpf, TO_DATE(:data_nascimento, 'YYYY-MM-DD') , :cep, :estado, :cidade, :logradouro, :numero, :complemento, :genero)'''

    try:
        with oracledb.connect(
            user="rm99491", password='100205',
            dsn="oracle.fiap.com.br/orcl"                     
        ) as conexao:

            with conexao.cursor() as cur:
                cur.execute(sql, solicitante)
                conexao.commit()
            
    except Exception as erro:
        #print(erro)
        traceback.print_exc()
        raise erro

def atualiza(solicitante: dict):
    sql = '''update solicitante set id = :id, nome = :nome, sobrenome = :sobrenome, email = :email, telefone = :telefone, cpf = :cpf, data_nascimento = :data_nascimento, cep = :cep, estado = :estado, cidade = :cidade, logradouro = :logradouro, numero = :numero, complemento = :complemento, genero = :genero where id = :id'''

    try:
        with oracledb.connect(
            user="rm99491", password='100205',
            dsn="oracle.fiap.com.br/orcl"                     
        ) as conexao:

            with conexao.cursor() as cur:
                cur.execute(sql, solicitante)
                conexao.commit()
            
    except Exception as erro:
        #print(erro)
        traceback.print_exc()
        raise erro

def recupera_todos():
    sql = "select id, nome, sobrenome, email, telefone, cpf, data_nascimento, cep, estado, cidade, logradouro, numero, complemento, genero from solicitante"
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