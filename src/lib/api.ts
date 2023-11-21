// import { auth } from './firebaseClient';
import { qs } from './util';

export class CodedError extends Error {
  public code: string;

  constructor(message: string, code?: string) {
    super(message);
    this.code = code || 'UNKNOWN';
  }
}

const get = async <T>(
  path: string,
  params?: Record<string, string>,
  withToken?: boolean,
): Promise<T | null> => {
  let authToken: string | null = null;
  // if (withToken) {
  //   if (!auth.currentUser) {
  //     throw new Error('No user');
  //   }
  //   authToken = await auth.currentUser.getIdToken();
  // }

  try {
    const response = await fetch(
      qs(`/api/${path}`, params || {}),
      {
        cache: 'no-cache',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
      }
    );
    return response.json() as T;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const post = async <T>(
  path: string,
  body: Record<string, any>,
  withToken?: boolean,
): Promise<T> => {
  let authToken: string | null = null;
  // if (withToken) {
  //   if (!auth.currentUser) {
  //     throw new Error('No user');
  //   }
  //   authToken = await auth.currentUser.getIdToken();
  // }

  const response = await fetch(
    `/api/${path}`,
    {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
      body: JSON.stringify(body),
    }
  );
  if (response.status >= 300 || response.status < 200) {
    let data;
    try {
      data = await response.json();
      // eslint-disable-next-line no-empty
    } catch {}
    if (data?.errorCode) {
      throw new CodedError(data.message, data.errorCode);
    } else if (data?.message) {
      throw new Error(data.message);
    } else {
      throw new Error(`Bad request ${response.status}`);
    }
  }
  return response.json() as T;
};

const download = async (
  path: string,
  resultName: string,
  params?: Record<string, string>,
  withToken?: boolean,
) => {
  let authToken: string | null = null;
  // if (withToken) {
  //   if (!auth.currentUser) {
  //     throw new Error('No user');
  //   }
  //   authToken = await auth.currentUser.getIdToken();
  // }

  try {
    const response = await fetch(
      qs(`/api/${path}`, params || {}),
      {
        cache: 'no-cache',
        headers: {
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
      }
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = resultName;

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);

  } catch (e) {
    console.error(e);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  post,
  download,
};