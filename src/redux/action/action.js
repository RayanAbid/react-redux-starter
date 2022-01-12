export const firstAction = (data) => async (dispatch) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://randomuser.me/api/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: "firstAction",
        data: result.results,
      });
    })
    .catch((error) => console.log("error", error));
};
