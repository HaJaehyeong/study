'use server';

export const create = async (formData: FormData) => {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };

  console.log(rawFormData);
};

export const updateUser = async (userId: string, formData: FormData) => {
  console.log(userId);
};
