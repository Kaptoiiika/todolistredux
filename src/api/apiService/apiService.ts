import axios, { AxiosInstance } from "axios";
import { IPost } from "../../types/Post";
import { IUser } from "../../types/User";

import { IApiService } from "./IapiService";

export class ApiService implements IApiService {
  private readonly axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: `https://jsonplaceholder.typicode.com`,
      timeout: 10000,
      headers: {},
    });

    this.axios.interceptors.request.use((config) => config);

    this.axios.interceptors.response.use(
      (r) => r,
      (err) => err
    );
  }

  async login(login: string, password: string): Promise<IUser> {
    // await this.axios.post("login", { login, password })
    if (login !== "admin" && password !== "admin")
      throw new Error("Incorrect login or password");

    const user = await this.getUserById(1);

    return user;
  }

  async getPosts(): Promise<IPost[]> {
    const { data: posts } = await this.axios.get<IPost[]>("/posts");

    return posts;
  }

  async getUserById(id: number | string): Promise<IUser> {
    const { data: user } = await this.axios.get<IUser>(`/users/${id}`);

    return user;
  }
}

export const apiClient = new ApiService();
