# Estrutura editorial para posts do Viana Archives

Este documento serve como guia para manter os artigos do blog organizados, consistentes e fáceis de ler. A ideia não é prender todos os posts em um formato rígido, mas criar uma base para escrever conteúdos técnicos, tutoriais, anotações de estudo, carreira e opiniões de forma clara.

---

## Objetivo da estrutura

Cada post deve ajudar o leitor a entender rapidamente:

- qual problema será tratado;
- por que aquele assunto importa;
- quais conceitos ou passos serão apresentados;
- qual resultado o leitor deve alcançar;
- quais referências foram usadas como base.

O estilo do blog pode seguir uma linha de **arquivo técnico pessoal**: direto, organizado, prático e com explicações baseadas em experiências reais de estudo, desenvolvimento e carreira.

---

# Estrutura padrão de um post

## 1. Título

O título deve deixar claro o assunto principal e, quando possível, o benefício do artigo.

### Bons exemplos

```txt
Configurando o Windows para desenvolver com React Native
```

```txt
Entendendo useEffect na prática
```

```txt
Como organizar componentes em um projeto React
```

### Evitar títulos muito genéricos

```txt
React Native
```

```txt
useEffect
```

```txt
Componentes
```

### Melhor alternativa

```txt
Como configurar o ambiente React Native no Windows
```

```txt
O que é useEffect e quando usar no React
```

```txt
Como organizar componentes em aplicações React
```

---

## 2. Subtítulo

O subtítulo complementa o título e explica o que o leitor vai aprender.

Exemplo:

```txt
Aprenda a preparar sua máquina Windows para criar, rodar e debugar aplicações React Native.
```

Outro exemplo:

```txt
Uma explicação prática sobre como o useEffect funciona e quais cuidados tomar ao utilizá-lo.
```

O subtítulo deve ser curto, objetivo e conectado com a promessa do título.

---

## 3. Introdução

A introdução deve apresentar o assunto sem enrolação.

Ela precisa responder:

- qual problema este artigo resolve?
- para quem esse conteúdo é útil?
- o que a pessoa vai aprender até o final?

### Modelo

```txt
Configurar o ambiente de desenvolvimento para React Native no Windows pode gerar algumas dúvidas, principalmente por envolver Node.js, Java, Android Studio, SDKs e variáveis de ambiente.

Neste artigo, vou mostrar um passo a passo direto para preparar sua máquina e evitar os erros mais comuns durante a configuração.

Ao final, você terá um ambiente pronto para criar e executar seu primeiro projeto React Native no Android.
```

### Dica

A introdução não precisa ser longa. De 2 a 4 parágrafos curtos costuma ser suficiente.

---

## 4. Contexto

Depois da introdução, use uma seção para explicar o cenário antes de entrar no desenvolvimento principal.

Essa parte ajuda o leitor a entender o motivo de cada etapa, ferramenta ou decisão técnica.

### Exemplo

```txt
Antes de instalar qualquer ferramenta, é importante entender que o React Native depende de algumas partes trabalhando juntas.

O Node.js é responsável por executar o ecossistema JavaScript. O Java JDK é necessário para o build Android. Já o Android Studio fornece o emulador, o SDK e outras ferramentas usadas para compilar e rodar o aplicativo.
```

### Quando usar

Use contexto principalmente em posts sobre:

- tutoriais;
- conceitos técnicos;
- comparações;
- decisões de arquitetura;
- carreira;
- estudos pessoais.

---

## 5. Requisitos

Em posts práticos, liste o que o leitor precisa antes de começar.

### Exemplo

```txt
Antes de começar, você vai precisar de:

- Windows 10 ou superior
- Node.js instalado
- Java JDK
- Android Studio
- Terminal de sua preferência
- Noções básicas de JavaScript
```

Essa seção evita que o leitor descubra no meio do artigo que está faltando alguma ferramenta ou conhecimento prévio.

---

## 6. Desenvolvimento principal

O desenvolvimento é o corpo do artigo. Nele ficam as explicações, etapas, exemplos, comandos, imagens e observações.

