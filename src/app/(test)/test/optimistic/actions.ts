'use server';

export const send = async (message: string) => {
  return { message: `${message}: new message` };
};
