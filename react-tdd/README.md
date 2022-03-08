## Seção 01 ##

# Configurando o Git:
- git config --local (altera somente as configurações de um projeto em uso);
- git config --global (altera as configurações de qualquer projeto do usuario git logado);
- git config --system (altera as configurações de qualquer projeto e qualquer usuário);

# Como configurar:
1. git config --global --edit;
2. git config --global core.editor code;
3. git config --global --edit;

# Configurando as dependências:
1. npm i -D git-commit-msg-linter (essa biblioteca não permite fazer commits fora do padrão);
2. npm i -D typescript @types/node;
3. npm i -D eslint eslint-config-standard-with-typescript@11 eslint-plugin-import eslint-plugin-promise eslint-plugin-standard @typescript-eslint/eslint-plugin eslint-plugin-node;
4. npm i -D lint-staged husky;
5. npm i -D jest @types/jest ts-jest;

# Clean Architecture:
1. Domain: responsável pela regra de negócio (interfaces);
2. Data: implementações dos casos de uso  (classes);
3. Infra: responsável por armazenar os frameworks externos (axios);
4. Presentation: responsável por pegar os dados que vem da API e converte-los no formato que a tela precisa;
5. Validation: responsável pelas validações do projeto;
6. Main: responsável por ter classes que geram outras instâncias de classes;
