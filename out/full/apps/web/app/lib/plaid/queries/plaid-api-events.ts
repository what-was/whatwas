// /**
//  * @file Defines the queries for the plaid_api_events table.
//  */

// const db = require('../');

// type PlaidApiResponse = {
//   error_code: string;
//   error_type: string;
//   request_id: string;
// };

// /**
//  * Creates a single Plaid api event log entry.
//  *
//  * @param {string} itemId the item id in the request.
//  * @param {string} userId the user id in the request.
//  * @param {string} plaidMethod the Plaid client method called.
//  * @param {Array} clientMethodArgs the arguments passed to the Plaid client method.
//  * @param {Object} response the Plaid api response object.
//  */
// const createPlaidApiEvent = async (
//   itemId: string | undefined,
//   userId: string | undefined,
//   plaidMethod: string | undefined,
//   clientMethodArgs: any[],
//   response: PlaidApiResponse,
// ) => {
//   const {
//     error_code: errorCode,
//     error_type: errorType,
//     request_id: requestId,
//   } = response;
//   const query = {
//     text: `
//       INSERT INTO plaid_api_events_table
//         (
//           item_id,
//           user_id,
//           plaid_method,
//           arguments,
//           request_id,
//           error_type,
//           error_code
//         )
//       VALUES
//         ($1, $2, $3, $4, $5, $6, $7);
//     `,
//     values: [
//       itemId,
//       userId,
//       plaidMethod,
//       JSON.stringify(clientMethodArgs),
//       requestId,
//       errorType,
//       errorCode,
//     ],
//   };
//   await db.query(query);
// };

// export { createPlaidApiEvent };
export {};
