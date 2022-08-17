"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(3003, () => console.log("Servidor disponível em 3003"));
app.get("/playlists", (req, res) => {
    // tenho todos os usuários
    const currentUsers = data_1.users; // array de objetos
    console.log(1, currentUsers);
    // Vou pegar as playlists de cada usuário
    const userPlaylists = currentUsers.map((user) => {
        return user.playlists;
    }); // array de arrays
    console.log(2, userPlaylists);
    const result = userPlaylists.flat(1);
    res.status(200).send(result);
});
app.get("/tracks", (req, res) => {
    const playlistId = req.query.id;
    if (!playlistId)
        res.status(400).send("Não é possível realizar a operação. ID da playlista ausente");
    const allPlaylists = data_1.users.map((user) => {
        return user.playlists;
    }).flat(1);
    let tracks;
    allPlaylists.forEach((playlist) => {
        if (playlist.id === playlistId) {
            tracks = playlist.tracks;
        }
    });
    res.status(200).send(tracks);
});
app.delete("/playlist", (req, res) => {
    const id = req.query.id;
    data_1.users.forEach((user) => {
        user.playlists = user.playlists.map((playlist) => {
            if (playlist.id === id) {
                return {};
            }
            return playlist;
        });
    });
    res.status(200).send(data_1.users);
});
app.delete("/track", (req, res) => {
    const trackId = req.query.trackId;
    const playlistId = req.query.playlistId;
    const allPlaylists = data_1.users
        .map((user) => {
        return user.playlists;
    })
        .flat(1);
    allPlaylists.forEach((playlist) => {
        if (playlist.id === playlistId) {
            playlist.tracks = playlist.tracks.map((track) => {
                if (track.id === trackId) {
                    return {};
                }
                return track;
            });
        }
    });
    res.status(200).send(allPlaylists);
});
