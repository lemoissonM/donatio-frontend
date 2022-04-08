import axios from 'axios';

const backendUrl = process.env.API_URL || 'http://localhost:3000';

const createApi = (
  url: string,
): {
  [key: string]: (id?: string) => Promise<any>;
} => {
  return new Proxy(
    {},
    {
      get(target, key: string) {
        return async function (id = '') {
          const response = await fetch(`${url}/${key}/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          if (response.ok) {
            return response.json();
          }
          return Promise.resolve({ error: 'Malformed Request' });
        };
      },
    },
  );
};

export const api = createApi(backendUrl);

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const postApi = async (url: string, body: any) => {
  return axios.post(`${backendUrl}/${url}`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    },
  });
};

export const patchApi = async (url: string, body: any) => {
  return axios.patch(`${backendUrl}/${url}`, body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    },
  });
};

export const deleteApi = async (url: string) => {
  return axios.delete(`${backendUrl}/${url}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    },
  });
};

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || '';
const cloudPreset = process.env.CLOUDINARY_CLOUD_PRESET || '';
const cloudUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload` || '';

export const uploadImage = (image: any) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', cloudPreset);
  formData.append('cloud_name', cloudName);

  return axios.post(cloudUrl, formData);
};
