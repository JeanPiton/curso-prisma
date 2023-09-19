export type Post = {
  id: number;
  username: string;
  title: string;
  body: string;
  createAt: Date;
}

export type ApplicationError = {
  name: string;
  message: string;
};