import Mock from 'mockjs'


Mock.mock('http://localhost:3000/gethome', {
  tableData: [
    {
      name: "oppo",
      price: 1499,
      "todayBuy|200-500": 100,
      "weekBuy|1000-3000": 300,
      "totalBuy|10000-20000": 1000,
      weekProfits: function () {
        return this.price * this.weekBuy
      }
    },
    {
      name: "vivo",
      price: 1819,
      "todayBuy|200-500": 100,
      "weekBuy|1000-3000": 300,
      "totalBuy|10000-20000": 1000,
      weekProfits: function () {
        return this.price * this.weekBuy
      }
    },
    {
      name: "苹果",
      price: 3999,
      "todayBuy|200-500": 100,
      "weekBuy|1000-3000": 300,
      "totalBuy|10000-20000": 1000,
      weekProfits: function () {
        return this.price * this.weekBuy
      }

    },
    {
      name: "小米",
      price: 2499,
      "todayBuy|200-500": 100,
      "weekBuy|1000-3000": 300,
      "totalBuy|10000-20000": 1000,
      weekProfits: function () {
        return this.price * this.weekBuy
      }

    },
    {
      name: "三星",
      price: 4499,
      "todayBuy|200-500": 100,
      "weekBuy|1000-3000": 300,
      "totalBuy|10000-20000": 1000,
      weekProfits: function () {
        return this.price * this.weekBuy
      }

    },
  ]
})

Mock.mock('http://localhost:3000/dealData', {
  countData: [
    {
      name: "今日支付订单",
      "value|60-180": 123,
      icon: "success",
      color: "#2ec7c9",
    },
    {
      name: "今日收藏订单",
      "value|500-1000": 210,
      icon: "star-on",
      color: "#ffb980",
    },
    {
      name: "今日未支付订单",
      "value|30-60": 123,
      icon: "s-goods",
      color: "#5ablef",
    },
    {
      name: "本月支付订单",
      "value|2000-3000": 1234,
      icon: "success",
      color: "#2ec7c9",
    },
    {
      name: "本月收藏订单",
      "value|5000-10000": 210,
      icon: "star-on",
      color: "#ffb980",
    },
    {
      name: "本月未支付订单",
      "value|300-900": 123,
      icon: "s-goods",
      color: "#5ablef",
    }]
})

Mock.mock('http://localhost:3000/userInfo', {
  userInfo: {
    activeUser: [
      parseInt(Math.random() * (105 - 40) + 40),
      parseInt(Math.random() * (105 - 40) + 40),
      parseInt(Math.random() * (200 - 123) + 123),
      parseInt(Math.random() * (105 - 40) + 40),
      parseInt(Math.random() * (145 - 50) + 50),
      parseInt(Math.random() * (545 - 100) + 100),
      parseInt(Math.random() * (500 - 200) + 200),
    ],
    enactiveUser: [
      parseInt(Math.random() * (65 - 30) + 30),
      parseInt(Math.random() * (95 - 40) + 40),
      parseInt(Math.random() * (150 - 123) + 123),
      parseInt(Math.random() * (75 - 40) + 40),
      parseInt(Math.random() * (135 - 50) + 50),
      parseInt(Math.random() * (120 - 100) + 100),
      parseInt(Math.random() * (250 - 200) + 200),
    ]
  }
})
