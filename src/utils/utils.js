export const handleLogout = () => {
  localStorage.setItem("accessToken", "");
  location.reload();
};
