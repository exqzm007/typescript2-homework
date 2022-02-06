
const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];
type ExcludedStates = Exclude<OrderState, "buyingSupplies" | "producing">;
type FIXME = Array<ExcludedStates>;

// Hint: type guards
export const getUserOrderStates = (orderStates: ReadonlyArray<OrderState>): FIXME =>
  orderStates.filter(
    (state): state is ExcludedStates => state !== "buyingSupplies" && state !== "producing"
  );

  console.log(getUserOrderStates(orderStates))
