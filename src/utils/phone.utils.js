export const prettyPhoneFormat = (phone) =>
  phone.replace(/\B(?=(\d{2})+(?!\d))(?<!\+3)|\B(?<=\+33)/g, " ");

export const phoneInternationalization = (phone) => phone.replace("0", "+33");
