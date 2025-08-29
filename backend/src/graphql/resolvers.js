import { createPubSub } from "graphql-yoga";

export const pubsub = createPubSub();

export const EVENTS = {
  EXPENSE_CREATED: "EXPENSE_CREATED"
};

export const resolvers = {
  Subscription: {
    expenseCreated: {
      subscribe: (_, { userId }) =>
        pubsub.subscribe(EVENTS.EXPENSE_CREATED, (payload) => payload.userId === userId),
      resolve: (payload) => payload.expenseCreated
    }
  }
};
