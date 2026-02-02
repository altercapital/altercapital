# 🚀 Guia de Deploy no Vercel — Alter Capital

## Opção 1: Deploy Automático via GitHub (Recomendado)

### Passo 1: Criar repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New"** (canto superior esquerdo)
3. Nomeie o repositório: `altercapital` (ou outro nome)
4. Escolha **Private** (privado) ou **Public**
5. Clique em **"Create repository"**

### Passo 2: Fazer push do código para GitHub
Execute estes comandos no seu terminal (na pasta do projeto):

```bash
git init
git add .
git commit -m "Initial commit: Alter Capital website"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/altercapital.git
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu username do GitHub**

### Passo 3: Conectar Vercel ao GitHub
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** ou **"Log In"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel a acessar sua conta GitHub
5. Clique em **"Import Project"**
6. Selecione o repositório `altercapital`
7. Clique em **"Import"**

### Passo 4: Configurar o projeto
Na página de configuração do Vercel:
- **Framework Preset**: Selecione **"Other"** (ou deixe em branco)
- **Root Directory**: Deixe vazio (padrão)
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

Clique em **"Deploy"** e pronto! ✅

---

## Opção 2: Deploy Manual via CLI

### Passo 1: Instalar Vercel CLI
```bash
npm i -g vercel
```

### Passo 2: Fazer login no Vercel
```bash
vercel login
```

### Passo 3: Fazer deploy
Na pasta do projeto, execute:
```bash
vercel
```

Siga as instruções na tela e confirme as configurações.

---

## Opção 3: Deploy via Drag & Drop

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **"Deploy"** na seção "Get started"
3. Arraste a pasta `dist` (após fazer build local)
4. Pronto! O site estará online

---

## ⚙️ Configurações Importantes

### Variáveis de Ambiente (se necessário)
Se você adicionar variáveis de ambiente no futuro:
1. Vá para **Settings** do seu projeto no Vercel
2. Clique em **"Environment Variables"**
3. Adicione as variáveis necessárias

### Domínio Customizado
1. Vá para **Settings** → **Domains**
2. Clique em **"Add"**
3. Digite seu domínio (ex: `altercapital.com`)
4. Siga as instruções para apontar o DNS

---

## 🔄 Atualizações Automáticas

Após configurar no Vercel:
- **Toda vez que você fizer push para `main` no GitHub**, o Vercel automaticamente faz deploy da nova versão
- Não precisa fazer nada manualmente!

---

## ✅ Verificar Deploy

Após o deploy:
1. Acesse a URL fornecida pelo Vercel (ex: `altercapital.vercel.app`)
2. Teste a navegação
3. Teste o seletor de idioma (EN/PT)
4. Verifique se as imagens carregam corretamente

---

## 🐛 Troubleshooting

**Erro: "Build failed"**
- Verifique se o `package.json` está correto
- Certifique-se de que todas as dependências foram instaladas localmente

**Erro: "Cannot find module"**
- Rode `pnpm install` localmente
- Faça push novamente

**Imagens não carregam**
- Certifique-se de que estão em `/public/images/`
- Verifique os caminhos no código (devem ser `/images/nome.png`)

---

## 📞 Suporte

- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)
- Comunidade: [vercel.com/support](https://vercel.com/support)
