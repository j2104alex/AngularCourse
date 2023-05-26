interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

//DESESTRUCTURACION OBJETOS (con llaves)
//se crea la variable song y se le asigna un valor,
const song = "New Song";
const {
  song: anotherSong,
  songDuration: duration,
  //Desestructurar el objeto details y tomar el autor
  details: { author },
} = audioPlayer;

/* console.log("Song:", anotherSong);
console.log("Duration:", duration);
console.log("Song:", author); */

//DESESTRUCTURACION ARREGLOS
/* Se crea una constante que almacena unas variables(tambien se puede asignar un valor como en el caso de trunks)
de tipo string, luego se asignan los valores */
const [p1, p2, trunks='Not found']: string[] = ["Gokú", "Vegeta"];

/* El segundo parametro que se muestra es para eleccionar qué valor de las variables desestructuradas deseas mostrar 
en el mensaje de error. */
console.error("Personaje 3:", trunks);
