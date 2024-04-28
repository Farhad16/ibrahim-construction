// api.ts (or wherever you prefer to keep your API calls)

import axios from "axios";

interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: EmailFormData) => {
  try {
    const response = await axios.post(
      "http://localhost:4200/send-email",
      formData
    );
    return response.data; // Assuming the server sends some data back
  } catch (error) {
    throw error;
  }
};
