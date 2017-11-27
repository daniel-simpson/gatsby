"use strict";

//TODO: ADD TESTS TO ENSURE THIS IS SYMMETRIC

const getContentfulPluginState = store => {
  if (store.getState().status.plugins && store.getState().status.plugins[`gatsby-source-contentful`] && store.getState().status.plugins[`gatsby-source-contentful`] && store.getState().status.plugins[`gatsby-source-contentful`]) {

    return store.getState().status.plugins[`gatsby-source-contentful`];
  }

  return {};
};

exports.getContentfulPluginStateForSpace = (store, spaceId) => getContentfulPluginState(store)[spaceId] || {};

exports.setContentfulPluginStateForSpace = ({ boundActionCreators, store }, spaceId, newState) => {
  const {
    setPluginStatus
  } = boundActionCreators;

  const oldState = getContentfulPluginState(store);

  setPluginStatus(Object.assign({}, oldState, {
    [`${spaceId}`]: Object.assign({}, oldState[spaceId], newState)
  }));
};