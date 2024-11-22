import express from 'express';
import routes from './src/routes/postRoutes.js';
//console.log(process.env.STRING_CONEXAO)

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

//function buscarPostPorID(id) {
//    return posts.findIndex((post) => {
//        return post.id === Number(id)
//    });
//}
//
//app.get("/posts/:id", (req, res) => {
//    const index = buscarPostPorID(req.params.id);
//    res.status(200).json(posts[index]);
//
//});
//

//const posts = [
//    {
//        id: 1,
//        descricao: "Uma foto teste",
//        imagem: "https://placecats.com/millie/300/150"
//    },
//    {
//        id: 2,
//        descricao: "Um lindo pôr do sol",
//        imagem: "https://picsum.photos/seed/picsum/200/300"
//    },
//    {
//        id: 3,
//        descricao: "Minha gata adorável",
//        imagem: "https://placekitten.com/200/300"
//    },
//    {
//        id: 4,
//        descricao: "Uma paisagem montanhosa",
//        imagem: "https://source.unsplash.com/random/200x300/?mountain"
//    },
//    {
//        id: 5,
//        descricao: "Um prato delicioso",
//        imagem: "https://loremflickr.com/320/240/food"
//    },
//    {
//        id: 6,
//        descricao: "Um carro esportivo",
//        imagem: "https.//unsplash.com/photos/cars"
//    },
//    {
//        id: 7,
//        descricao: "Um desenho abstrato",
//        imagem: "https://picsum.photos/seed/abstract/200/300"
//    }
//];
