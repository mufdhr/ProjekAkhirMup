let messages = [
  { id: 1, content: 'Hello World' },
  { id: 2, content: 'React is awesome!' },
];

// Pastikan mendeklarasikan fungsi terlebih dahulu
export const getMessages = () => {
  return new Promise((resolve) => {
    resolve(messages);
  });
};

export const getMessage = (id) => {
  return new Promise((resolve) => {
    const message = messages.find((msg) => msg.id === parseInt(id));
    resolve(message);
  });
};

export const createMessage = (newMessage) => {
  return new Promise((resolve) => {
    const id = messages.length ? messages[messages.length - 1].id + 1 : 1;
    messages.push({ id, ...newMessage });
    resolve();
  });
};

export const updateMessage = (id, updatedMessage) => {
  return new Promise((resolve) => {
    messages = messages.map((msg) => (msg.id === parseInt(id) ? { ...msg, ...updatedMessage } : msg));
    resolve();
  });
};

export const deleteMessage = (id) => {
  return new Promise((resolve) => {
    messages = messages.filter((msg) => msg.id !== parseInt(id));
    resolve();
  });
};



