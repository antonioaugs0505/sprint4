"use client";
import styles from "../../styles/Solicitacao.module.css";
import Link from "next/link";

export default function Solicitacao() {
  return (
    <main className={styles.dados}>
      <div className={styles.form}>
        <form action="#">
          <div className={styles.formHeader}>
            <div className={styles.header}>
              <h1>Dados pessoais</h1>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="sobrenome">Sobreome</label>
              <input
                type="text"
                required
                name="sobrenome"
                id="sobrenome"
                placeholder="Digite seu sobrenome"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="tel">Telefone</label>
              <input
                type="tel"
                name="tel"
                required
                id="tel"
                placeholder="Digite seu telefone"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="data">Data de nascimento</label>
              <input type="date" name="data" id="data" required />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="number"
                name="cpf"
                id="cpf"
                placeholder="Ex: 44422288860"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="cep">CEP</label>
              <input
                type="number"
                name="cep"
                id="cep"
                placeholder="Digite seu CEP"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="estado">Estado</label>
              <input
                id="estado"
                type="text"
                name="estado"
                placeholder="Digite seu estado"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                type="text"
                name="cidade"
                placeholder="Digite sua cidade"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="end">Endereço</label>
              <input
                id="end"
                type="text"
                name="end"
                placeholder="Digite seu endereço"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="numero">Número</label>
              <input
                id="numero"
                type="text"
                name="numero"
                placeholder="Digite seu número"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="numero">Complemento</label>
              <input
                id="complemento"
                type="text"
                name="complemento"
                placeholder="Digite seu completemnto"
                required
              />
            </div>
          </div>

          <div className={styles.genderInputs}>
            <div className={styles.genderTitle}>
              <h6>Gênero</h6>
            </div>

            <div className={styles.genderGroup}>
              <div className={styles.genderInput}>
                <input type="radio" name="female" id="female" />
                <label htmlFor="female">Feminino</label>
              </div>

              <div className={styles.genderInput}>
                <input type="radio" name="male" id="male" />
                <label htmlFor="male">Masculino</label>
              </div>

              <div className={styles.genderInput}>
                <input type="radio" name="other" id="other" />
                <label htmlFor="other">Outro</label>
              </div>

              <div className={styles.genderInput}>
                <input type="radio" name="none" id="none" />
                <label htmlFor="none">Prefiro não dizer</label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.form}>
        <form action="#">
          <div className={styles.formHeader}>
            <div className={styles.header}>
              <h1>Dados do veículo</h1>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label htmlFor="carro">Veículo</label>
              <input
                type="text"
                name="veiculo"
                id="veiculo"
                placeholder="Digite seu veículo"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="placa">Placa</label>
              <input
                type="text"
                required
                name="placa"
                id="placa"
                placeholder="Digite sua placa"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="anoFab">Ano de fabricação</label>
              <input
                type="number"
                required
                name="anoFab"
                id="anoFab"
                placeholder="Digite o ano de fabricação"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="eixos">Eixos</label>
              <input
                type="number"
                name="eixos"
                required
                id="eixos"
                placeholder="Digite a quantidade de eixos"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="comp">Comprimento</label>
              <input
                type="number"
                name="comp"
                id="comp"
                required
                placeholder="Ex: 120"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="altura">Altura</label>
              <input
                type="number"
                name="altura"
                id="altura"
                placeholder="Ex: 80"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="peso">Peso</label>
              <input
                type="number"
                name="peso"
                id="peso"
                placeholder="Digite o peso"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="chassi">Chassi</label>
              <input
                id="chassi"
                type="chassi"
                name="chassi"
                placeholder="Digite a quantidade de chassis"
                required
              />
            </div>
          </div>
        </form>
      </div>

      <div className={styles.form}>
        <form action="#">
          <div className={styles.formHeader}>
            <div className={styles.header}>
              <h1>Dados do acidente</h1>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.inputBox}>
              <label htmlFor="horario">Horário</label>
              <input
                type="text"
                name="horario"
                id="horario"
                placeholder="Ex: 23:20"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="estadoP">Estado</label>
              <input
                type="text"
                required
                name="estadoP"
                id="estadoP"
                placeholder="Digite seu estado"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="cidadeP">Cidade</label>
              <input
                type="text"
                required
                name="cidadeP"
                id="cidadeP"
                placeholder="Digite sua cidade"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="enderecoP">Endereço</label>
              <input
                type="text"
                name="enderecoP"
                required
                id="enderecoP"
                placeholder="Digite seu endereço"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="numeroP">Número</label>
              <input
                type="number"
                name="numeroP"
                id="numeroP"
                required
                placeholder="Digite seu número"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="complementoP">Complemento</label>
              <input
                type="text"
                name="complementoP"
                id="complementoP"
                placeholder="Digite o complemento"
              />
            </div>

            <div className={styles.genderInputs}>
              <div className={styles.genderTitle}>
                <h6>Tipo de problema</h6>
              </div>

              <div className={styles.genderGroup}>
                <div className={styles.genderInput}>
                  <input id="pneu" type="radio" name="pneu" />
                  <label htmlFor="pneu">Pneu furado</label>
                </div>

                <div className={styles.genderInput}>
                  <input id="bateria" type="radio" name="bateria" />
                  <label htmlFor="bateria">Problema na bateria</label>
                </div>

                <div className={styles.genderInput}>
                  <input id="motor" type="radio" name="motor" />
                  <label htmlFor="motor">Motor fundido</label>
                </div>

                <div className={styles.genderInput}>
                  <input id="direcao" type="radio" name="direcao" />
                  <label htmlFor="direcao">Problemas na direção</label>
                </div>

                <div className={styles.genderInput}>
                  <input id="outro" type="radio" name="outro" />
                  <label htmlFor="outro">Outro</label>
                </div>
              </div>
            </div>

            <div className={styles.inputArea}>
              <label htmlFor="outroBox">Outro</label>
              <input
                id="outroBox"
                type="textarea"
                name="outroBox"
                placeholder="Digite seu problema"
                required
              />
            </div>
          </div>
        </form>

        <div className={styles.btnContinuar}>
          <Link href="/solicitar-guincho/confirmacao">
            <button>Continuar</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
