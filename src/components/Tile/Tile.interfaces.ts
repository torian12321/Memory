export interface Props {
  id: string,
  index: number,
  isDiscovered?: boolean,
  isSelected?: boolean,
  imgUrl?: string,
};

export interface State {
  onClick: Function,
};
