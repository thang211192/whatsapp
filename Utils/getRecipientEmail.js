const getRecipientEmail = (users, userLogged) => 
    users?.filter((userToFilter) => userToFilter !== userLogged?.email)[0];
export default getRecipientEmail;
