import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import LogoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite aqui" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/51097168?v=4"
            alt="Lucas Matheus"
          />
          <div>
            <strong>lucasMathW/project-manager</strong>
            <p>
              Aplicação desenvolvida para avalição de bolsa de estudos do IFAM
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/51097168?v=4"
            alt="Lucas Matheus"
          />
          <div>
            <strong>lucasMathW/project-manager</strong>
            <p>
              Aplicação desenvolvida para avalição de bolsa de estudos do IFAM
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/51097168?v=4"
            alt="Lucas Matheus"
          />
          <div>
            <strong>lucasMathW/project-manager</strong>
            <p>
              Aplicação desenvolvida para avalição de bolsa de estudos do IFAM
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
