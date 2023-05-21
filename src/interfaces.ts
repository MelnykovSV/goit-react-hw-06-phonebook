export interface IContact {
  name: string;
  number: string;
  id: string;
}

export interface IState {
  contacts: IContact[];
  filter: string;
}

export interface IFormData {
  name: string;
  number: string;
}

export interface IContactProps {
  name: string;
  number: string;
  id: string;
}

export interface IContactsListProps {
  children: JSX.Element[];
}

export interface IFormProps {
  formSubmit: (data: IContact) => boolean;
}

export interface IContact {
  name: string;
  number: string;
  id: string;
}

export interface ContactsState extends Array<IContact> {}
