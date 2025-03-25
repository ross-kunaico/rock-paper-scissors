import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { GameContainer } from "~/components/game/game-container";

export default component$(() => {
  return (
    <>
      <div class="container">
        <GameContainer />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Rock, Paper, Scissors",
  meta: [
    {
      name: "description",
      content: "Rock, Paper, Scissors game",
    },
  ],
};
