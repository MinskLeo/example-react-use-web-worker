/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */

import { IUser } from "../data/users";
import type { SortType } from "./constants";
import { IBaseWorkerResponse } from "./useWebWorker";

export interface IWorkerRequest {
  users: IUser[];
  type: SortType;
}

export interface IWorkerResponse extends IBaseWorkerResponse<IUser[]> {}

export default () => {
  self.addEventListener("message", (e: MessageEvent<IWorkerRequest>) => {
    try {
      const { users, type } = e.data;

      console.time("Worker run");

      let result: IUser[] = [];
      if (type === "asc") {
        result = users.sort((a, b) => a.commentCount - b.commentCount);
      } else {
        result = users.sort((a, b) => b.commentCount - a.commentCount);
      }
      console.timeEnd("Worker run");

      return postMessage({ result } as IWorkerResponse);
    } catch (error) {
      return postMessage({ error } as IWorkerResponse);
    }
  });
};
