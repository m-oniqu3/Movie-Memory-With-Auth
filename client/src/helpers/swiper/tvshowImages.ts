import BreakingBad from "./../../assets/breaking-bad_008b_2880x1800.jpg";
import Brooklyn99 from "./../../assets/brooklyn-nine-nine_7b2b_2880x1800.jpg";
import Futurama from "./../../assets/futurama_e1e5_2880x1800.jpg";
import HTGAWM from "./../../assets/how-to-get-away-with-murder_6937_2880x1800.jpg";
import PersonOfInterest from "./../../assets/person-of-interest_8a1b_2880x1800.jpg";
import Sherlock from "./../../assets/sherlock_cc81_2880x1800.jpg";
import StrangerThings from "./../../assets/stranger-things_67b2_2880x1800.jpg";
import Blacklist from "./../../assets/the-blacklist_a9d0_2880x1800.jpg";
import TVD from "./../../assets/the-vampire-diaries_0156_2880x1800.jpg";
import TAAHM from "./../../assets/two-and-a-half-men_f51c_2880x1800.jpg";
import { Film } from "./../../types/Film";

export const tvShows: Film[] = [
  {
    src: Sherlock,
    title: "Sherlock",
    desc: "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.",
    genre: ["Mystery", "Drama", "Thriller", "Adventure", "Comedy"],
  },
  {
    src: BreakingBad,
    title: "Breaking Bad",
    desc: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    genre: ["Crime", "Drama", "Thriller", "Suspense", "Tragedy"],
  },
  {
    src: Brooklyn99,
    title: "Brooklyn Nine-Nine",
    desc: "Jake Peralta, an immature but talented NYPD detective in Brooklyn's 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt.",
    genre: ["Comedy", "Crime", "Police Procedural"],
  },

  {
    src: Futurama,
    title: "Futurama",
    desc: "Accidentally frozen, pizza-deliverer Fry wakes up 1,000 years in the future. He is taken in by his sole descendant, an elderly and addled scientist who owns a small cargo delivery service.",
    genre: ["Animation", "Adventure", "Comedy"],
  },
  {
    src: HTGAWM,
    title: "How To Get Away With Murder",
    desc: "Annalise Keating, a criminal defence lawyer and professor, teaches a group of aspiring law students. However, their lives alter when they get entangled in an aberrant murder.",
    genre: ["Legal Thriller", "Mystery"],
  },

  {
    src: PersonOfInterest,
    title: "Person of Interest",
    desc: "An ex-CIA agent and a mysterious billionaire prevent violent crimes with the help of an all-seeing machine that can predict events before they happen.",
    genre: ["Drama", "Action", "Science fiction", "Mystery", "Thriller"],
  },

  {
    src: StrangerThings,
    title: "Stranger Things",
    desc: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
    genre: ["Science fiction", "Horror", "Mystery", "Thriller"],
  },
  {
    src: Blacklist,
    title: "The Blacklist",
    desc: "A wanted fugitive mysteriously surrenders himself to the FBI and offers to help them capture deadly criminals. His sole condition is that he will work only with the new profiler, Elizabeth Keen.",
    genre: ["Crime", "Drama", "Thriller"],
  },
  {
    src: TVD,
    title: "The Vampire Diaries",
    desc: "On her first day at high school, Elena meets Stefan and immediately feels a connection with him. However, what she does not know is that Stefan and his brother, Damon, are in fact vampires.",
    genre: ["Drama", "Fantasy", "Horror", "Romance"],
  },
  {
    src: TAAHM,
    title: "Two and a Half Men",
    desc: "Charlie Harper is a jingle writer who leads a hedonistic, carefree life. Everything changes when his good-for-nothing brother, Alan, and 10-year-old nephew, Jake, move into his Malibu beach house.",
    genre: ["Sitcom", "Comedy"],
  },
];
