const start = document.getElementById('start_date');
const end = document.getElementById('end_date');
const today = new Date().toISOString().split('T')[0];

start.value = today;
start.min = today;

const tomorowDate = (jour) => {
  let day = new Date(jour);
  day.setDate(day.getDate() + 1);
  let tomorow = day.toISOString().split('T')[0];
  end.value = tomorow;
  end.min = tomorow;
}

tomorowDate(today)

start.addEventListener('change', ({target}) => {
  let day = new Date(target.value);
  day.setDate(day.getDate() + 1);
  let tomorow = day.toISOString().split('T')[0];
  end.value = tomorow;
  end.min = tomorow;
});

const bookingTotal = () => {
  let date1 = new Date(start.value);
  let date2 = new Date(end.value);
  let diffTime = Math.abs(date2 - date1);

  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
  let nuitPrix = document.getElementById('nightPrice').innerHTML;

  let total = diffDays * nuitPrix;
  document.getElementById('total').innerHTML = total;
}

start.addEventListener('change', () => bookingTotal());
end.addEventListener('change', () => bookingTotal());
bookingTotal();