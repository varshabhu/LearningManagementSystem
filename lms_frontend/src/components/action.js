// export const setEmail = (email) => {
//     return {
//       type: 'SET_EMAIL',
//       payload: email,
//     };
//   };
//   export const setName = (name) => {
//     return {
//       type: 'SET_NAME',
//       payload: name,
//     };
//   };
  
//   export const setPass = (pass) => {
//     return {
//       type: 'SET_PASS',
//       payload: pass,
//     };
//   };
  
//   export const setCheckPass = (checkpass) => {
//     return {
//       type: 'SET_CHECKPASS',
//       payload: checkpass,
//     };
//   };

export const setEmail = (email) => ({ type: 'SET_EMAIL', payload: email });
export const setPass = (pass) => ({ type: 'SET_PASS', payload: pass });
export const setName = (name) => ({ type: 'SET_NAME', payload: name });