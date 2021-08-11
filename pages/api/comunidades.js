import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST'){
        const TOKEN = '612edcc0a3272c55242b674d76abbf';
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "968623", // model ID de "Communities" criado pelo Dato
            ...request.body,
            //title: "Comunidade de Teste",
            //imageUrl: "https://github.com/siqueiravitor.png",
            //creatorSlug: "siqueiravitor",
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no Get, mas no POST tem!'
    });
}