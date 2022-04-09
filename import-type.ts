import type { IMove } from "dataforged/dist";
import { SourceTitle } from "dataforged/dist";

const move: IMove = {
  $id: "Moves / Adventure / XYZ",
  Category: "Moves / Adventure",
  Name: "XYZ",
  Text: "Blah blah blah.",
  Source: {
    Title: SourceTitle.IronswornBonusAssets,
  },
  Display: { Title: "XYZ" },
  Trigger: {
    $id: "Moves / Adventure / XYZ / Trigger",
    Text: "When you do a thing…",
  },
};

console.log(move);
