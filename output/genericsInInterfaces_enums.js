var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBEIDDEN"] = 3] = "FORBEIDDEN";
})(ResponseType || (ResponseType = {}));
const response1 = {
    status: 200,
    type: ResponseType.UNAUTHENTICATED,
    data: {
        name: "text",
        something: 300,
    },
};
console.log(response1);
export {};
