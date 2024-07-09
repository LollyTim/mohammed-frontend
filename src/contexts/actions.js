// src/contexts/actions.js
export const setEditItem = (dispatch, item) => {
  dispatch({ type: "SET_EDIT_ITEM", payload: item });
};

export const clearEditItem = (dispatch) => {
  dispatch({ type: "CLEAR_EDIT_ITEM" });
};

export const fetchData = async (dispatch, type) => {
  try {
    const response = await fetch(
      `https://mohammedalsolami-backend.onrender.com/api/${type}`
    );
    const data = await response.json();
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
};

export const deleteItem = async (dispatch, type, id) => {
  try {
    await fetch(
      `https://mohammedalsolami-backend.onrender.com/api/${type}/${id}`,
      {
        method: "DELETE",
      }
    );
    dispatch({ type: "DELETE_ITEM_SUCCESS", payload: id });
  } catch (error) {
    console.error(error.message);
  }
};
