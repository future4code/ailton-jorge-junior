"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
// variavel que tem os poderes de criar endpoints
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// exercicios que faz mais sentido
// CRUD - Create , Read , Update , Delete
// retornar todas as playlist
// http://localhost:3003/retornaPlaylist
app.get("/retornaPlaylist", (request, response) => {
    response.send(data_1.playlist);
});
// http://localhost:3003/criarPlaylist
app.post("/criarPlaylist", (request, response) => {
    const { nome } = request.body;
    const novaPlaylist = {
        nome,
        musicas: []
    };
    data_1.playlist.push(novaPlaylist);
    response.send(data_1.playlist);
});
// retorna uma playlist especifica
// http://localhost:3003/retornaPlaylist/:nome
app.get("/retornaPlaylistEspecifica", (request, response) => {
    try {
        const { nome } = request.body;
        // verifica -> undefined , string vazia , null , false
        if (!nome) {
            response.statusCode = 401;
            throw new Error("Ei , não pode mandar valores vazios");
        }
        const achouPlaylist = data_1.playlist.filter((playlist) => {
            return playlist.nome.includes(nome.toLowerCase());
        });
        if (!achouPlaylist.length) {
            response.statusCode = 404;
            throw new Error(`Não foi possivel achar a playlist com o nome -> ${nome}`);
        }
        response.send(achouPlaylist);
    }
    catch (error) {
        response.status(response.statusCode || 500).send({ message: error.message });
    }
});
// http://localhost:3003/apagarPlaylist/:nome
app.delete("/apagarPlaylist/:nome", (request, response) => {
    const nome = request.params.nome;
    const deletePlaylist = data_1.playlist.filter((playlist) => {
        return playlist.nome !== nome;
    });
    response.send(deletePlaylist);
});
// http://localhost:3003/adicionarMusica/:nomePlaylist
app.post("/adicionarMusica/:nomePlaylist", (request, response) => {
    const nomePlaylist = request.params.nomePlaylist;
    const { musica, artista, ano } = request.body;
    const [procurarPlaylist] = data_1.playlist.filter((playlist) => {
        return playlist.nome === nomePlaylist;
    });
    const novaMusica = {
        musica,
        artista,
        ano
    };
    procurarPlaylist.musicas.push(novaMusica);
    response.send(procurarPlaylist);
});
// servidor esta rodando nesse endereço. Startar o backEnd
// endereço base -> http://localhost:3003/primeira-api
app.listen(3003, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3003");
});
//# sourceMappingURL=index.js.map