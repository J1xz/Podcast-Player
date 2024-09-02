
import { SectionBox } from "../components/Modules";
import { SectionSongs } from "../components/Modules";
import { SectionCircle } from "../components/Modules";
import {user, arrayListenAgain, arrayArtist, arrayQuickP,arrayRecAlbum} from "../components/Api";

export default function Home() {
return (
<main>
<SectionBox
user={user}
texto1={user.name}
texto2="Listen Again"
arrayCard={arrayListenAgain}
/>
<SectionCircle
user={user}
texto1="SIMILAR TO"
texto2="[Artista]"
arrayCard={arrayArtist}
/>
<SectionSongs
user={user}
texto1="START RADIO FROM A SONG"
texto2="Quick picks"
arrayCard={arrayQuickP}
/>
<SectionBox
user={user}
texto1=""
texto2="Recommended albums"
arrayCard={arrayRecAlbum}
/>
</main>

)}