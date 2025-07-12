const Routes = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (_id:number) => `/profile/${_id}`,
  TAGS: (id:string) => `/tags/${id}`,
  ASK_QUESTION: "/ask-question",
};
export default Routes;
