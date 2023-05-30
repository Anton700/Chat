import { getRandomName, getRandomColor } from "./getRandom.js";
import {
  updateMembersDOM,
  DOM,
  createMessageElement
} from "./getDOM.js";

//deklariranje korisnika
let members = [];

//konektiranje na SC
const CHANNEL_ID = "MsbNcukGtEIqpvbp";  //jedinstveni id sobe
const drone = new Scaledrone(CHANNEL_ID, {
  data: {
    //clientData
    name: getRandomName(),
    color: getRandomColor(),
  },
});

//connect to a room
drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Uspješno povezan na Scaledrone");

  //joining room
  const room = drone.subscribe("observable-Najbolji"); //naziv sobe, kreirao najbolji kao naziv
  room.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    console.log("Spojen u sobu");
  });

  //svi korisnici spojeni
  room.on("members", (m) => {
    members = m;
    updateMembersDOM(members);
  });

  //pridružili se
  room.on("member_join", (member) => {
    members.push(member);
    updateMembersDOM(members);
  });

  //napuštanje
  room.on("member_leave", ({ id }) => {
    const index = members.findIndex((member) => member.id === id);
    members.splice(index, 1);
    updateMembersDOM(members);
  });

  room.on("message", (message) => {
    const { data, clientId, member } = message;
    const side = clientId === drone.clientId?"message-right":"message-left";
      createMessageElement(data, member, side);

  });

  //sending message
  DOM.form.addEventListener("submit", sendMessage);

  function sendMessage() {
    const value = DOM.input.value;
    if (value === "") {
      return;
    }
    DOM.input.value = "";
    drone.publish({
      room: "observable-Najbolji",
      message: value,
    });
  }
});

