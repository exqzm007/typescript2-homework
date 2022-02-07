// Задание второго уровня 1
// Есть объединение (юнион) типов заказов в различных состояниях
// и функция filterOnlyInitialAndInWorkOrder которая принимает заказы в любых состояниях
// А возвращает только initial и inWork
// Нужно заменить FIXME на правильный тип вычисленный на основе Order

type Order =
  | {
      state: "initial";
      sum: number;
    }
  | {
      state: "inWork";
      sum: number;
      workerId: number;
    }
  | {
      state: "buyingSupplies";
      sum: number;
      workerId: number;
      suppliesSum: number;
    }
  | {
      state: "producing";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
    }
  | {
      state: "fullfilled";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
      fullfillmentDate: Date;
    };

type OrderStates = Pick<Order, 'state'>['state'];
type ExtractedOrderStates = Extract<OrderStates, "initial" | "inWork">;
type FIXME<A, ActionType> = A extends { state: ActionType } ? A : never;

export const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME<Order, ExtractedOrderStates> | null => {
  if (order.state === "initial" || order.state === "inWork") {
    return order;
  }

  return null;
};
