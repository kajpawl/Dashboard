'use strict';

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
            label: "Signups",
            backgroundColor: '#80BFCA',
            borderColor: '#80BFCA',
            data: [ 340, 210, 230, 380, 420, 390, 280, 180, 320, 230 ],
        },
        {
            label: "FTD",
            backgroundColor: '#FF9A38',
            borderColor: '#FF9A38',
            data: [ 410, 190, 300, 280, 440, 120, 230, 500, 340, 310 ],
        },
        {
            label: "Earned",
            backgroundColor: '#74B67A',
            borderColor: '#74B67A',
            data: [ 360, 220, 340, 110, 380, 40, 310, 210, 360, 80 ],
            hidden: true,
        }]
    },
});
