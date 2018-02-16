Component({

  properties: {
    cartGoodsSelected:{
      type: Boolean,
      value: true
    },
    cartGoodsUrl: {
      type: String,
      value: "/images/default/goods-default.png"
    },
    cartGoodsName: {
      type: String,
      value: "暂未起名"
    },
    cartGoodsPrice: {
      type: Number,
      value: 0
    },
    cartGoodsNum: {
      type: Number,
      value: 0
    },
    cartGoodsUnit: {
      type: String,
      value: "份"
    }
  },

  data: {

  },

  methods: {

  }
})
