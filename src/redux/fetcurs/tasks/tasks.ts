import { baseApi } from "@/redux/api/baseApi";

const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (info) => ({
        url: "/tasks",
        method: "POST",
        body: info,
      }),
    }),
    getTask: builder.query({
      query: () => ({
        url: "/tasks",
      }),
    }),
  }),
});
export const { useAddTaskMutation,useGetTaskQuery } = tasksApi;
