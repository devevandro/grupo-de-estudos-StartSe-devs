# **React - Guia definitivo de performance (useMemo, useCallback, memo) - Code/drops #82**

# Algoritmo de reconciliação:
- É a parte responsável por renderizar o componente, ou seja é o processo de montar o HTML em tela e
  comparar o HTML atual com o anterior caso seja atualização deste componente. O algoritmo só entra em 
  prática caso haja alguma atualização.

# UseMemo:
- Compara se uma ou mais informações foram alteradas para aí sim entrar em ação.

- Quando utilizar o UseMemo:
1. Evitar care-cálculos complexos;
2. Resolver a comparção raza do React;
3. Resolver problemas de igualdade referencial;

# UseCalback:
- Permiti memorizar uma função dentro de uma posição na memória para que quando o componente renderizar não é
  preciso recriar a função.

- Quando utilizar o UseCalback:
1. Resolver problemas de igualdade referencial;

# memo:
- É uma função que ao ser importada dentro do react que antes de entrar no fluxo de renderização
  ele faz uma comparação das propriedades e estados do componente e caso nenhuma informação não, 
  tenha sofrido nenhma alteração ele nem entra neste componente.

- Quando utilizar o memo:
1. Pure Functional Components (quando o retorno dos valores sempre for o mesmo valor);
2. Renders to oftem (quando o componente é renderizado várias vezes);
3. Re-renders with same props (quando um componente renderiza muitas vezes e sempre com as mesmas propriedades);
4. Medium to big sizes (apenas para componentes com muitas funcionalidades);

# Shallow Compare -> Comparação rasa
- Comparação simples entre as mudanças de redenrização das propriedades dentro do componente.
