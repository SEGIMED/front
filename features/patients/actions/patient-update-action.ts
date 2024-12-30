'use sever';

const updatePatient = async (formData: FormData) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const dateOfBirth = formData.get('dateOfBirth');
  const gender = formData.get('gender');
  const email = formData.get('email');
  const celphone = formData.get('celphone');
  const idType = formData.get('idType');
  const idNumber = formData.get('idNumber');
  const address = formData.get('address');
  const country = formData.get('country');
  const state = formData.get('state');
  const city = formData.get('city');
  const postalCode = formData.get('postalCode');
  const addressNumber = formData.get('addressNumber');
  const departamentNumber = formData.get('departamentNumber');

  console.log({
    firstName,
    lastName,
    dateOfBirth,
    gender,
    email,
    celphone,
    idType,
    idNumber,
    address,
    country,
    state,
    city,
    postalCode,
    addressNumber,
    departamentNumber
  });
};

export default updatePatient;
