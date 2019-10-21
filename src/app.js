import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      things: [
        {what: "Do washing", isDone: true, priorityLevel: "Low"},
        {what: "Go to the gym", isDone: false, priorityLevel: "High"},
        {what: "Eat dinner", isDone: false, priorityLevel: "Low"}
      ],
      newThing: "",
      newPriorityLevel: ""
    },
    methods: {
      saveNewThing: function () {
        this.things.push({
          what: this.newThing,
          isDone: false,
          priorityLevel: this.newPriorityLevel
        });
        this.newThing = "";
      },
      thingDone: function (index) {
        this.things[index].isDone = true;
      }
    }
  });
});
