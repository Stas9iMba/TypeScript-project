const user = {
  email: "email",
  login: "login",
  password: "password",
  isOnline: true,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// <button onclick="myClickHandler">Click me</button>
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
