export interface FormData {
  fields: {
    firstName: string;
    lastName: string;
    gender: string;
    nationalCode: string;
    birth: Date | null;
  }[];
}
