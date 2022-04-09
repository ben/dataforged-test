import type { IMove, SourceTitle } from "dataforged/dist";

const move: IMove = {
  $id: "Moves / Adventure / XYZ",
  Category: "Moves / Adventure",
  Name: "XYZ",
  Text: "Blah blah blah.",
  Source: {
    Title: "Ironsworn Assets" as SourceTitle,
  },
  Display: { Title: "XYZ" },
  Trigger: {
    $id: "Moves / Adventure / XYZ / Trigger",
    Text: "When you do a thing…",
  },
};

console.log(move);
