export default function calcDate(sentAt) {
  const yearOfSentAt = Number(sentAt.split(" ")[0]);
  const monthOfSentAt = Number(sentAt.split(" ")[1]);
  const dayOfSentAt = Number(sentAt.split(" ")[2]);
  const hourOfSentAt = Number(sentAt.split(" ")[3]);
  const minuteOfSentAt = sentAt.split(" ")[4];

  const dateOfSentAt = new Date(yearOfSentAt, monthOfSentAt - 1, dayOfSentAt);
  const today = new Date();

  const termDay = Math.floor((today - dateOfSentAt) / 86400000);

  if (termDay === 0) return `${hourOfSentAt}:${minuteOfSentAt}`;

  if (termDay === 1) return `昨日 ${hourOfSentAt}:${minuteOfSentAt}`;

  if (yearOfSentAt !== today.getFullYear())
    return `${yearOfSentAt}/${monthOfSentAt}/${dayOfSentAt} ${hourOfSentAt}:${minuteOfSentAt}`;

  return `${monthOfSentAt}/${dayOfSentAt} ${hourOfSentAt}:${minuteOfSentAt}`;
}
