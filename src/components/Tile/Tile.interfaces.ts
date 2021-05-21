export interface Props {
  id: string,
  index: number,
  isDiscovered?: boolean,
  isSelected?: boolean,
};

export interface State {
  onClick: Function,
};
