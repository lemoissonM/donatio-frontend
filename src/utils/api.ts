import axios from "axios";

const createApi = (url: string): {
    [key: string]: (id?: string) => Promise<any>;
} => {
  return new Proxy({}, {
    get(target, key: string) {
      return async function(id = "") {
        await new Promise(resolve => setTimeout(resolve, 5000));
        const response = await fetch(`${url}/${key}/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (response.ok) {
          return response.json();
        }
        return Promise.resolve({ error: "Malformed Request" })
      }
    }
  })
}

export const api = createApi('http://localhost:3001/api')

export const postApi = async (url: string, body: any) => {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  return axios.post(`http://localhost:3001/api/${url}`,body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    }
  })
}

export const deleteApi = async (url: string) => {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return axios.delete(`http://localhost:3001/api/${url}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'content-type': 'application/json',
    }
  })
}

export const uploadImage = (image: any) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', 'jzmb4u1o');
  formData.append('cloud_name', 'donatiog');

  return axios.post('https://api.cloudinary.com/v1_1/donatiog/image/upload', formData);
}