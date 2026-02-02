# 🚀 GUIA COMPLETO: SUBIR SEU SITE NO VERCEL - PASSO A PASSO DETALHADO

**Você vai conseguir fazer isso! Vamos lá! 💪**

---

## 📌 RESUMO DO QUE VAMOS FAZER

1. ✅ Criar conta no GitHub (grátis)
2. ✅ Fazer upload de todos os arquivos do site para o GitHub
3. ✅ Criar conta no Vercel (grátis)
4. ✅ Conectar Vercel ao GitHub (1 clique)
5. ✅ Seu site fica online automaticamente
6. ✅ Adicionar seu domínio customizado

**Tempo total: ~15 minutos**

---

# PARTE 1: PREPARAR OS ARQUIVOS

## Passo 1.1: Baixar os arquivos do seu projeto

Você precisa baixar TODOS os arquivos do projeto que criei para você.

**O que fazer:**
- Vá para a pasta do projeto: `/home/ubuntu/altercapital`
- Baixe TUDO (todas as pastas e arquivos)

Se você estiver usando a interface do Manus:
1. Clique em **"Code"** no painel direito
2. Clique em **"Download all files"**
3. Salve em uma pasta no seu computador (ex: `C:\Users\SeuNome\Desktop\altercapital`)

---

# PARTE 2: CRIAR CONTA NO GITHUB

## Passo 2.1: Acessar GitHub

1. Abra seu navegador (Chrome, Firefox, Safari, etc)
2. Digite na barra de endereço: **github.com**
3. Pressione Enter

## Passo 2.2: Criar conta

1. Clique em **"Sign up"** (canto superior direito)
2. Digite seu email
3. Crie uma senha forte
4. Digite um username (ex: `seu_nome_aqui`)
5. Escolha **"Free"** (gratuito)
6. Clique em **"Create account"**
7. Confirme seu email (GitHub enviará um email para você)

**Pronto! Você tem conta no GitHub! ✅**

---

# PARTE 3: FAZER UPLOAD DOS ARQUIVOS PARA GITHUB

## Passo 3.1: Criar um novo repositório

1. Após fazer login no GitHub, clique no ícone **"+"** (canto superior direito)
2. Clique em **"New repository"**

## Passo 3.2: Preencher as informações

Na página que abrir, preencha assim:

```
Repository name: altercapital
Description: Alter Capital - Institutional Website
Visibility: Public (escolha "Public" para que o Vercel consiga acessar)
```

**Deixe todas as outras opções como estão (não marque nada)**

Clique em **"Create repository"**

## Passo 3.3: Fazer upload dos arquivos

Agora você vai fazer upload de TODOS os arquivos que baixou.

**Na página que abrir, você verá:**
- Um botão **"uploading an existing file"** (ou similar)
- Clique nele

**OU siga este caminho:**
1. Clique em **"Add file"** (botão verde)
2. Clique em **"Upload files"**

## Passo 3.4: Selecionar os arquivos

1. Clique em **"choose your files"**
2. Navegue até a pasta `altercapital` que você baixou
3. **Selecione TUDO** (Ctrl+A no Windows, Cmd+A no Mac)
4. Clique em **"Open"** ou **"Selecionar"**

**IMPORTANTE:** O GitHub vai fazer upload de TODOS os arquivos automaticamente. Isso pode levar alguns segundos.

## Passo 3.5: Confirmar o upload

1. Na caixa de mensagem que aparecer, escreva: `Initial commit: Alter Capital website`
2. Clique em **"Commit changes"** (botão verde)

**Pronto! Seus arquivos estão no GitHub! ✅**

---

# PARTE 4: CRIAR CONTA NO VERCEL

## Passo 4.1: Acessar Vercel

1. Abra seu navegador
2. Digite: **vercel.com**
3. Pressione Enter

## Passo 4.2: Criar conta

1. Clique em **"Sign Up"** (canto superior direito)
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel a acessar sua conta GitHub
   - Clique em **"Authorize Vercel"**
4. Preencha seu nome e email (se pedido)
5. Clique em **"Create account"**

**Pronto! Você tem conta no Vercel! ✅**

---

# PARTE 5: FAZER DEPLOY NO VERCEL

## Passo 5.1: Importar seu projeto

1. Após criar a conta, você será redirecionado para o dashboard do Vercel
2. Clique em **"Add New..."** (botão no canto superior)
3. Clique em **"Project"**

## Passo 5.2: Selecionar o repositório

1. Você verá uma lista de seus repositórios do GitHub
2. Procure por **"altercapital"**
3. Clique em **"Import"** (ao lado do nome)

## Passo 5.3: Configurar o projeto

