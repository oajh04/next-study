export default function formatDistance(params: Date) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date(params);
    let diff = (new Date().getTime() - date.getTime()) / 1000,
      day_diff = Math.floor(diff / 86400);
    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
      return `Updated on ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    return (
      (day_diff == 0 &&
        ((diff < 60 && "now") ||
          (diff < 120 && "a minute ago") ||
          (diff < 3600 && Math.floor(diff / 60) + "minutes ago") ||
          (diff < 7200 && "a hour ago") ||
          (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
      (day_diff == 1 && "a day ago") ||
      (day_diff < 31 && day_diff + " days ago")
    );
  }