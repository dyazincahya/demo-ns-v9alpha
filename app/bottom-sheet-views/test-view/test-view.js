import { fromObject } from "@nativescript/core";

export function onLoaded(args) {
  const page = args.object;

  page.on("shownInBottomSheet", (args) => {
    setupContext(args.context);

    page.bindingContext = bindingContext;
  });
}

let bindingContext;
function setupContext(openContext) {
  bindingContext = fromObject({
    ...openContext,
    close(args) {
      const button = args.object;
      button.closeBottomSheet({ bsClosed: true });
    },
  });
}
