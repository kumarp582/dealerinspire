const server_base_url = 'http://localhost:8000/api/';

export const searchUserUrl = (value) => `${server_base_url}users?q=${value}`;
export const getUserDetailUrl = (userId) => `${server_base_url}users?user_id=${userId}`;
export const getAllUsersUrl = () => `${server_base_url}users`;

export const defaultImageUrl = "https://a5.behance.net/853b78776abeee4c58ba4a54dfb1d2a2cfb67a5e/img/profile/no-image-276.jpg?cb=264615658" ;