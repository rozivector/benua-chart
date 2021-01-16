
/* global Chart*/ //set global chart.js untuk web-hosting

// buat objek dengan data populasi di dunia
const data = {
  'Afrika': 1216,
  'Asia': 4436,
  'Eropa': 738,
  'Amerika Utara': 579,
  'Oseania': 39.9,
  'Amerika Selatan': 422
};

// gunakan array untuk populasi benua untuk digunakan sebagai label pada chart
const benua = Object.keys(data);

// gunakan array untuk populasi benua untuk digunakan sebagai nilai data dengan looping
// melalui benua dan menambahkan setiap nilai baru ke array
const populasi = [];
benua.forEach((benua) => {
  populasi.push(data[benua]);
});

// initialisasi chart dan letakan ke dalam divisi 'barChart'
const bar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(bar, {
  type: 'bar', // buat chart bar
  data: {
    labels: benua, // gunakan array untuk populasi benua untuk setiap label 
    datasets: [{
      label: 'Populasi (dalam jutaan)',
      data: populasi, // gunakan array untuk populasi benua untuk menggambar bar
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // buat bars merah bening
      borderColor: 'rgba(255, 99, 132, 1)', // buat pinggiran tebal merah
      borderWidth: 1 // set border lebar ke 1 pixel
    }]
  },
  options: {
    // koordinat y harus di mulai dari 0
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
  }
});

// initialisasi chart dan letakan ke dalam divisi 'pieChart'
const pie = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pie, {
  type: 'pie', // make it a pie chart
  data: {
    labels: benua, // gunakan array untuk populasi benua untuk setiap label 
    datasets: [{
      data: populasi, // gunakan array untuk populasi benua untuk menggambar potongan pie
      // set setiap potongan pie ke warna bening
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      // set pinggiran di setiap potongan pie ke warna yang sama sebagai background
      // potongan pie
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1 // set border lebar 1 pixel
    }]
  }
});