A regra principal é: **cada heading deve representar uma etapa, uma ideia ou um conceito específico**.

### Exemplo de organização

```txt
## Instalando o Node.js

Texto explicando o que é, por que precisa e como instalar.

## Instalando o Java JDK

Texto explicando a função do JDK no ambiente React Native.

## Configurando o Android Studio

Texto explicando SDK, emulador e ferramentas necessárias.

## Configurando variáveis de ambiente

Texto explicando JAVA_HOME, ANDROID_HOME e PATH.

## Criando o primeiro projeto

Texto mostrando como testar se tudo funcionou.
```

### Evite headings genéricos

```txt
## Parte 1
## Parte 2
## Outras coisas
```

### Prefira headings claros

```txt
## Instalando as dependências
## Configurando o ambiente
## Testando o projeto
## Resolvendo erros comuns
```

---

# Organização do sumário por headings

A área “Neste artigo” deve refletir os principais headings do conteúdo.

Para isso, organize o texto com uma hierarquia clara:

```txt
## Introdução
## Contexto
## Requisitos
## Instalando as dependências
### Instalando o Node.js
### Instalando o Java JDK
## Configurando o Android Studio
## Problemas comuns
## Conclusão
## Referências
```

## Regras para headings

### H2

Use para seções principais do artigo.

Exemplos:

```txt
## Introdução
## Requisitos
## Configurando o ambiente
## Problemas comuns
## Conclusão
```

### H3

Use para subtópicos dentro de uma seção principal.

Exemplo:

```txt
## Configurando o ambiente

### Instalando o Node.js
### Instalando o Java JDK
### Configurando o Android SDK
```

### H4

Use somente quando precisar detalhar um ponto dentro de um H3.

Exemplo:

```txt
### Configurando variáveis de ambiente

#### JAVA_HOME
#### ANDROID_HOME
#### PATH
```

Não exagere no uso de H4 para não deixar o sumário poluído.

---

# Como escrever blocos de código em tutoriais

Quando o post tiver código, comandos ou exemplos técnicos, evite jogar o bloco de código direto na tela.

O melhor padrão é:

```txt
Explica antes → mostra o código → explica depois
```

## Exemplo

````md
Para verificar se o Node.js foi instalado corretamente, execute o comando abaixo no terminal:

```bash
node -v
```

Se tudo estiver certo, o terminal deve retornar a versão instalada do Node.js.
````

## Outro exemplo

````md
Depois de instalar as dependências, execute o comando abaixo para verificar se o ambiente React Native está configurado corretamente:

```bash
npx react-native doctor
```

Esse comando analisa o ambiente e mostra quais dependências estão funcionando e quais ainda precisam de ajuste.
````

## Antes do código, explique

- onde o comando deve ser executado;
- para que ele serve;
- qual problema ele resolve;
- se existe algum cuidado antes de rodar.

## Depois do código, explique

- o que o comando fez;
- qual resultado esperado;
- o que fazer se der erro;
- como interpretar a saída.

---

# Dicas, alertas e observações

Durante o artigo, use pequenas observações para destacar pontos importantes.

## Exemplos

```txt
Atenção: depois de alterar variáveis de ambiente no Windows, feche e abra o terminal novamente para garantir que as mudanças sejam aplicadas.
```

```txt
Dica: se você usa Windows, prefira instalar as ferramentas em caminhos sem espaços ou caracteres especiais.
```

```txt
Observação: este comportamento pode mudar dependendo da versão da biblioteca utilizada.
```

Essas notas deixam o conteúdo mais prático e ajudam o leitor a evitar erros comuns.

---

# Problemas comuns

Essa seção é muito útil em posts de tutorial, configuração, ambiente, ferramentas e desenvolvimento.

Ela pode reunir erros frequentes, dúvidas ou situações que costumam acontecer durante o processo.

## Exemplo

