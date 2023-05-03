export interface IContact {
  name: string;
  number: string;
  id: string;
}

export interface IState {
  contacts: IContact[];
}

export interface IContactProps {
  name: string;
  number: string;
  id: string;
  deleteHandler: (id: string) => void;
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
