interface Error {
  status: number;
  message: string;
}

export interface CustomPost {
  message: string;
  error: Error;
}
