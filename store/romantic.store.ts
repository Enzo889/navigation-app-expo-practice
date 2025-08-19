interface Historia {
  id: number;
  title: string;
  description: string;
  year: number;
  author: string;
  imageUrl: string;
}

interface Cancion {
  id: number;
  title: string;
  description: string;
  year: number;
  artist: string;
  imageUrl: string;
}

interface Pelicula {
  id: number;
  title: string;
  description: string;
  year: number;
  director: string;
  imageUrl: string;
}

export interface RomanticData {
  historias: Historia[];
  canciones: Cancion[];
  peliculas: Pelicula[];
}

export const favorites: {
  type: "peliculas" | "historias" | "canciones";
  id: number;
}[] = [];

export function addFavorite(
  type: "peliculas" | "historias" | "canciones",
  id: number
) {
  if (!favorites.find((f) => f.type === type && f.id === id)) {
    favorites.push({ type, id });
  }
}

export function removeFavorite(
  type: "peliculas" | "historias" | "canciones",
  id: number
) {
  const idx = favorites.findIndex((f) => f.type === type && f.id === id);
  if (idx !== -1) favorites.splice(idx, 1);
}

export function isFavorite(
  type: "peliculas" | "historias" | "canciones",
  id: number
) {
  return favorites.some((f) => f.type === type && f.id === id);
}

