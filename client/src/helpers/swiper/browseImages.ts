import BigHeroSix from "./../../assets/big-hero-6_29fe_2880x1800.jpg";
import BladeRunner from "./../../assets/blade-runner-2049_5256_2880x1800.jpg";
import DCLegends from "./../../assets/dcs-legends-of-tomorrow_bec9_2880x1800.jpg";
import GOT from "./../../assets/game-of-thrones_c8d2_2880x1800.jpg";
import Inception from "./../../assets/inception_286e_2880x1800.jpg";
import Interstellar from "./../../assets/interstellar_d112_2880x1800.jpg";
import MrRobot from "./../../assets/mr-robot_6529_2880x1800.jpg";
import Avengers from "./../../assets/the-avengers_3057_2880x1800.jpg";
import DarkKnight from "./../../assets/the-dark-knight_7918_2880x1800.jpg";
import Hitman from "./../../assets/the-hitmans-bodyguard_fd51_2880x1800.jpg";

export interface Film {
  src: string;
  title: string;
  desc: string;
  genre: string[];
}

export const browseMovies: Film[] = [
  {
    src: GOT,
    title: "Game of Thrones",
    desc: "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
  },
  {
    src: MrRobot,
    title: "Mr. Robot",
    desc: "Elliot, a cyber-security engineer suffering from anxiety, works for a corporation and hacks felons by night. Panic strikes him after Mr Robot, a cryptic anarchist, recruits him to ruin his company.",
    genre: ["Crime", "Drama", "Thriller"],
  },
  {
    src: Hitman,
    title: "The Hitman's Bodyguard",
    desc: "Michael Bryce, a protection agent, is tasked with protecting Darius Kincaid, one of the world's most famous assassins. The two must then set aside their differences to tackle several dangerous events.",
    genre: ["Action", "Comedy", "Crime"],
  },
  {
    src: Inception,
    title: "Inception",

    desc: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    src: Interstellar,
    title: "Interstellar",

    desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    genre: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    src: Avengers,
    title: "The Avengers",

    desc: "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    src: BigHeroSix,
    title: "Big Hero 6",

    desc: "Hiro, a robotics prodigy, joins hands with Baymax in order to avenge his brother's death. They then team up with Hiro's friends to form a team of high-tech heroes.",
    genre: ["Animation", "Action", "Adventure"],
  },

  {
    src: DarkKnight,
    title: "The Dark Knight",

    desc: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
    genre: ["Action", "Crime", "Drama"],
  },
  {
    src: BladeRunner,
    title: "Blade Runner 2049",

    desc: "K, an officer with the Los Angeles Police Department, unearths a secret that could create chaos. He goes in search of a former blade runner who has been missing for over three decades.",
    genre: ["Mystery", "Sci-Fi", "Thriller"],
  },
  {
    src: DCLegends,
    title: "DC Legends of Tomorrow",

    desc: "Rip Hunter, a time traveller, comes to know of Vandal Savage's plan to cause an apocalypse to destroy Earth and time. However, he assembles superheroes to thwart Savage's evil plan and save the world.",
    genre: ["Action", "Adventure", "Drama"],
  },
];
