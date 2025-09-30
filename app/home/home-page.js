import { Application, Observable } from "@nativescript/core";

var context = new Observable();

export function onNavigatingTo(args) {
  const page = args.object;

  const currency_items = [
    { country: "Indonesia", currency: "Rupiah", symbol: "Rp" },
    { country: "Malaysia", currency: "Ringgit", symbol: "RM" },
    { country: "Singapore", currency: "Singapore Dollar", symbol: "S$" },
    { country: "Thailand", currency: "Baht", symbol: "฿" },
    { country: "Philippines", currency: "Philippine Peso", symbol: "₱" },
    { country: "Vietnam", currency: "Vietnamese Dong", symbol: "₫" },
    { country: "Brunei", currency: "Brunei Dollar", symbol: "B$" },
    { country: "Cambodia", currency: "Riel", symbol: "៛" },
    { country: "Laos", currency: "Kip", symbol: "₭" },
    { country: "Myanmar", currency: "Kyat", symbol: "K" },
    { country: "Timor Leste", currency: "United States Dollar", symbol: "$" }, // Timor Leste
  ];

  context.set("currency_items", currency_items);

  page.bindingContext = context;
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView();
  sideDrawer.showDrawer();
}

export function onSelectedItem(args) {
  let index = args.object?.selectedIndex;
  if (index !== undefined) {
    context.set("currency", context.get("currency_items")[index].currency);
    context.set("currency_symbol", context.get("currency_items")[index].symbol);
    context.set(
      "currency_country",
      context.get("currency_items")[index].country,
    );
  }
}

export function openBottomSheet(args) {
  const mainView = args.object;
  const bsContext = {};
  const fullscreen = true;

  mainView.showBottomSheet({
    view: "~/bottom-sheet-views/test-view/test-view",
    context: bsContext,
    dismissOnBackButton: true,
    dismissOnBackgroundTap: true,
    dismissOnDraggingDownSheet: true,
    closeCallback: (data) => {
      console.log(data);
    },
    fullscreen,
  });
}
