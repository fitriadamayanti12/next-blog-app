const initialState = {
  users: [],
  currentPage: 1,
  showModal: false,
  selectedUser: null,
  name: "",
  email: "",
  gender: "",
  status: "",
  errorMessage: "",
  successMessage: "",
  searchText: "",
  totalPages: 6,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "CREATE_OR_UPDATE_USER":
      return {
        ...state,
        successMessage: action.payload.message,
        errorMessage: "",
      };
    case "DELETE_USER":
      return {
        ...state,
        successMessage: action.payload.message,
        errorMessage: "",
      };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

export default userReducer;
