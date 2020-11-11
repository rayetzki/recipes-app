import axios from "axios";
import { API_URL } from "../../config/API";

export const getRecipes = (page, userId = null) => {
  return axios
    .get(`${API_URL}/recipes`, {
      params: {
        userId: userId || null,
        page: page || null
      }
    })
    .then(recipesResponse => {
      if (recipesResponse.status === 200) {
        return recipesResponse.data;
      }
    })
    .catch(error => Promise.reject(error));
};

export const getRecipeById = id => {
  return axios
    .get(`${API_URL}/recipes?id=${id}`)
    .then(recipeResponse => {
      if (recipeResponse.status === 200) {
        return recipeResponse.data;
      }
    })
    .catch(error => console.error(error));
};