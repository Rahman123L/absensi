const chartPie = new Chart("chartPie", {
    type: "doughnut",
    data: {
    labels: ["Tepat waktu", "Terlambat", "Tidak masuk", "Izin"],
    datasets: [
        {
        label: "My First Dataset",
        data: [100, 30, 20, 10],
        backgroundColor: [
            "rgb(61, 219, 114)",
            "rgb(254, 137, 20)",
            "rgb(254, 20, 79)",
            "rgb(78, 92, 255)",
        ],
        },
    ],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        position: "bottom",
        labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 15,
            pointRadius: 6,
        },
        },
    },
    elements: {
        arc: {
        borderWidth: 1,
        },
    },
    cutout: "70%", 
    },
});