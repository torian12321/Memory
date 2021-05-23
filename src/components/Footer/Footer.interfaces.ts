export interface Props {
  className?: string,
  gamePaused?: boolean,
  iniTime?: Date,
  score?: number,
};

export interface State {
  onTimeEnds: Function,
};
