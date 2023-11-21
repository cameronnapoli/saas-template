// import { toast } from 'react-hot-toast';

// import { track } from './amplitude';
// import api from './api';

// export const translateContextToast = async (
//   text: string,
//   context: string,
//   nativeLanguage: string,
//   targetLanguage: string,
//   onSuccess?: () => void,
//   onError?: (error: any) => void,
//   onTokenLimitExceeded?: () => void,
// ) => {
//   track(
//     'Translated Word',
//     {
//       text,
//       context,
//       nativeLanguage,
//       targetLanguage,
//     }
//   );

//   const promise = new Promise<string>((resolve, reject) => {
//     api.post(
//       'translate/context',
//       {
//         text,
//         context,
//         targetLanguage,
//         nativeLanguage,
//       },
//       true,
//     ).then((response: any) => {
//       onSuccess?.();
//       resolve(response.data?.message);
//     }).catch((err) => {
//       if (err.code === 'TOKEN_LIMIT_EXCEEDED') {
//         onTokenLimitExceeded?.();
//       }
//       onError?.(err);
//       reject('Failed to translate.');
//     });
//   });

//   toast.promise(
//     promise,
//     {
//       loading: '...',
//       success: (msg: string) => (
//         <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
//           <div style={{ fontWeight: 700 }}>{text}</div>
//           <div>{msg}</div>
//           <div style={{ textTransform: 'uppercase', opacity: 0.3, fontSize: 12 }}>
//             Contextual Translation
//           </div>
//         </div>
//       ),
//       error: (msg: string) => msg,
//     },
//     {
//       success: {
//         icon: '📖',
//         duration: 10000,
//       },
//     }
//   );
// };