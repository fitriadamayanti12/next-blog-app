export const setUsers = (users) => ({
  type: "SET_USERS",
  payload: users,
});

export const setCurrentPage = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  payload: currentPage,
});

export const createOrUpdateUser = (user) => ({
  type: "CREATE_OR_UPDATE_USER",
  payload: user,
});

export const deleteUserData = (userId) => ({
  type: "DELETE_USER",
  payload: userId,
});

export const setSearchText = (searchText) => ({
  type: "SET_SEARCH_TEXT",
  payload: searchText,
});
