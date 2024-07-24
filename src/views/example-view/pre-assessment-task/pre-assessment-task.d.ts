export interface IRawDataObject {
  count?: number
  location?: string[]
  salary?: number
  timestamp?: string
}

type TFormattedDataObject = {
  [P in keyof IRawDataObject]: string;
};
