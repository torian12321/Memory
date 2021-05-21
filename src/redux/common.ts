export type Dispatch = (action: Object | Function) => Promise<any>;

export interface Action {
  type: string,
  payload?: {
    [key: string]: any,
  },
};
