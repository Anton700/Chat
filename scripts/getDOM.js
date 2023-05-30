export const DOM = {
  membersCount: document.querySelector(".members-count"),
  membersList: document.querySelector(".members-list"),
  messages: document.querySelector(".messages"),
  input: document.querySelector(".message-form__input"),
  form: document.querySelector(".message-form"),
};

export function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement("div");
  el.appendChild(document.createTextNode(name));
  el.className = "member";
  /* ako želimo da boje budu nasumične, šaljemo boju random*/
  el.style.color = color;
  return el;
}

export function updateMembersDOM(members) {
  DOM.membersCount.innerText = `Ovdje se nalazi ${members.length}  osoba`;
  DOM.membersList.innerHTML = "";
  members.forEach((member) =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}

export function createMessageElement(data, member, side) {
  let time = new Date();
  DOM.messages.innerHTML += `
  <div class="message ${side}">
    <span class="message-user">${member.clientData.name}</span>
    <span class="message-value">${data}</span>
    <span style="font-size:9px;color:rgb(70, 70, 70);">${time.getHours()}:${(time.getMinutes()<10?'0':'') + time.getMinutes()}</span>
  </div>
  `;
}

