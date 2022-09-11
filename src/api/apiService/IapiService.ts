import { IPost } from "../../types/Post";
import { IUser } from "../../types/User";

export interface IApiService {
  getPosts: () => Promise<IPost[]>;
  login: (login: string, password: string) => Promise<IUser>;
}