```txt
## Problemas comuns

### O comando não reconhece o adb

Esse erro geralmente acontece quando o caminho do Android SDK não foi adicionado corretamente nas variáveis de ambiente.

### O emulador não aparece

Verifique se o Android Studio instalou corretamente o Android SDK e se existe algum dispositivo virtual criado.

### O projeto não compila

Confira se a versão do Java instalada é compatível com a versão do React Native usada no projeto.
```

Essa parte aumenta o valor do artigo, porque muitas pessoas pesquisam exatamente por erros e dúvidas específicas.

---

# Recapitulando

Antes da conclusão, você pode incluir uma seção curta resumindo o que foi feito ou aprendido.

## Exemplo

```txt
Neste artigo, você configurou as principais ferramentas necessárias para desenvolver com React Native no Windows:

- instalou o Node.js;
- configurou o Java JDK;
- instalou o Android Studio;
- ajustou as variáveis de ambiente;
- criou e executou um projeto React Native.
```

Essa seção ajuda o leitor a fixar o conteúdo e reforça o valor do artigo.

---

# Conclusão

A conclusão deve fechar o artigo e indicar o próximo passo.

## Exemplo

```txt
Configurar o ambiente React Native no Windows pode parecer trabalhoso no começo, mas depois que cada ferramenta está no lugar certo, o fluxo de desenvolvimento fica muito mais simples.

Agora que o ambiente está pronto, o próximo passo é criar um projeto, entender a estrutura de pastas e começar a desenvolver as primeiras telas do aplicativo.
```

## Evite conclusões muito genéricas

```txt
É isso, espero que tenha gostado.
```

## Prefira uma conclusão que reforce

- o que foi aprendido;
- por que aquilo importa;
- qual próximo passo o leitor pode seguir.

---

# Referências

No final do artigo, liste as fontes usadas como apoio.

Essa área pode conter:

- documentações oficiais;
- artigos;
- vídeos;
- repositórios;
- ferramentas;
- issues;
- discussões técnicas;
- materiais de estudo.

## Exemplo

```txt
## Referências

### Documentações

- React Native: Environment Setup
- Android Studio
- Node.js

### Artigos

- Nome do artigo usado como apoio

### Vídeos

- Nome do vídeo ou canal

### Ferramentas

- React Native Doctor
- Android Studio
```

Referências deixam o conteúdo mais confiável e ajudam o leitor a se aprofundar.

---

# Modelo base completo

Use este esqueleto como ponto de partida para a maioria dos posts:

```txt
# Título do artigo

Subtítulo explicando o que o leitor vai aprender.

## Introdução

Apresente o problema.
Explique para quem é o artigo.
Diga o que será aprendido.

## Contexto

Explique o cenário antes de entrar no passo a passo.
Mostre por que esse assunto importa.

## Requisitos

Liste conhecimentos, ferramentas ou dependências necessárias.

## Desenvolvimento

Divida o conteúdo em seções claras.

### Primeira etapa ou primeiro conceito

Explique a ideia.
Mostre exemplo.
Explique o exemplo.

### Segunda etapa ou segundo conceito

Explique a ideia.
Mostre exemplo.
Explique o exemplo.

### Terceira etapa ou terceiro conceito

Explique a ideia.
Mostre exemplo.
Explique o exemplo.

## Problemas comuns

Liste erros, dúvidas ou situações frequentes.

## Recapitulando

Resumo do que foi aprendido ou construído.

## Conclusão

Feche o artigo.
Mostre o próximo passo.

## Referências

Documentações, artigos, vídeos, ferramentas e repositórios usados.
```

---

# Estruturas por tipo de post

Nem todo artigo precisa seguir exatamente o mesmo formato. Abaixo estão modelos para diferentes tipos de conteúdo.

---

## 1. Post tutorial

Use quando o objetivo for ensinar como fazer algo passo a passo.

### Estrutura

```txt
Introdução
Contexto
Requisitos
Passo a passo
Testando o resultado
Problemas comuns
Recapitulando
Conclusão
Referências
```

### Exemplos de posts

```txt
Como configurar o Windows para React Native
```