Na página de configuração, você verá vários campos. **Preencha assim:**

```
Project Name: altercapital (deixe como está)
Framework Preset: Other
Root Directory: (deixe vazio)
Build Command: pnpm build
Output Directory: dist
Install Command: pnpm install
Environment Variables: (deixe vazio por enquanto)
```

**Clique em "Deploy"** (botão azul grande)

## Passo 5.4: Aguardar o deploy

1. Você verá uma tela com "Building..." ou "Deploying..."
2. Aguarde alguns minutos (normalmente 2-5 minutos)
3. Quando terminar, você verá uma tela com **"Congratulations!"** ou **"Deployment successful"**

**Seu site está ONLINE! 🎉**

---

# PARTE 6: ACESSAR SEU SITE

## Passo 6.1: Encontrar a URL

Na página de sucesso do Vercel, você verá uma URL como:
```
https://altercapital.vercel.app
```

**Clique nela para abrir seu site!**

Você deve ver:
- ✅ Logo da Alter Capital
- ✅ Texto "Strategic growth across Latin America"
- ✅ Botão "Get in touch"
- ✅ Seletor de idioma EN/PT funcionando

---

# PARTE 7: ADICIONAR SEU DOMÍNIO CUSTOMIZADO

Se você tem um domínio próprio (ex: `altercapital.com`), siga estes passos:

## Passo 7.1: Acessar configurações do domínio

1. No dashboard do Vercel, clique no seu projeto **"altercapital"**
2. Clique na aba **"Settings"** (engrenagem)
3. Clique em **"Domains"** (no menu esquerdo)

## Passo 7.2: Adicionar domínio

1. Clique em **"Add"** (botão azul)
2. Digite seu domínio: `seudominio.com` (sem `https://`)
3. Clique em **"Add"**

## Passo 7.3: Configurar DNS (no seu provedor de domínio)

Agora você precisa apontar seu domínio para o Vercel.

**O Vercel vai mostrar instruções como:**
```
CNAME: seu-projeto.vercel.app
```

**Você precisa:**
1. Ir ao site onde você comprou seu domínio (ex: GoDaddy, Namecheap, etc)
2. Entrar em "DNS Settings" ou "Gerenciar DNS"
3. Adicionar um registro CNAME com os valores que o Vercel mostrou
4. Salvar

**Aguarde 24-48 horas para o DNS propagar**

Depois disso, seu site estará acessível em: `https://seudominio.com`

---

# PARTE 8: ATUALIZAR SEU SITE (SEMPRE QUE PRECISAR)

Se você fizer mudanças no site no futuro:

1. Baixe os arquivos atualizados
2. Faça upload no GitHub (mesma pasta `altercapital`)
3. **O Vercel automaticamente faz deploy da nova versão!**

Não precisa fazer nada no Vercel, tudo é automático! 🤖

---

# ✅ CHECKLIST FINAL

Antes de considerar tudo pronto, verifique:

- [ ] Site está acessível em `altercapital.vercel.app`
- [ ] Logo aparece corretamente
- [ ] Todas as imagens carregam
- [ ] Seletor de idioma EN/PT funciona
- [ ] Ao clicar em PT, texto muda para português
- [ ] Botão "Get in touch" funciona
- [ ] Responsivo no celular (teste no seu telefone)
- [ ] Domínio customizado está apontando corretamente (se tiver)

---

# 🆘 PROBLEMAS COMUNS

## "Build failed" ou "Deployment failed"

**Solução:**
1. Volte para o GitHub
2. Verifique se TODOS os arquivos foram enviados
3. Procure especialmente por:
   - Pasta `client/`
   - Pasta `public/`
   - Arquivo `package.json`
4. Se faltar algo, faça upload novamente

## "Cannot find module"

**Solução:**
1. Vá para o Vercel
2. Clique no projeto
3. Clique em **"Deployments"**
4. Clique no deploy que falhou
5. Veja a mensagem de erro exata
6. Volte ao GitHub e verifique os arquivos

## Site carrega mas imagens não aparecem

**Solução:**
1. Verifique se a pasta `public/images/` existe no GitHub
2. Verifique se as imagens estão lá:
   - `hero-bg.png`
   - `expansion-visual.png`
   - `advisory-visual.png`
   - `network-visual.png`
   - `philosophy-visual.png`
   - `logo.png`

---

# 📞 PRECISA DE AJUDA?

Se algo não funcionar:
1. Anote a mensagem de erro exata
2. Tire uma screenshot
3. Envie para suporte do Vercel: vercel.com/support

**Você consegue! 💪**

---

**Dúvidas em qualquer passo? Volte aqui e me pergunta!**
