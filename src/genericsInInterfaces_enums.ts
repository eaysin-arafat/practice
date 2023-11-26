import { IsPlayer } from "./interfaces/isPlayer.js";

enum ResponseType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBEIDDEN,
}

interface APIResponse<T> {
  status: number;
  type: ResponseType;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: ResponseType.UNAUTHENTICATED,
  data: {
    name: "text",
    something: 300,
  },
};

console.log(response1);
