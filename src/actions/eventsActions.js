import {
  FETCH_EVENTS_BEGINS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE
} from "./types";
import { getDate } from "utils";
import { getEvents } from "api";
import orderBy from "lodash/orderBy";

export const fetchEvents = () => (dispatch, getState) => {
  const isFetched = getState().events.isFetched;

  if (!isFetched) {
    dispatch({ type: FETCH_EVENTS_BEGINS });
    getEvents()
      .then(res => {
        let filtered = res.data.filter(e => e.acf.data_inizio >= getDate());
        let ordered = orderBy(filtered, "acf.data_inizio");

        dispatch({
          type: FETCH_EVENTS_SUCCESS,
          payload: ordered
        });
      })
      .catch(err =>
        dispatch({
          type: FETCH_EVENTS_FAILURE,
          payload: err
        })
      );
  }
};
