# Todo Do Projeto

Checklist pratico para melhorar este projeto backend.

## 1. Autenticacao e seguranca

- [ ] Alterar login para receber `email` e `password`, nao `id` pela URL.
- [ ] Instalar e usar `bcrypt` ou `argon2` para hash de senha.
- [ ] Salvar senha apenas com hash no banco.
- [ ] Validar senha no login usando `compare`.
- [ ] Impedir criacao publica de usuario `Admin`.
- [ ] Criar seed ou script interno para criar roles iniciais.
- [ ] Remover dependencia de IDs fixos de role, como `1 = Admin` e `2 = User`.
- [ ] Configurar cookie de sessao com `httpOnly`, `sameSite`, `secure`, `path` e `expires`.
- [ ] Fazer o middleware de autenticacao carregar o usuario autenticado no request.
- [ ] Garantir que usuario comum so altere ou delete a propria conta.
- [ ] Garantir que apenas admin acesse listagem de usuarios, roles e sessoes.
- [ ] Evitar retornar `password` nas respostas da API.

## 2. Rotas e API design

- [ ] Trocar `POST /session/:id` por `POST /sessions` ou `POST /login`.
- [ ] Trocar `DELETE /session/:id` por `DELETE /sessions/current` ou `POST /logout`.
- [ ] Trocar `GET /users/id/:id` por `GET /users/:id`.
- [ ] Trocar `GET /books/id/:id` por `GET /books/:id`.
- [ ] Padronizar nomes no plural: `/users`, `/books`, `/roles`, `/sessions`.
- [ ] Usar `401` quando nao houver autenticacao.
- [ ] Usar `403` quando houver autenticacao, mas faltar permissao.
- [ ] Criar um arquivo `API.md` documentando endpoints, bodies e respostas.

## 3. Tratamento de erros

- [ ] Criar um `setErrorHandler` global no Fastify.
- [ ] Transformar erro do Zod em `400 Bad Request`.
- [ ] Transformar email duplicado em `409 Conflict`.
- [ ] Transformar recurso inexistente em `404 Not Found`.
- [ ] Padronizar resposta de erro, por exemplo `{ "message": "..." }`.
- [ ] Substituir `throw new Error()` generico por erros de aplicacao.
- [ ] Revisar mensagens com erros de digitacao.

## 4. TypeScript e scripts

- [ ] Corrigir `src/server.ts` para importar `./app.js`.
- [ ] Tipar o erro do `catch` em `src/server.ts`.
- [ ] Criar script `typecheck` no `package.json`.
- [ ] Criar script `build` no `package.json`.
- [ ] Criar script `test` no `package.json`.
- [ ] Rodar `tsc --noEmit` e garantir que passa sem erro.
- [ ] Remover imports nao usados.
- [ ] Padronizar nomes de interfaces com PascalCase.

## 5. Prisma e banco

- [ ] Ajustar `.gitignore` para versionar `prisma/schema.prisma` e migrations.
- [ ] Ignorar somente bancos locais, como `dev.db`.
- [ ] Criar seed para `Admin` e `User`.
- [ ] Adicionar `@unique` em `Role.nameRole`, se cada role deve ser unica.
- [ ] Revisar regras `onDelete` e `onUpdate`.
- [ ] Revisar se `Bookcase` precisa impedir livro duplicado para o mesmo usuario.
- [ ] Criar migrations apos alterar o schema.

## 6. Organizacao interna

- [ ] Manter controllers focados em request, response e status code.
- [ ] Manter services focados em regra de negocio.
- [ ] Manter repositories focados em banco de dados.
- [ ] Criar `AuthenticateUserService`.
- [ ] Criar `CreateUserService` sem permitir role arbitraria pelo body publico.
- [ ] Criar uma forma consistente de montar repositories/services/controllers.
- [ ] Avaliar services que apenas repassam chamada sem regra de negocio.

## 7. Testes

- [ ] Adicionar Vitest ou Jest.
- [ ] Criar banco de teste separado.
- [ ] Testar cadastro de usuario.
- [ ] Testar login com senha correta.
- [ ] Testar login com senha incorreta.
- [ ] Testar rota protegida sem sessao.
- [ ] Testar usuario comum tentando acessar rota de admin.
- [ ] Testar usuario tentando alterar outro usuario.
- [ ] Testar criacao de livro com data futura.
- [ ] Rodar testes antes de finalizar cada feature.

## 8. Configuracao e ambiente

- [ ] Carregar variaveis de ambiente no boot da aplicacao.
- [ ] Criar `.env.example`.
- [ ] Validar variaveis obrigatorias, como `DATABASE_URL`.
- [ ] Remover dependencias nao usadas.
- [ ] Criar rota `GET /health`.
- [ ] Ativar logger do Fastify.
- [ ] Avaliar configuracao de CORS.

## Ordem recomendada para mexer no projeto

1. Corrigir TypeScript e scripts.
2. Refatorar cadastro e login.
3. Proteger senha com hash.
4. Melhorar middleware de autenticacao.
5. Corrigir autorizacao por usuario/admin.
6. Criar error handler global.
7. Ajustar rotas REST.
8. Melhorar Prisma, seeds e `.gitignore`.
9. Adicionar testes.
10. Documentar API.

