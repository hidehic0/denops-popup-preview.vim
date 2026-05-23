import type { Denops } from "@denops/std";
import { DocResponce, EventHandler } from "./event.ts";

export function main(denops: Denops) {
  const handler = new EventHandler();
  denops.dispatcher = {
    async onCompleteChanged(): Promise<void> {
      await handler.onCompleteChanged(denops);
    },
    async onInsertEnter(): Promise<void> {
      await handler.onInsertEnter(denops);
    },
    async respond(arg1: unknown): Promise<void> {
      await handler.onDocResponce(denops, arg1 as DocResponce);
    },
  };
}
