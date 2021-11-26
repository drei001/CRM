import { UserInputError } from 'apollo-server-errors';

type globalObjectList = {
  id: number;
};

export const cursorPagination = (
  list: globalObjectList[],
  args: { first: number; after: string }
) => {
  let first = 5;
  if (args.first !== undefined) {
    const min_value = 1;
    const max_value = 25;

    if (args.first < min_value || args.first > max_value) {
      throw new UserInputError(
        `Invalid limit value (min value: ${min_value}, max: ${max_value})`
      );
    }
  }
  first = args.first;

  let after = 0;

  if (args.after !== undefined) {
    const index = list.findIndex(
      (item: { id: number }) => item.id.toString() === args.after
    );
    if (index === -1) {
      throw new UserInputError(`Invalid after value: cursor not found`);
    }
    after = index + 1;
    if (after === list.length) {
      throw new UserInputError(
        `Invalid after value: no items after provided cursor`
      );
    }
  }

  const leadsList = list.slice(after, after + first);

  const lastLead = leadsList[leadsList.length - 1];

  const data = {
    pageInfo: {
      endCursor: lastLead.id.toString(),
      hasNextPage: after + first < list.length,
    },
    edges: leadsList.map((item: { id: number }) => ({
      cursor: item.id.toString(),
      node: item,
    })),
  };

  return data;
};
