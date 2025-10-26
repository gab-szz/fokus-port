# 🍅 Fokus - Timer Pomodoro

Um aplicativo de timer Pomodoro desenvolvido em React Native com Expo, criado como projeto de estudos seguindo o curso da Alura para consolidar o aprendizado na prática.

## 📱 Sobre o Projeto

O Fokus é um aplicativo de produtividade baseado na técnica Pomodoro, que ajuda a organizar o tempo de trabalho em intervalos focados. O app permite alternar entre diferentes tipos de sessões:

- **🎯 Foco**: 25 minutos de trabalho concentrado
- **☕ Pausa Curta**: 5 minutos de descanso
- **🛋️ Pausa Longa**: 15 minutos de pausa prolongada

## ✨ Funcionalidades

- ⏱️ **Timer decremental** em tempo real
- 🔄 **Alternância entre modos** (Foco, Pausa Curta, Pausa Longa)
- ⏯️ **Controles de play/pause** do timer
- 🎨 **Interface visual dinâmica** com imagens correspondentes a cada modo
- 📱 **Design responsivo** com tema escuro
- 🔄 **Reinício automático** quando o timer chega a zero
- 🛡️ **Programação defensiva** para controle seguro do timer

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Tipagem estática para JavaScript
- **React Hooks** (useState, useRef) - Gerenciamento de estado
- **Expo Router** - Navegação file-based

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## 🔧 Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/gab-szz/fokus-port.git
   cd fokus
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npx expo start
   ```

4. **Visualize o app**
   - 📱 **Mobile**: Use o app Expo Go para escanear o QR Code
   - 🌐 **Web**: Pressione `w` no terminal para abrir no navegador
   - 🤖 **Android**: Pressione `a` para abrir no emulador Android
   - 🍎 **iOS**: Pressione `i` para abrir no simulador iOS

## 🏗️ Estrutura do Projeto

```
fokus/
├── app/
│   ├── components/
│   │   ├── ActionButton/     # Botões de seleção de modo
│   │   ├── FokusButton/      # Botão principal (Play/Pause)
│   │   └── Timer/            # Componente do timer
│   ├── index.tsx             # Tela principal do app
│   ├── pomodoro.png          # Imagem do modo Foco
│   ├── short.png             # Imagem da Pausa Curta
│   └── long.png              # Imagem da Pausa Longa
├── types/
│   └── images.d.ts           # Declarações de tipo para imagens
└── ...
```

## 🎯 Conceitos Aprendidos

Durante o desenvolvimento deste projeto, foram aplicados diversos conceitos fundamentais:

### **Estado e Hooks**

- `useState` para gerenciamento de estados
- `useRef` para referências persistentes do timer
- Controle de múltiplos estados sincronizados

### **Componentização**

- Criação de componentes reutilizáveis
- Props e interfaces TypeScript
- Separação de responsabilidades

### **Programação Defensiva**

- Função `clear()` para limpeza segura do timer
- Verificações de estado antes de operações
- Prevenção de vazamentos de memória

### **Lógica de Timer**

- Uso de `setInterval` para contagem regressiva
- Controle de play/pause/reset
- Formatação de tempo (MM:SS)

### **Estilização React Native**

- StyleSheet para estilos organizados
- Layout com Flexbox
- Design responsivo

## 🎨 Design

O aplicativo segue um design minimalista com:

- **Tema escuro** para reduzir fadiga visual
- **Cores contrastantes** para melhor legibilidade
- **Imagens contextuais** para cada modo de timer
- **Interface intuitiva** com feedback visual

## 📚 Aprendizado

Este projeto foi desenvolvido como parte dos estudos do curso de React Native da Alura, com foco em:

- Consolidar conceitos de React Native
- Praticar desenvolvimento com Expo
- Aplicar boas práticas de programação
- Implementar funcionalidades reais de produtividade

## 🤝 Contribuições

Este é um projeto de estudos, mas contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Propor novas funcionalidades
- Compartilhar feedback

## 📄 Licença

Este projeto é fictício e sem fins comerciais, desenvolvido apenas para fins educacionais.

## 👨‍💻 Autor

**Gabriel Silvio da Silva Santos**

- Estudante focado em desenvolvimento mobile
- Projeto desenvolvido seguindo o curso da Alura

---

### 🎯 Próximos Passos

- [ ] Adicionar notificações quando o timer terminar
- [ ] Implementar histórico de sessões
- [ ] Adicionar sons personalizáveis
- [ ] Criar configurações de tempo customizáveis
- [ ] Implementar estatísticas de produtividade

---

_Desenvolvido com 💜 durante os estudos de React Native_
