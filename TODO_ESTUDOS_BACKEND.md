# Todo De Estudos Backend

Checklist de estudos para evoluir como backend developer.

## 1. Fundamentos HTTP

- [x] Entender request e response.
- [x] Entender headers.
- [x] Entender body.
- [ ] Entender query params.
- [ ] Entender route params.
- [x] Estudar metodos HTTP: `GET`, `POST`, `PATCH`, `PUT`, `DELETE`.
- [ ] Estudar status codes: `200`, `201`, `204`, `400`, `401`, `403`, `404`, `409`, `500`.
- [ ] Entender REST e convencoes de rotas.

## 2. Autenticacao e autorizacao

- [ ] Entender autenticacao.
- [ ] Entender autorizacao.
- [ ] Entender diferenca entre `401` e `403`.
- [ ] Estudar sessions.
- [ ] Estudar cookies.
- [ ] Estudar JWT.
- [ ] Entender `httpOnly`, `secure` e `sameSite`.
- [ ] Estudar hash de senha.
- [ ] Estudar `bcrypt` ou `argon2`.
- [ ] Entender controle de acesso por role.
- [ ] Entender controle de acesso por dono do recurso.

## 3. TypeScript para backend

- [ ] Revisar tipos basicos.
- [ ] Estudar interfaces.
- [ ] Estudar types.
- [ ] Estudar generics.
- [ ] Estudar `unknown` vs `any`.
- [ ] Estudar `strict`.
- [ ] Estudar `moduleResolution`, ESM e NodeNext.
- [ ] Entender imports com `.js` em projetos TypeScript ESM.
- [ ] Praticar tipagem de request e response.

## 4. Validacao de dados

- [ ] Estudar Zod.
- [ ] Validar body.
- [ ] Validar params.
- [ ] Validar query.
- [ ] Criar schemas reutilizaveis.
- [ ] Usar `min`, `max`, `email`, `enum` e `refine`.
- [ ] Entender diferenca entre validar entrada e regra de negocio.

## 5. Banco de dados

- [ ] Estudar SQL basico.
- [ ] Entender tabelas.
- [ ] Entender primary key.
- [ ] Entender foreign key.
- [ ] Entender unique constraint.
- [ ] Entender indices.
- [ ] Entender relacionamentos `1-1`, `1-N` e `N-N`.
- [ ] Entender cascade, restrict e set null.
- [ ] Modelar entidades antes de codar.

## 6. Prisma

- [ ] Estudar `schema.prisma`.
- [ ] Estudar Prisma Client.
- [ ] Estudar migrations.
- [ ] Estudar seed.
- [ ] Entender `findUnique`, `findFirst`, `findMany`, `create`, `update`, `delete`.
- [ ] Entender `include` e `select`.
- [ ] Entender como nao vazar campos sensiveis.
- [ ] Entender ambientes local, teste e producao.

## 7. Arquitetura de software

- [ ] Entender separacao de responsabilidades.
- [ ] Entender controller.
- [ ] Entender service/use case.
- [ ] Entender repository.
- [ ] Entender dependency injection.
- [ ] Entender DTO.
- [ ] Entender domain errors.
- [ ] Entender quando uma abstracao ajuda e quando so complica.
- [ ] Estudar Clean Architecture em nivel introdutorio.

## 8. Testes

- [ ] Entender teste unitario.
- [ ] Entender teste de integracao.
- [ ] Estudar Vitest ou Jest.
- [ ] Estudar mocks.
- [ ] Estudar testes de API.
- [ ] Testar casos de sucesso.
- [ ] Testar casos de erro.
- [ ] Testar regras de autorizacao.
- [ ] Entender banco isolado para testes.

## 9. Configuracao e ambiente

- [ ] Entender variaveis de ambiente.
- [ ] Entender `.env`.
- [ ] Entender `.env.example`.
- [ ] Entender por que segredo nao vai para Git.
- [ ] Estudar scripts do `package.json`.
- [ ] Entender ambientes `development`, `test` e `production`.

## 10. Producao e operacao

- [ ] Estudar logs estruturados.
- [ ] Entender health check.
- [ ] Entender CORS.
- [ ] Entender rate limiting.
- [ ] Entender deploy de API.
- [ ] Entender conexao com banco em producao.
- [ ] Entender migrations em producao.
- [ ] Entender monitoramento basico.

## Roteiro de 4 semanas

### Semana 1 - HTTP, REST e TypeScript

- [ ] Revisar HTTP e status codes.
- [ ] Praticar rotas REST.
- [ ] Corrigir typecheck do projeto.
- [ ] Estudar ESM e NodeNext.

### Semana 2 - Autenticacao segura

- [ ] Estudar hash de senha.
- [ ] Estudar sessions e cookies.
- [ ] Implementar login real no projeto.
- [ ] Proteger rotas autenticadas.

### Semana 3 - Banco, Prisma e arquitetura

- [ ] Estudar relacoes no banco.
- [ ] Melhorar schema Prisma.
- [ ] Criar seeds.
- [ ] Revisar responsabilidades de controller, service e repository.

### Semana 4 - Erros, testes e documentacao

- [ ] Criar error handler global.
- [ ] Estudar testes unitarios.
- [ ] Estudar testes de integracao.
- [ ] Documentar endpoints.
- [ ] Criar checklist de entrega de feature.

