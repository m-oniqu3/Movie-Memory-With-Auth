import Avatar from "./../../assets/avatar_d7bc_2880x1800.jpg";
import Deadpool from "./../../assets/deadpool_7c01_2880x1800.jpg";
import DrStrange from "./../../assets/doctor-strange_ea77_2880x1800.jpg";
import JohnWick from "./../../assets/john-wick_84be_2880x1800.jpg";
import SpiderMan from "./../../assets/spider-man-homecoming_f8ff_2880x1800.jpg";
import SpiritedAway from "./../../assets/spirited-away_45c3_2880x1800.jpg";
import MazeRunner from "./../../assets/the-maze-runner_8cae_2880x1800.jpg";
import Thor from "./../../assets/thor-ragnarok_c5ef_2880x1800.jpg";
import Transformers from "./../../assets/transformers-the-last-knight_f616_2880x1800.jpg";
import WW from "./../../assets/wonder-woman_b232_2880x1800.jpg";
import { Film } from "./../../types/Film";

export const movies: Film[] = [
  {
    src: JohnWick,
    title: "John Wick : Chapter 1",
    desc: "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife.",
    genre: ["Action", "Crime", "Thriller", "Mystery"],
  },
  {
    src: Avatar,
    title: "Avatar",
    desc: "Jake Sully, a paraplegic former Marine, replaces his brother on the Na'vi inhabited Pandora for a corporate mission. He is accepted by the natives as one of their own.",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
  },
  {
    src: Deadpool,
    title: "Deadpool",
    desc: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
    genre: ["Action", "Adventure", "Comedy"],
  },
  {
    src: DrStrange,
    title: "Doctor Strange",
    desc: "After a car accident, a talented neurosurgeon is forced to look for healing and hope in a world of despair. He then learns the hidden truth of the mystic arts from an ancient sorcerer.",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
  },

  {
    src: SpiderMan,
    title: "Spider-Man : Homecoming",
    desc: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    src: Thor,
    title: "Thor Ragnarok",
    desc: "Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.",
    genre: ["Action", "Adventure", "Fantasy"],
  },
  {
    src: WW,
    title: "Wonder Woman",
    desc: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
    genre: ["Action", "Adventure", "Fantasy"],
  },
  {
    src: SpiritedAway,
    title: "Spirited Away",
    desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
    genre: ["Animation", "Adventure", "Family"],
  },
  {
    src: Transformers,
    title: "Transformers: The Last Knight",
    desc: "A deadly threat from Earth's history reappears and a hunt for a lost artifact takes place between Autobots and Decepticons, while Optimus Prime encounters his creator in space.",
    genre: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    src: MazeRunner,
    title: "The Maze Runner",
    desc: "Thomas loses his memory and finds himself trapped in a massive maze called the Glade. He and his friends try to escape from the maze and eventually learn that they are subjects of an experiment.",
    genre: ["Action", "Mystery", "Sci-Fi"],
  },
];
