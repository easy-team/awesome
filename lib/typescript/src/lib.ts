
export function createElement(tagName: string, text: string, attributes: any) {
  const tag = document.createElement(tagName);
  tag.innerHTML = text;
  if (attributes) {
    Object.keys(attributes).forEach(key => {
      tag[key] = attributes[key];
    })
  }
  document.body.appendChild(tag);
}

export async function delay(millsecond: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millsecond);
  });
}

export function formatDate(obj: any, format: string = 'yyyy-MM-dd hh:mm'): string {
  if (/ios|ipad|iphone|Macintosh/gi.test(navigator.userAgent) && typeof obj === 'string') {
    obj = (obj || '').replace(/-/g, '/');
  }

  format = new Date(obj).toLocaleDateString() === new Date().toLocaleDateString() ? 'hh:mm' : format;

  let date = obj || new Date();
  if (obj && obj.toString !== '[object Date]') {
    if (isNaN(obj)) {
      date = new Date(obj);
    } else {
      date = new Date();
      date.setTime(obj);
    }
  }

  const o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds() // millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length));
    }
  }
  return format;
}