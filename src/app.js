import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      things: [
        {what: "Do washing", isDone: true},
        {what: "Go to the gym", isDone: false},
        {what: "Eat dinner", isDone: false}
      ],
      newThing: ""
    },
    methods: {
      saveNewThing: function () {
        this.things.push({
          what: this.newThing,
          isDone: false
        });
        this.newThing = "";
      },
      thingDone: function (index) {
        this.things[index].isDone = true;
      }
    }
  });
});
