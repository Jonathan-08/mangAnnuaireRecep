const header = `
<header>
<h1><a href="index.html">MangAnnuaire</a></h1>
<nav>
    <ul>
        <li><a href="anime.html">Anime</a></li>
        <li><a href="manga.html">Manga</a></li>
        <li><a href="shopping.html">Commercial</a></li>
        <li><a href="j-music.html">J-Music</a></li>
        <li><a href="culture_asiatique.html">Culture</a></li>
        <li><a href="multimedia.html">Multimedia</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="jeux_video.html">Jeux vidéo</a></li>
        <li><a href="authors.html">Auteurs</a></li>
        <li><a href="rank.html">Classement</a></li>
        <li><a href="avoid_manga.html">A éviter</a></li>
    </ul>
</nav>
</header>
`;



// Insérez le contenu dans le conteneur
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header-container").innerHTML = header;
});

// Exportez la variable (peut être supprimé si vous n'utilisez pas la syntaxe require ailleurs)
// if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
//     module.exports = header;
// }