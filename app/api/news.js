import API from './api';

export const getAllNews = async () => {
  return await API({
    method: 'GET',
  })
    .then(result => {
      return result.data;
    })
    .catch(err => {
      return err;
    });
};
