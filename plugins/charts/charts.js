 /* Wallet Charts */ 
document.addEventListener("DOMContentLoaded", function() {
      var ctx = document.getElementById("WalletCharts").getContext("2d");
      var gradient = ctx.createLinearGradient(0, 0, 1, 10);
      gradient.addColorStop(0, "rgba(25, 165, 0, 0.1)");
      gradient.addColorStop(1, "rgba(255, 165, 0, 0.1)");
      // Line chart
      new Chart(document.getElementById("WalletCharts"), {
        type: "line",
        data: {
          labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ],
          datasets: [{
            label: "Sales ($)",
            fill: true,
            backgroundColor: gradient,
            borderColor: "#ED5846",
            tension: 0.4,
            data: [
              9566,
              8448,
              6805,
              8438,
              9917,
              3327,
              5115,
              1562,
              2584,
              1892,
              5987,
              6923,
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            intersect: false
          },
          hover: {
            intersect: true
          },
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              reverse: true,
              gridLines: {
                color: "rgba(122,0,1,0.01)"
              },
              ticks: {
                fontColor: "#000",
                fontFamily: "Poppins"
              },
              grid: {
                color: "white",
                borderColor: "white",
                tickColor: "white"
              }
            }],
            yAxes: [{
              ticks: {
                stepSize: 1000,
                fontColor: "#010",
                fontFamily: "Poppins"
              },
              borderDash: [3, 3],
              gridLines: {
                color: "rgba(221,0,0,0.01)"
              },
              grid: {
                color: "white",
                borderColor: "white",
                tickColor: "white"
              }
            }]
          }
        }
      });
    });
/* Transaction */ 
// Bar chart
new Chart(document.getElementById("TransactionChart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world Cards Transaction (millions) in 2050'
      }
    }
});
/* Investment */ 
new Chart(document.getElementById("InvestmentChart"), {
    type: 'doughnut',
    data: {
      labels: ["Dubai", "Egypt", "UK", "US", "England"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