```txt
Como criar uma API com NestJS
```

```txt
Como configurar Tailwind CSS em um projeto React
```

---

## 2. Post conceitual

Use quando o objetivo for explicar um conceito.

### Estrutura

```txt
Introdução
O que é
Por que isso importa
Como funciona
Exemplo prático
Quando usar
Cuidados
Conclusão
Referências
```

### Exemplos de posts

```txt
O que é useEffect no React?
```

```txt
O que é renderização no lado do servidor?
```

```txt
O que são filas e mensageria no backend?
```

---

## 3. Post de carreira

Use para conteúdos sobre evolução profissional, rotina, estudos e mercado.

### Estrutura

```txt
Introdução
Contexto pessoal ou do mercado
Problema principal
Reflexão/desenvolvimento
Exemplos práticos
Lições aprendidas
Conclusão
Referências ou recomendações
```

### Exemplos de posts

```txt
Como sair do nível júnior para pleno no front-end
```

```txt
O que eu aprendi trabalhando com e-commerce
```

```txt
Como organizar uma rotina de estudos em programação
```

---

## 4. Post de opinião técnica

Use para discutir escolhas, comparações ou decisões técnicas.

### Estrutura

```txt
Introdução
Contexto
Problema analisado
Opção A
Opção B
Comparação
Minha visão
Conclusão
Referências
```

### Exemplos de posts

```txt
Quando usar Zustand em vez de Context API?
```

```txt
React Query ainda faz sentido em projetos pequenos?
```

```txt
Vale a pena usar monorepo em projetos front-end?
```

---

## 5. Post de estudo ou anotação

Use para registrar o que você está estudando ou aprendendo.

### Estrutura

```txt
Introdução
O que estou estudando
Resumo do conceito
Exemplo simples
O que entendi até agora
Dúvidas ou pontos de atenção
Referências
```

### Exemplos de posts

```txt
Minhas anotações sobre TanStack Router
```

```txt
Estudando Docker para projetos Node.js
```

```txt
Anotações sobre autenticação com JWT
```

---

# Padrão de escrita recomendado

O tom do Viana Archives pode seguir uma escrita direta, pessoal e técnica.

## Padrão geral

```txt
1. Explico o problema
2. Dou contexto
3. Mostro o caminho
4. Aponto erros comuns
5. Fecho com resumo e referências
```

## Boas práticas de escrita

- Prefira frases claras e diretas.
- Evite parágrafos muito longos.
- Use headings para dividir bem o conteúdo.
- Explique o motivo das coisas, não apenas o comando.
- Traga exemplos práticos sempre que possível.
- Use referências para documentações e materiais externos.
- Escreva como se estivesse explicando para alguém que está alguns passos atrás de você.

---

# Checklist antes de publicar

Antes de publicar um post, revise os pontos abaixo:

```txt
[ ] O título está claro?
[ ] O subtítulo explica o benefício do artigo?
[ ] A introdução apresenta o problema?
[ ] O artigo tem contexto suficiente?
[ ] Os headings estão bem organizados?
[ ] O sumário faz sentido?
[ ] Os blocos de código têm explicação antes e depois?
[ ] Existem dicas ou alertas importantes?
[ ] Os problemas comuns foram considerados?
[ ] A conclusão reforça o aprendizado?
[ ] As referências foram adicionadas?
[ ] O texto está fácil de ler?
[ ] Os exemplos estão corretos?
[ ] O conteúdo combina com o objetivo do Viana Archives?
```

---

# Resumo final

A estrutura principal recomendada para os posts é:

```txt
Título
Subtítulo
Introdução
Contexto
Requisitos, quando necessário
Desenvolvimento principal
Exemplos ou blocos de código
Problemas comuns
Recapitulando
Conclusão
Referências
```

Essa base mantém o blog organizado, ajuda o leitor a acompanhar o raciocínio e combina com a ideia do **Viana Archives** como um espaço para registrar desenvolvimento, carreira, tecnologia e aprendizados práticos.
