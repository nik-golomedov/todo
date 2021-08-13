export const SWITCH_FILTER_STATUS = "SWITCH_FILTER_STATUS";

export const switchFilterStatus = (payload) => {
  return {
    type: SWITCH_FILTER_STATUS,
    payload,
  };
};
