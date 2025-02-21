import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    // poderia ser qualquer nome
    input: 'http://localhost:3333/docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true, // quando gerar um novo arquivo, ele apaga o anterior
      baseUrl: 'http://localhost:3333', // URL do backend

      override: {
        fetch: {
          includeHttpResponseReturnType: false, // não retorna o código de status da requisição
        },
      },
    },
  },
})
