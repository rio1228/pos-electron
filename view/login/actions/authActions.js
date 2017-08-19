import * as types from './actionTypes';

export function addId(id) {{/*{type: types.INCREMENT} がactionのtypeを作成。これ(action)とstateをstoreへ送る*/}
  return {
    type: types.ADD_ID,
    id:id
  };
}

export function addPass(pass) {{/*{type: types.DECREMENT} がactionのtypeを作成。これ(action)とstateをstoreへ送る*/}
  return {
    type: types.ADD_PASS,
    pass:pass
  };
}
