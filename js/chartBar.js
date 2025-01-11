const chartBar = new Chart("chartBar", {
    type: "bar",
    data: {
    labels: [1, 5, 10, 15, 20, 25, 30],
    datasets: [
        {
        label: "",
        data: [1, 3, 5, 7, 9, 11, 13],
        backgroundColor: [
            "rgb(61, 219, 114)",
            "rgb(254, 137, 20)",
            "rgb(254, 20, 79)",
            "rgb(78, 92, 255)",
        ],
        borderWidth: 0,
        fill: true,
        borderRadius: 10,
        },
    ],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        },
    },
    scales: {
        y: {
        grid: {
            color: "rgb(209 213 219)",
            display: true,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
        x: {
        grid: {
            color: "rgb(209 213 219)",
            display: false,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
    },
    },
});