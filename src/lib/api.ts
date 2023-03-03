const API_BASE_URL = "https://apx-pets-lost-m7.onrender.com"; //url del server

//////////////aqui va la logica de la coneccion de la api exportando funciones como las de signup signup todas las de la apif
export function authMail(email: string) {
  return fetch(API_BASE_URL + "/auth/email", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });
}
////////////////////////////////
export function singIng(password: string, email: string) {
  return fetch(API_BASE_URL + "/auth/token", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password: password,
    }),
  });
}
//////////

export async function signUp(
  fullname: string,
  password: string,
  email: string
) {
  return fetch(API_BASE_URL + "/auth", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      fullname: fullname,
      password: password,
    }),
  });
}
export async function getAnimalesCerca(params: { lat: number; lng: number }) {
  const res = await fetch(
    `${API_BASE_URL}/animales-cerca?lat=${params.lat}&lng=${params.lng}`,
    {
      method: "GET",
    }
  );
  return { response: res.json(), status: res.status };
}
export function sendEmail(nombre, telefono, dato, email) {
  fetch(API_BASE_URL + "/email", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      telefono,
      dato,
      email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {});
}
export function sendFormPetLost(fullname, img, petLostLocation, token, email) {
  fetch(API_BASE_URL + "/animal", {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      fullname,
      lat: petLostLocation.lat,
      lng: petLostLocation.lng,
      img,
      email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {});
}
export async function getAnimalesDeUnUser(token) {
  const res = await fetch(`${API_BASE_URL}/animales-reportados`, {
    method: "GET",

    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return { response: res.json(), status: res.status };
}
export async function editAnimal(
  algoliaAnimalId,
  fullname,
  mascotaLocation,
  img,
  token,
  email
) {
  const res = await fetch(`${API_BASE_URL}/editar/animal`, {
    method: "put",

    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      algoliaAnimalId,
      fullname,
      lat: mascotaLocation.lat,
      lng: mascotaLocation.lng,
      img,
      email,
    }),
  });
  return { response: res.json(), status: res.status };
}
export async function deletAnimal(algoliaAnimalId, token) {
  const res = await fetch(`${API_BASE_URL}/eliminar/animal`, {
    method: "put",

    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      algoliaAnimalId,
    }),
  });
  return { response: res.json(), status: res.status };
}
export async function editUser(newName, newPass, token) {
  const res = await fetch(`${API_BASE_URL}/editar/user`, {
    method: "put",

    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      newName,
      newPass,
    }),
  });
  return { response: res.json(), status: res.status };
}
