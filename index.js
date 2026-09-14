let opcion = "";
const arrFila = [];
do {
    let element = "";
    for (let index = 0; index < arrFila.length; index++) {
        element += "\n" + (index + 1) + " - " + arrFila[index];
    };

    opcion = parseInt(prompt("Imoveis cadastrados:" + element + "\nque deseja fazer? \n 1 - Salvar um imovel \n 2 - Visualizar imoveis \n 3 - Sair"));
    switch (opcion) {
        case 1:
            alert("irei precisar de algumas informações sobre o imovel, elas sao: nome do propietario, numero de quartos, numero de banheiros e se possui garagem.");
            let imovel = { nomePropietario: prompt("Digite o nome do propietario:") };
            imovel.numeroQuartos = parseInt(prompt("Digite o numero de quartos:"));
            imovel.numeroBanheiros = parseInt(prompt("Digite o numero de banheiros:"));
            imovel.possuiGaragem = window.confirm("Possui garagem?");
            arrFila.push(imovel);
            alert("Imovel salvo com sucesso!");
            break;
        case 2:
            if (arrFila.length > 0) {
                let imovelVisualizado = arrFila.shift();
                alert("Imovel visualizado: " + imovelVisualizado.nomePropietario + ", " + imovelVisualizado.numeroQuartos + " quartos, " + imovelVisualizado.numeroBanheiros + " banheiros, Possui garagem: " + (imovelVisualizado.possuiGaragem ? true : false));
            } else {
                alert("Não há imoveis na fila para visualizar.");
                break;
            }
            break;
        case 3:
            alert("Saindo do programa...");
            break;
    }
}
while (opcion !== 3);