export const romanticData: RomanticData = {
  historias: [
    {
      id: 1,
      title: "Romeo y Julieta",
      description:
        "La obra más conocida de William Shakespeare, escrita en 1597, cuenta la trágica historia de dos jóvenes amantes, Romeo Montesco y Julieta Capuleto, cuyo amor está condenado por la enemistad ancestral de sus familias. Ambientada en la romántica Verona, Italia, la historia explora la pasión juvenil, la impulsividad, los malentendidos y el peso del destino. El drama alcanza un clímax doloroso cuando, en un acto de desesperación y amor absoluto, ambos deciden acabar con sus vidas para unirse en la eternidad, convirtiéndose en un símbolo eterno del amor prohibido y trágico.",
      year: 1597,
      author: "William Shakespeare",
      imageUrl: "/images/romeo-julieta.jpg",
    },
    {
      id: 2,
      title: "Orgullo y Prejuicio",
      description:
        "Publicada en 1813 por Jane Austen, esta novela sigue a Elizabeth Bennet, una joven ingeniosa y decidida, y al enigmático señor Darcy, cuyo orgullo inicial y los prejuicios de ambos obstaculizan su creciente atracción. Ambientada en la Inglaterra rural del siglo XIX, la historia combina crítica social, humor sutil y un desarrollo emocional profundo que culmina en una historia de amor madura, basada en el respeto mutuo y el autoconocimiento. Es un retrato atemporal de cómo las primeras impresiones pueden dar paso a sentimientos verdaderos y duraderos.",
      year: 1813,
      author: "Jane Austen",
      imageUrl: "/images/orgullo-prejuicio.jpg",
    },
    {
      id: 3,
      title: "Cumbres Borrascosas",
      description:
        "Escrita por Emily Brontë en 1847, narra la relación intensa y destructiva entre Heathcliff y Catherine Earnshaw. Ambientada en los ventosos páramos de Yorkshire, la novela explora la naturaleza salvaje y apasionada del amor, así como su capacidad para convertirse en obsesión y venganza. A través de generaciones, el relato muestra cómo las emociones extremas pueden marcar la vida de las personas y cómo el amor, incluso cuando es oscuro y tormentoso, deja una huella imborrable.",
      year: 1847,
      author: "Emily Brontë",
      imageUrl: "/images/cumbres-borrascosas.jpg",
    },
    {
      id: 4,
      title: "Ana Karenina",
      description:
        "Considerada una de las obras maestras de la literatura, 'Ana Karenina' de León Tolstói (1877) narra la historia de una mujer atrapada entre las rígidas normas sociales de la Rusia imperial y su deseo de vivir un amor apasionado. Su romance con el conde Vronsky la lleva a enfrentarse al rechazo, la soledad y un profundo conflicto interno. La novela no solo retrata un triángulo amoroso, sino que también aborda temas como la familia, la moralidad y la búsqueda de sentido en la vida.",
      year: 1877,
      author: "León Tolstói",
      imageUrl: "/images/ana-karenina.jpg",
    },
    {
      id: 5,
      title: "La Dama de las Camelias",
      description:
        "Alexandre Dumas hijo escribió esta novela en 1848, inspirada en su propia relación con la cortesana Marie Duplessis. La historia de Marguerite Gautier y Armand Duval es un relato de sacrificio y amor imposible en el que la protagonista renuncia a su felicidad para proteger al hombre que ama del desprestigio social. La novela conmueve por su delicadeza y su profunda humanidad, y fue la base de la ópera 'La Traviata' de Giuseppe Verdi.",
      year: 1848,
      author: "Alexandre Dumas hijo",
      imageUrl: "/images/dama-camelias.jpg",
    },
    {
      id: 6,
      title: "Jane Eyre",
      description:
        "Publicada en 1847 por Charlotte Brontë, esta novela sigue la vida de Jane Eyre, una huérfana que, gracias a su determinación y principios, se convierte en institutriz en la mansión Thornfield. Allí se enamora del misterioso señor Rochester, cuyo pasado guarda secretos oscuros. La obra combina romance, misterio y crítica social, y es un testimonio del poder del amor y la independencia femenina.",
      year: 1847,
      author: "Charlotte Brontë",
      imageUrl: "/images/jane-eyre.jpg",
    },
    {
      id: 7,
      title: "Lo que el viento se llevó",
      description:
        "Escrita por Margaret Mitchell en 1936, es una saga épica ambientada en el sur de Estados Unidos durante la Guerra de Secesión. Scarlett O'Hara, una joven obstinada y apasionada, lucha por preservar su hogar y su estilo de vida mientras vive un amor intenso y conflictivo con Rhett Butler. La novela es un retrato de resiliencia y supervivencia en tiempos de cambio y destrucción.",
      year: 1936,
      author: "Margaret Mitchell",
      imageUrl: "/images/lo-que-el-viento-se-llevo.jpg",
    },
    {
      id: 8,
      title: "El amor en los tiempos del cólera",
      description:
        "Publicada en 1985 por Gabriel García Márquez, cuenta la historia de Florentino Ariza, quien espera más de cincuenta años para reencontrarse con su gran amor, Fermina Daza. Ambientada en un Caribe vibrante y cargado de realismo mágico, la novela es una oda a la paciencia, la persistencia y la esperanza en el amor que trasciende el tiempo y las circunstancias.",
      year: 1985,
      author: "Gabriel García Márquez",
      imageUrl: "/images/amor-en-los-tiempos-del-colera.jpg",
    },
    {
      id: 9,
      title: "Tristán e Isolda",
      description:
        "Esta leyenda medieval, transmitida durante siglos, narra el amor prohibido entre el caballero Tristán y la princesa Isolda, esposa del rey Marcos. Un filtro de amor accidental sella su destino, llevándolos a un romance apasionado y trágico. La historia explora el conflicto entre el deber, el honor y la fuerza irresistible de la pasión.",
      year: 1180,
      author: "Anónimo",
      imageUrl: "/images/tristan-isolda.jpg",
    },
    {
      id: 10,
      title: "La princesa prometida",
      description:
        "Escrita por William Goldman en 1973, esta novela mezcla romance, aventura y humor. Cuenta la historia de Westley, un joven granjero que se convierte en pirata para rescatar a su amada Buttercup de un matrimonio no deseado. Con espadachines, gigantes y giros inesperados, la obra celebra el amor verdadero como una fuerza invencible.",
      year: 1973,
      author: "William Goldman",
      imageUrl: "/images/princesa-prometida.jpg",
    },
  ],
  canciones: [
    {
      id: 1,
      title: "Something",
      description:
        "Compuesta por George Harrison e interpretada por The Beatles en 1969, 'Something' es considerada una de las canciones de amor más bellas jamás escritas. Con una melodía suave y una letra sencilla pero profundamente emotiva, captura la esencia de un amor que es a la vez sereno e irresistible, y que trasciende las palabras.",
      year: 1969,
      artist: "The Beatles",
      imageUrl: "/images/something.jpg",
    },
    {
      id: 2,
      title: "Unchained Melody",
      description:
        "Escrita en 1955 y popularizada por The Righteous Brothers en 1965, esta balada ha sido una de las más interpretadas en la historia. Su atmósfera melancólica y su interpretación apasionada transmiten un anhelo profundo y eterno, evocando la espera por un amor que se siente destinado.",
      year: 1965,
      artist: "The Righteous Brothers",
      imageUrl: "/images/unchained-melody.jpg",
    },
    {
      id: 3,
      title: "Bésame Mucho",
      description:
        "Creada en 1940 por la compositora mexicana Consuelo Velázquez, 'Bésame Mucho' es una declaración apasionada ante la posibilidad de una despedida. Su melodía suave y romántica ha trascendido idiomas y culturas, convirtiéndose en un clásico inmortal interpretado por artistas de todo el mundo.",
      year: 1940,
      artist: "Consuelo Velázquez",
      imageUrl: "/images/besame-mucho.jpg",
    },
    {
      id: 4,
      title: "I Will Always Love You",
      description:
        "Originalmente escrita por Dolly Parton en 1973 como una despedida llena de cariño, esta canción alcanzó fama mundial en 1992 gracias a la poderosa interpretación de Whitney Houston para la película 'The Bodyguard'. Es un himno de amor eterno, incluso cuando el destino obliga a separarse.",
      year: 1973,
      artist: "Dolly Parton / Whitney Houston",
      imageUrl: "/images/i-will-always-love-you.jpg",
    },
    {
      id: 5,
      title: "La vie en rose",
      description:
        "Popularizada por Édith Piaf en 1947, 'La vie en rose' describe la experiencia de ver el mundo teñido de rosa cuando se está enamorado. Su voz inconfundible y la poesía de la letra han hecho de esta canción un símbolo de romance francés atemporal.",
      year: 1947,
      artist: "Édith Piaf",
      imageUrl: "/images/la-vie-en-rose.jpg",
    },
    {
      id: 6,
      title: "All of Me",
      description:
        "John Legend escribió 'All of Me' en 2013 como una dedicatoria a su esposa Chrissy Teigen. Con un piano íntimo y una letra que celebra tanto las virtudes como las imperfecciones de la persona amada, se convirtió rápidamente en una de las canciones de boda más populares de la última década.",
      year: 2013,
      artist: "John Legend",
      imageUrl: "/images/all-of-me.jpg",
    },
    {
      id: 7,
      title: "Amor Eterno",
      description:
        "Compuesta por Juan Gabriel en 1984, 'Amor Eterno' es una sentida elegía dedicada a su madre. Su letra emotiva y su intensidad interpretativa han hecho que se convierta en un himno para quienes han amado y perdido a alguien importante.",
      year: 1984,
      artist: "Juan Gabriel",
      imageUrl: "/images/amor-eterno.jpg",
    },
    {
      id: 8,
      title: "Perfect",
      description:
        "Lanzada por Ed Sheeran en 2017, 'Perfect' es una declaración de amor sencilla y sincera, narrando momentos cotidianos que se convierten en recuerdos eternos. Su calidez melódica y su honestidad la han convertido en favorita para momentos especiales.",
      year: 2017,
      artist: "Ed Sheeran",
      imageUrl: "/images/perfect.jpg",
    },
    {
      id: 9,
      title: "Te Amo",
      description:
        "Interpretada por Franco de Vita en 1988, 'Te Amo' es una confesión directa y apasionada. La canción describe la intensidad de un amor que se siente absoluto, utilizando un lenguaje cercano y emocional que conecta profundamente con el oyente.",
      year: 1988,
      artist: "Franco de Vita",
      imageUrl: "/images/te-amo.jpg",
    },
    {
      id: 10,
      title: "Something Stupid",
      description:
        "Popularizada por Frank y Nancy Sinatra en 1967, esta canción ligera y encantadora narra el impulso de confesar el amor en el momento menos esperado. Su melodía alegre y su tono desenfadado la han convertido en un clásico del pop romántico.",
      year: 1967,
      artist: "Frank & Nancy Sinatra",
      imageUrl: "/images/something-stupid.jpg",
    },
  ],
  peliculas: [
    {
      id: 1,
      title: "Casablanca",
      description:
        "Dirigida por Michael Curtiz en 1942, 'Casablanca' combina romance, intriga y sacrificio en medio de la Segunda Guerra Mundial. La historia sigue a Rick Blaine y Ilsa Lund, antiguos amantes que se reencuentran en Marruecos bajo circunstancias peligrosas. La película explora el dilema entre el amor personal y el deber hacia una causa mayor, dejando diálogos y escenas que han marcado la historia del cine.",
      year: 1942,
      director: "Michael Curtiz",
      imageUrl: "/images/casablanca.jpg",
    },
    {
      id: 2,
      title: "Titanic",
      description:
        "Dirigida por James Cameron en 1997, 'Titanic' combina una recreación histórica del hundimiento del barco más famoso del mundo con la apasionada historia de amor entre Jack Dawson y Rose DeWitt Bukater. La película es un homenaje a la fuerza del amor frente a la tragedia y cuenta con una de las bandas sonoras más icónicas del cine.",
      year: 1997,
      director: "James Cameron",
      imageUrl: "/images/titanic.jpg",
    },
    {
      id: 3,
      title: "El Diario de una Pasión",
      description:
        "Basada en la novela de Nicholas Sparks, esta película de 2004, dirigida por Nick Cassavetes, narra la historia de Noah y Allie, dos jóvenes de diferentes clases sociales que viven un amor intenso durante un verano, para luego separarse y reencontrarse años después. Es una reflexión sobre la persistencia del amor a pesar del tiempo y las adversidades.",
      year: 2004,
      director: "Nick Cassavetes",
      imageUrl: "/images/el-diario-de-una-pasion.jpg",
    },
    {
      id: 4,
      title: "Notting Hill",
      description:
        "Esta comedia romántica de 1999, dirigida por Roger Michell, relata el encuentro fortuito entre un librero londinense y una famosa actriz de cine. Entre risas, malentendidos y momentos tiernos, la película muestra cómo el amor puede florecer incluso en circunstancias improbables.",
      year: 1999,
      director: "Roger Michell",
      imageUrl: "/images/notting-hill.jpg",
    },
    {
      id: 5,
      title: "La La Land",
      description:
        "En 2016, Damien Chazelle presentó esta historia moderna de amor entre una aspirante a actriz y un pianista de jazz en Los Ángeles. Con un estilo que combina el musical clásico con una narrativa contemporánea, la película explora cómo los sueños y las ambiciones pueden influir en una relación.",
      year: 2016,
      director: "Damien Chazelle",
      imageUrl: "/images/la-la-land.jpg",
    },
    {
      id: 6,
      title: "Orgullo y Prejuicio",
      description:
        "La adaptación cinematográfica de 2005, dirigida por Joe Wright, ofrece una visión visualmente deslumbrante de la novela de Jane Austen. Keira Knightley y Matthew Macfadyen dan vida a Elizabeth Bennet y el señor Darcy, transmitiendo la evolución de su relación con sutileza y emoción.",
      year: 2005,
      director: "Joe Wright",
      imageUrl: "/images/orgullo-y-prejuicio.jpg",
    },
    {
      id: 7,
      title: "Antes del Amanecer",
      description:
        "Dirigida por Richard Linklater en 1995, esta película sigue a dos jóvenes que se conocen en un tren y deciden pasar una noche juntos en Viena, conversando y explorando la ciudad. Con diálogos naturales y una atmósfera íntima, es una celebración del encuentro inesperado y la conexión instantánea.",
      year: 1995,
      director: "Richard Linklater",
      imageUrl: "/images/antes-del-amanecer.jpg",
    },
    {
      id: 8,
      title: "Ghost",
      description:
        "Estrenada en 1990 y dirigida por Jerry Zucker, 'Ghost' combina romance, drama y elementos sobrenaturales. La historia sigue a Sam, quien, tras ser asesinado, permanece como espíritu para proteger a su amada Molly, creando escenas memorables como la del torno de cerámica que se ha vuelto icónica.",
      year: 1990,
      director: "Jerry Zucker",
      imageUrl: "/images/ghost.jpg",
    },
    {
      id: 9,
      title: "Lo que el viento se llevó",
      description:
        "Adaptada al cine en 1939 y dirigida por Victor Fleming, esta película épica narra el amor turbulento entre Scarlett O'Hara y Rhett Butler en medio de la Guerra de Secesión. Con interpretaciones magistrales y una producción grandiosa, sigue siendo un referente del cine romántico clásico.",
      year: 1939,
      director: "Victor Fleming",
      imageUrl: "/images/lo-que-el-viento-se-llevo.jpg",
    },
    {
      id: 10,
      title: "Her",
      description:
        "Dirigida por Spike Jonze en 2013, 'Her' presenta una historia de amor poco convencional entre un hombre solitario y un sistema operativo con inteligencia artificial. La película reflexiona sobre la naturaleza del afecto, la conexión humana y la tecnología, creando una experiencia emotiva y filosófica.",
      year: 2013,

      director: "Spike Jonze",
      imageUrl: "/images/her.jpg",
    },
  ],
};
